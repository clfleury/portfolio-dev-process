import React, { useState, useLayoutEffect } from "react";
import { data } from "./App.js";
import { Modal } from "./Modal.js";
import { LoadingIcon } from "./LoadingIcon";
import { PortfolioContext } from "./site-contexts";
import * as R from "ramda";
import { PortfolioModalContent } from "./PortfolioModalContent.js";

const ProjectList = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useLayoutEffect(() => {
    isModalOpen === true
      ? document.querySelector("body").classList.add("modal-open")
      : document.querySelector("body").classList.remove("modal-open");
  }, [isModalOpen]);

  const openModal = (project_num) => {
    setIsModalOpen((prev) => !prev);
    setCurrentProject(project_num);
  };

  const closeModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const portfolioData = R.prop("portfolio", data);
  var mapIndexed = R.addIndex(R.map);

  return (
    <PortfolioContext.Provider value={{ data, currentProject, isModalOpen }}>
      <div className="portfolio-container fade-in">
        <div className="portfolio-style">
          {mapIndexed((data, key) => {
            return (
              <ProjectItem
                projectData={data}
                key={key}
                onOpen={(e) => {
                  openModal(data.project_num);
                }}
                isOpen={isModalOpen}
              />
            );
          }, portfolioData)}
        </div>
        <Modal closeModal={closeModal} ModalContent={PortfolioModalContent} />
      </div>
    </PortfolioContext.Provider>
  );
};

class ProjectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  render() {
    const divStyle = {
      backgroundImage: 'url("' + this.props.imagePlaceHolder + '")',
      backgroundSize: "cover",
    };
    return (
      <div className="portfolio-item">
        <div
          className="portfolio-image asyncImage"
          data-src={
            document.documentElement.classList.contains("webp")
              ? this.props.projectData.image.webp
              : this.props.projectData.image.fallback
          }
          style={divStyle}
          onClick={(e) => {
            this.props.onOpen();
          }}
        >
          <div className="display-name">
            {this.props.projectData.project_name}
          </div>
        </div>
      </div>
    );
  }
}

export default class Portfolio extends React.Component {
  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    return (
      <div className="portfolio fade-in">
        {this.props.loading ? (
          <LoadingIcon />
        ) : (
          <div>
            <div
              className="hero-secondary"
              style={{
                backgroundImage: document.documentElement.classList.contains(
                  "webp"
                )
                  ? "url(" +
                    data.homebgs[
                      Math.floor(Math.random() * data.homebgs.length)
                    ].webp +
                    ")"
                  : "url(" +
                    data.homebgs[
                      Math.floor(Math.random() * data.homebgs.length)
                    ].fallback +
                    ")",
              }}
            ></div>
            <div
              className="content"
            >
              <h2 className="page-title">
                My<strong>\Work</strong>
              </h2>
              <hr />
            </div>
            <ProjectList />
          </div>
        )}
      </div>
    );
  }
}
