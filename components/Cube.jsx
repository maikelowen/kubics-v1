import React from "react";
import Cube from "react-3d-cube";
import Image from 'next/image';

//import "./styles.css";

function CubeComp() {
  return (
    <div className="App">
        <div
        style={{
          width: 200,
          height: 200
        }}
      >
        <Cube size={200} index="front">
            {/* <Image src={logo} alt='Front' />
            <Image src={logo} alt="right" />
            <Image src={logo} alt="back" />
            <Image src={logo} alt="left" />
            <Image src={logo} alt="top" />
            <Image src={logo} alt="bottom" /> */}
        </Cube>
        </div>
      </div>
  );
}

export default CubeComp