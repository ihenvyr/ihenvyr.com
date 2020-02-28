import React from "react";
import PropTypes from "prop-types";

const DiagonalBox = (props) => {
  const computeMagicNumber = () => {
    const angle = props.angle;
    const angleRad = angle * Math.PI / 180;
    return Math.abs(Math.tan(angleRad) / 2);
  };

  const computeSkewPadding = () => {

  };

  return (
    <section className={props.className}>
      <div>{props.children}</div>
      {/* language=SCSS */}
      <style jsx global>{`
        :root {
          --width: 100vw;
          --angle: ${props.angle}deg;
          --magic-number: ${computeMagicNumber()};
          --skew-padding: calc(var(--width) * var(--magic-number));
        }
      `}</style>

      {/* language=SCSS */}
      <style jsx>{`
        /* CONTAINER */
        section {
          position: relative;
          padding: var(--skew-padding) 0;
          margin-top: -1px;
        }
        
        section:before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          transform: skewy(var(--angle));;
          transform-origin: 50% 0;
          outline: 1px solid transparent;
          backface-visibility: hidden;
          background-image: linear-gradient(45deg, ${props.colorA}, ${props.colorB});
        }
        
        /* CONTENT */
        div {
          max-width: var(--width);
          margin: 0 auto;
          padding: 1.5em 0;
          position: relative;
        }
      `}</style>
    </section>
  );
};

DiagonalBox.propTypes = {
  angle: PropTypes.number,
  colorA: PropTypes.string,
  colorB: PropTypes.string,
  className: PropTypes.string,
};
DiagonalBox.defaultProps = {
  angle: -6,
  colorA: "#BCDBCE",
  colorB: "#BCDBCE",
  className: undefined,
};

export default DiagonalBox;