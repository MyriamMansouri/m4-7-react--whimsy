import React from "react";
import styled from "styled-components";
import Particle from "./Particle";

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;
const CenteredInsideParent = styled.div`
  position:absolute;
  top:calc(50%-10px);
  left:calc(50%-10px);
`;
const ConfettiPiece = ({ angle, distance, color }) => {
  return (
    <CenteredInsideParent>
      <Particle angle={angle} distance={distance} color={color}>
        <Circle style={{ backgroundColor: color }} />
      </Particle>
    </CenteredInsideParent>
  );
};

export default ConfettiPiece;
