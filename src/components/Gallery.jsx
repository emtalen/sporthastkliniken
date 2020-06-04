import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Modal, Image } from "semantic-ui-react";

const Gallery = () => {
  const [instagramFeed, setInstagramFeed] = useState([]);
  const [openPhoto, setOpenPhoto] = useState("");

  let displayPhotos;
  const fetchPhotos = async () => {
    await axios
      .get(
        'https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"33288525717","first":60,"after":null}'
      )
      .then((response) => {
        setInstagramFeed(
          response.data.data.user.edge_owner_to_timeline_media.edges
        );
      });
  };
  useEffect(() => {
    fetchPhotos();
  }, []);

  if (instagramFeed !== undefined) {
    displayPhotos = instagramFeed.map((photo) => {
      return (
        <>
          <div className="instagram-photo">
            <img
              id={photo.node.id}
              src={photo.node.thumbnail_src}
              alt={photo.node.shortcode}
              onClick={() => setOpenPhoto(photo.node.display_url)}
            />
          </div>
          {openPhoto !== "" && (
            <Modal
              open={true}
              closeOnDimmerClick={true}
              onClose={() => setOpenPhoto("")}
            >
              <Modal.Content image>
                <Image src={openPhoto} alt={photo.node.shortcode} />
              </Modal.Content>
            </Modal>
          )}
        </>
      );
    });
  }

  return (
    <div id="gallery">
      <h1>Galleri</h1>
      {displayPhotos}
    </div>
  );
};

export default Gallery;
