import IGlassCard from "@models/IGlassCard";
import React from "react";

function GlassCard({ image, title, description, actions }: IGlassCard) {
  return (
    <div className="card w-96 glass">
      {image && <figure>{image}</figure>}

      <div className="card-body">
        {title && <div className="card-title">{title}</div>}
        {description && (
          <p className="text-amber-50 text-start">{description}</p>
        )}
        {actions && <div className="card-actions justify-end">{actions}</div>}
      </div>
    </div>
  );
}

export default GlassCard;
