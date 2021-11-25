import React from "react";
import "./style.css";

const GalleryHeader = ({
  filter: activeFilter,
  filters,
  handleFilterChange,
}) => {
  return (
    <div className="gallery-header">
      <div className="ui four item menu">
        {filters.map((filter) => (
          <button
            className={`item ${activeFilter === filter ? "active" : ""}`}
            key={filter}
            onClick={(e) => handleFilterChange(e, filter)}
          >
            {filter.split("-").join(" ")}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryHeader;
