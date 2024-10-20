import { Environment, OrbitControls, Text3D, Float } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber"; // Import useFrame

const EnvoirnmentComp = () => {
  const textRef = useRef(); // Create a reference for the Text3D component
  const envRef = useRef(); // Create a reference for the Environment

  useFrame(() => {
    if (envRef.current) {
      envRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <group ref={envRef}>
        <OrbitControls autoRotate />
        <Environment
          // Attach the ref to the Environment
          background
          files={[
            "/1.jpg", // Positive X
            "/2.jpg", // Negative X
            "/3.jpg", // Positive Y
            "/4.jpg", // Negative Y
            "/5.jpg", // Positive Z
            "/6.jpg",
          ]}
        />
      </group>
      
    </>
  );
};

export default EnvoirnmentComp;
