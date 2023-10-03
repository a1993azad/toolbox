# Install dependencies only when needed
FROM node:18-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk update && apk add --no-cache libc6-compat && apk add git
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts=false


# Rebuild the source code only when needed
FROM node:18-alpine AS builder
# add environment variables to client code
ARG OPEN_WEATHER_API_KEY=OPEN_WEATHER_API_KEY


ENV OPEN_WEATHER_API_KEY=$OPEN_WEATHER_API_KEY

WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules


RUN NODE_ENV=production npm run build

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /app
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration. 
# Copy all necessary files used by nex.config as well otherwise the build will fail.


COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

USER nextjs

# Expose
EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV=production
CMD ["npm", "start"]