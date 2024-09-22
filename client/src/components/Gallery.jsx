import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "20%",
        width: "100%",
        paddingBottom: "2%", // Reduced bottom padding to decrease gap
      }}
      // onMouseEnter={handleHover} // Trigger image change on hover
    >
      <h1
        style={{
          fontSize: "6rem",
          textAlign: "center",
          color: "black",
          marginTop: "0",
        }}
      >
        Gallery
      </h1>
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
      {/* <div className="image-container" style={{ textAlign: "center" }}>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="image"
          style={{
            width: "800px",
            height: "500px",
            borderRadius: "5%",
            marginBottom: "20px",
          }}
        />
      </div> */}
    </div>
  );
};

export default Gallery;
