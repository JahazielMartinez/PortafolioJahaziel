import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-image">
        <p className="skeleton-text-overlay">Loading...</p>
      </div>
      <div className="skeleton-title" />
      <div className="skeleton-text" />
    </div>
  );
};

export default SkeletonLoader;
