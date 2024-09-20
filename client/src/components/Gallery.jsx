import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        paddingBottom: "2%", // Reduced bottom padding to decrease gap
      }}
    >
      <h1
        style={{
          fontSize: "6rem",
          textAlign: "center",
          color: "white",
          marginTop: "0",
          marginBottom: "2%", // Reduced margin bottom to decrease gap
        }}
      >
        Gallery
      </h1>

      {/* First Gallery (default direction) */}
      <div
        className="slider"
        style={{
          "--width": "400px", // Width of images
          "--height": "400px", // Height of images
          "--quantity": "9",
          marginBottom: "0", // Remove margin between galleries
        }}
      >
        <div className="list">
          {/* Gallery items */}
          <div className="item" style={{ "--position": 1 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 1"
            />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 2"
            />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 3"
            />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 4"
            />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 5"
            />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 6"
            />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 7"
            />
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 8"
            />
          </div>
          <div className="item" style={{ "--position": 9 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 9"
            />
          </div>
        </div>
      </div>

      {/* Second Gallery (reverse direction) */}
      <div
        className="slider"
        reverse="true" /* This will reverse the animation direction */
        style={{
          "--width": "400px", // Width of images
          "--height": "400px", // Height of images
          "--quantity": "9",
          marginTop: "0", // Remove margin between galleries
        }}
      >
        <div className="list">
          {/* Gallery items */}
          <div className="item" style={{ "--position": 1 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 1"
            />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 2"
            />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 3"
            />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 4"
            />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 5"
            />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 6"
            />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 7"
            />
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 8"
            />
          </div>
          <div className="item" style={{ "--position": 9 }}>
            <img
              src="https://framerusercontent.com/images/X1smPCKbAyfgGAcZp9Xs89QXqTQ.jpg?scale-down-to=512"
              alt="Gallery Image 9"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
