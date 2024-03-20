// Projects.js
import React, { useState } from "react";
import Project from "../Components/Project";
import VideoModal from "../Components/VideoModal";
import { projectDetails, addinDetails } from "../Details";

function Projects() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const toggleVideo = (url) => {
    setIsVideoVisible(!isVideoVisible);
    setVideoUrl(url);
  };

  const closeVideo = () => {
    setIsVideoVisible(false);
    setVideoUrl("");
  };

  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          BIM Cloud Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            projectDetails.map(
              ({
                title,
                image,
                description,
                techstack,
                previewLink,
                githubLink,
                videoUrl,
              }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                  toggleVideo={toggleVideo}
                  videoUrl={videoUrl}
                />
              )
            )
          )}
        </div>
      </section>
      <br></br>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Addins & Plugins
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            addinDetails.map(
              ({
                title,
                image,
                description,
                techstack,
                previewLink,
                githubLink,
                videoUrl,
              }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                  toggleVideo={toggleVideo}
                  videoUrl={videoUrl}
                />
              )
            )
          )}
        </div>
      </section>

      {/* Conditional rendering of VideoPlayer component */}
      {isVideoVisible && (
        <VideoModal videoUrl={videoUrl} onClose={closeVideo} />
      )}
    </main>
  );
}

export default Projects;
