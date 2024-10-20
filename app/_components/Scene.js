import { useFrame, extend, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Custom from "./Custom";
import Points from "./Points";
import EnvoirnmentComp from "./Envoirnment";
extend({ OrbitControls: OrbitControls });
const Scene = () => {

  return (
    <>
      
      <Points />
    </>
  );
};
export default Scene;
