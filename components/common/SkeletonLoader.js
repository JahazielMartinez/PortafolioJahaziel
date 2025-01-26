import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-image" />
      <div className="skeleton-title" />
      <div className="skeleton-text" />
    </div>
  );
};

export default SkeletonLoader;
