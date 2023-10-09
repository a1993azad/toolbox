import IGlassCard from "@models/IGlassCard";
import React from "react";

function GlassCard({ image, title, description, actions,children }: IGlassCard) {
  return (
    <div className="card glass bg-neutral-700 bg-opacity-20 w-full">
      {image && <figure>{image}</figure>}

      <div className="card-body">
        {title && <div className="card-title">{title}</div>}
        {description && (
          <p className="text-amber-50 text-start">{description}</p>
        )}
        {actions && <div className="card-actions justify-end">{actions}</div>}
        {children}
      </div>
    </div>
  );
}

export default GlassCard;
