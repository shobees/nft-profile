import React, { useState } from "react";
import Masonry from "react-responsive-masonry";
import GalleryCard from "./card";
import GalleryHeader from "../../GalleryHeader";
import { gallery } from "./data";
import "./style.css";

const MasonryGallery = () => {
  const [filter, setFilter] = useState("all");
  const filters = ["all", "women", "sports", "pop-culture"];
  const [filteredGallery, setFilteredGallery] = useState([]);

  const handleFilterChange = (e, filter) => {
    e.preventDefault();
    setFilter(filter);
    if (filter === "all") {
      setFilteredGallery(gallery);
    } else {
      const filteredImages = gallery.filter((img) => img.type === filter);
      setFilteredGallery(filteredImages);
    }
  };

  const images =
    Array.isArray(filteredGallery) && filteredGallery.length
      ? filteredGallery
      : gallery;

  return (
    <div className="container fluid">
      <GalleryHeader
        filter={filter}
        filters={filters}
        handleFilterChange={handleFilterChange}
      />
      <Masonry
        columnsCount={3}
        gutter={8}
        className="ui link cards masonry-gallery"
      >
        {images.map((image) => (
          <GalleryCard image={image} filter={filter} key={image.title} />
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryGallery;
