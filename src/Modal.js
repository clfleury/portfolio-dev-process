import React from "react";
import { PortfolioContext } from "./site-contexts";

export const Modal = ({ closeModal, ModalContent }) => {
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
                <ModalContent {...state} />
              </div>
            )}
          </>
        );
      }}
    </PortfolioContext.Consumer>
  );
};
