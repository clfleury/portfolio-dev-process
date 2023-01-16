import React, { useState, useEffect } from "react";
import { RightArrow } from "./icons/RightArrow";

export const PortfolioModalContent = ({
  data,
  currentProject,
  isModalOpen,
}) => {
  const { portfolio } = data;

  // this is a duplication on state in the context and may be able to be simplified
  const [currentProjectNum, setCurrentProjectNum] = useState(currentProject);

  //update project num when passed project num changes
  useEffect(() => {
    setCurrentProjectNum(currentProject);
  }, [currentProject]);

  const toggleProjectsForward = () => {
    if (currentProjectNum < portfolio.length - 1) {
      setCurrentProjectNum((prev) => prev + 1);
    } else {
      setCurrentProjectNum(0);
    }
  };

  const toggleProjectsBackward = () => {
    if (currentProjectNum > 0) {
      setCurrentProjectNum((prev) => prev - 1);
    } else {
      setCurrentProjectNum(portfolio.length - 1);
    }
  };

  return (
    <>
      {isModalOpen && (
        <>
          <div
            className="project-modal__toggle-backwards"
            onClick={toggleProjectsForward}
          >
            <RightArrow />
          </div>
          <div
            className="project-modal__toggle-forwards"
            onClick={toggleProjectsBackward}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M11,23l2.8-2.8L7.6,14H24v-4H7.6l6.2-6.2L11,1L0,12L11,23z" />
            </svg>
          </div>
          <div className="content">
            <h2
              className="fade-in"
              style={{
                color: "#ffffff",
                marginTop: "40px",
                clear: "both",
                userSelect: "none",
              }}
            >
              {portfolio[currentProjectNum].project_name}
            </h2>
            <h3
              className="fade-in"
              style={{
                color: "#ffffff",
                clear: "both",
                lineHeight: "0",
                paddingBottom: "40px",
                userSelect: "none",
              }}
            >
              {portfolio[currentProjectNum].date}
            </h3>
            <div
              className="fade-in featured-image"
              style={
                document.documentElement.classList.contains("webp")
                  ? {
                      backgroundImage:
                        "url(" + portfolio[currentProjectNum].image.webp + ")",
                    }
                  : {
                      backgroundImage:
                        "url(" +
                        portfolio[currentProjectNum].image.fallback +
                        ")",
                    }
              }
            ></div>
            <p
              className="fade-in"
              style={{
                color: "#ffffff",
                clear: "both",
                padding: "40px 0px 20px 0px",
              }}
            >
              {portfolio[currentProjectNum].description}
            </p>
            <img
              src={
                document.documentElement.classList.contains("webp")
                  ? portfolio[currentProjectNum].image.webp
                  : portfolio[currentProjectNum].image.fallback
              }
              alt="project detail"
              className="fade-in"
            />
            {data.portfolio[currentProjectNum].modal_images.map((data, key) => {
              var dataImg;
              document.documentElement.classList.contains("webp")
                ? (dataImg = data.webp)
                : (dataImg = data.fallback);
              return (
                <img
                  src={dataImg}
                  key={key}
                  alt="project-detail"
                  className="fade-in"
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
