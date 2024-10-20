import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const Points = () => {
  const texture = useLoader(THREE.TextureLoader, "/snow.jpg"); // Updated to direct path
  const pointsRef = useRef();
  const verticesAmount = 5000;
  const positionArray = new Float32Array(verticesAmount * 3);
  for (let i = 0; i < verticesAmount * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 12.0;
  }
  useFrame((state, delta) => {
    pointsRef.current.rotation.y += delta * 0.2;
    pointsRef.current.rotation.x += delta * 0.2;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positionArray.length}
          itemSize={3}
          array={positionArray}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        alphaMap={texture}
        transparent
        depthTest={false}
      />
    </points>
  );
};

export default Points;
