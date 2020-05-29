import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [instagramFeed, setInstagramFeed] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"33288525717","first":60,"after":null}'
      )
      .then((response) => {
        setInstagramFeed(
          response.data.data.user.edge_owner_to_timeline_media.edges
        );
      });
  }, []);

  let displayPhotos;
  if (instagramFeed !== undefined) {
    displayPhotos = instagramFeed.map((photo) => {
      return (
        <div className="instagram-photo">
          <img src={photo.node.thumbnail_src} alt={photo.node.shortcode} />
        </div>
      );
    });
  }

  return <div id="gallery">{displayPhotos}</div>;
};

export default Gallery;
