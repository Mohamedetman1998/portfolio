import { Container } from "postcss";
import React from "react";
import ReactPlayer from "react-player";
import YouTubePlayer from "react-player/youtube";

function VideoModal({ videoUrl, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <YouTubePlayer url={videoUrl} playing={true} height="450px" controls />
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default VideoModal;
