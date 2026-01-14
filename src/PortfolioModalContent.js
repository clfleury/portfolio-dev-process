import React, { useState, useEffect } from "react";
import { RightArrow } from "./icons/RightArrow";
import { colors } from "./styling/colors";
import { ModalHeader } from "./modal-header.jsx";
import { LeftArrow } from "./LeftArrow";

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
    const modalDiv = document.getElementById("project-modal");
    modalDiv.scrollTop = 0;
    //window.scrollTo(0, 0);
  };

  const toggleProjectsBackward = () => {
    if (currentProjectNum > 0) {
      setCurrentProjectNum((prev) => prev - 1);
    } else {
      setCurrentProjectNum(portfolio.length - 1);
    }
    const modalDiv = document.getElementById("project-modal");
    modalDiv.scrollTop = 0;
    //window.scrollTo(0, 0);
  };

  const featuredImage = portfolio[currentProjectNum].hasOwnProperty(
    "modal_feature",
  )
    ? portfolio[currentProjectNum].modal_feature
    : portfolio[currentProjectNum].image;

  return (
    <>
      {isModalOpen && (
        <>
          <div style={{ position: "fixed", display: "block", right: 0 }}>
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
              <LeftArrow />
            </div>
          </div>
          <div className="content">
            <ModalHeader
              projectCategory={portfolio[currentProjectNum].project_cat}
              projectName={portfolio[currentProjectNum].project_name}
              projectDate={portfolio[currentProjectNum].date}
            />
            <div
              className="fade-in featured-image"
              style={{
                borderRadius: "20px",
                backgroundImage: document.documentElement.classList.contains(
                  "webp",
                )
                  ? "url(" + featuredImage.webp + ")"
                  : "url(" + featuredImage.fallback + ")",
              }}
            ></div>
            <p
              className="fade-in"
              style={{
                color: colors.white,
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
            <div
              style={{
                padding: "40px",
              }}
            >
              <h5
                style={{
                  textAlign: "center",
                  lineHeight: 0,
                  marginBottom: 0,
                }}
              >
                <strong>Skills</strong>
              </h5>
              <p style={{ textAlign: "center" }}>
                {portfolio[currentProjectNum].skills?.map((item, i) => (
                  <span key={i}>
                    {item}
                    {i !== portfolio[currentProjectNum].skills.length - 1
                      ? "  •  "
                      : ""}
                  </span>
                ))}
              </p>
            </div>
            {data.portfolio[currentProjectNum].modal_images.map((data, key) => {
              var dataImg;
              document.documentElement.classList.contains("webp")
                ? (dataImg = data.webp)
                : (dataImg = data.fallback);
              return (
                <>
                  {dataImg.includes("mp4") ? (
                    <video width="100%" autoPlay={true} loop key={dataImg}>
                      <source src={dataImg} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={dataImg}
                      key={key}
                      alt="project-detail"
                      className="fade-in"
                    />
                  )}
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
