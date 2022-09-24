import React, { useState, useEffect } from "react";
import { PortfolioContext } from "./site-contexts";

export const Modal = ({ data, projectNum = 0, closeModal }) => {
  const { portfolio } = data;

  //this is a highly specific implementation; ultimately, we could use component composition to reduce the functionality to a simple opening and closing of a fullscreen modal that can contain any data
  const [currentProjectNum, setCurrentProjectNum] = useState(projectNum);

  //update project num when passed project num changes
  useEffect(() => {
    setCurrentProjectNum(projectNum);
  }, [projectNum]);

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
    <PortfolioContext.Consumer>
      {(state) => {
        return (
          <>
            {state.isModalOpen && (
              <div className="project-modal">
                <div
                  className="project-modal__exit"
                  onClick={(e) => {
                    closeModal();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      pointerEvents="all"
                      d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"
                    />
                  </svg>
                </div>
                <div
                  className="project-modal__toggle-backwards"
                  onClick={toggleProjectsForward}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                  </svg>
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
                              "url(" +
                              portfolio[currentProjectNum].image.webp +
                              ")",
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
                  {data.portfolio[currentProjectNum].modal_images.map(
                    (data, key) => {
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
                    }
                  )}
                </div>
              </div>
            )}
          </>
        );
      }}
    </PortfolioContext.Consumer>
  );
};
