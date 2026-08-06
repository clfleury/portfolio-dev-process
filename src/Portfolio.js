/** @jsx jsx */
import React, { useState, useLayoutEffect } from "react";
import { Modal } from "./Modal.js";
import { LoadingIcon } from "./icons/LoadingIcon";
import { PortfolioContext } from "./site-contexts";
import * as R from "ramda";
import { PortfolioModalContent } from "./PortfolioModalContent.js";
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";
import { colors } from "./styling/colors";

const ProjectList = ({ data }) => {
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
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            width: 70%;
            margin-left: 10%;
            background-color: ${colors.lightBlue};
            margin-left: calc(15% - 30px);
            padding: 30px;
            border-radius: 20px;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
          `}
        >
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
            <p
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "#23294d",
                lineHeight: "1.3rem",
                textAlign: "left",
              }}
            >
              {this.props.projectData.project_cat}
            </p>
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
                  "webp",
                )
                  ? "url(" +
                    this.props.data.homebgs[
                      Math.floor(Math.random() * this.props.data.homebgs.length)
                    ].webp +
                    ")"
                  : "url(" +
                    this.props.data.homebgs[
                      Math.floor(Math.random() * this.props.data.homebgs.length)
                    ].fallback +
                    ")",
              }}
            ></div>
            <div className="content">
              <h2 className="page-title">
                My<strong>•Work</strong>
              </h2>
            </div>
            <ProjectList data={this.props.data} />
          </div>
        )}
      </div>
    );
  }
}
