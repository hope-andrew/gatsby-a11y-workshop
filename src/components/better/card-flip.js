import React, { useRef, useEffect, useState, useImperativeHandle } from "react";

import "./card-flip.scss";

function CardFlip(props) {
  let toggleButtonRef = useRef(null);
  let closeButtonRef = useRef(null);
  let overlayRef = useRef(null);

  let [isActive, setIsActive] = useState(false);

  const activeClass = isActive ? "active" : "";

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const closeOverlay = () => {
    setIsActive(false);
    toggleButtonRef.current.focus();
  };

  useEffect(() => {
    const handler = event => {
      if (event.propertyName && closeButtonRef.current !== null) {
        closeButtonRef.current.focus();
      }
      window.addEventListener("transitioned", handler);
    };
  }, []);

  const overlay = isActive ? (
    <div>
      <div>
        <div className="gradient-overlay"></div>
        <button
          className="team-close-button"
          aria-label={`Close ${props.memberName}`}
          ref={closeButtonRef}
        >
          X
        </button>
        <h5 className="team-name">{props.memberName}</h5>
        <span className="team-subtitle">{props.subtitle}</span>
        <p>{props.bio}</p>
        <div className="team-social" role="dialog"></div>
      </div>
    </div>
  ) : (
    <div></div>
  );

  return (
    <div className="team-member">
      <div className={`team-content ${activeClass}`}>
        <button
          className="toggle-button"
          onClick={handleClick}
          ref={toggleButtonRef}
        >
          <span className="team-image">
            <img src={props.image} alt="" />
          </span>
          <span className="team-name">{props.memberName}</span>
          <span className="team-subtitle">{props.subtitle}</span>
        </button>
      </div>
    </div>
  );
}

export default CardFlip;
