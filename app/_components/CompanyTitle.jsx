import { Text3D, Float, Environment, Sparkles, Stars } from "@react-three/drei";
import { useRef } from "react";
import { Color } from "three";

const GalaxyEffectMaterial = () => {
  const colors = [
    new Color("#FF5733"), // Color 1: Red
    new Color("#FFC300"), // Color 2: Yellow
    new Color("#DAF7A6"), // Color 3: Light Green
    new Color("#900C3F"), // Color 4: Dark Red
    new Color("#581845"), // Color 5: Dark Purple
  ];

  return colors;
};

const CompanyTitle = (props) => {
  const textRef = useRef(); // Create a reference for the Text3D component
  const gradientColors = GalaxyEffectMaterial();

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={1.5} />
      <spotLight
        position={[0, 10, 5]}
        angle={0.15}
        penumbra={0.5}
        intensity={2}
      />

      {/* Environment */}
      <Environment preset="city" />

      {/* Floating Text with Galaxy-like Colors */}
      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={1}
        floatingRange={[0, 0.5]}
      >
        <Text3D
          ref={textRef}
          position={[-2.2, -0.2, 1]}
          font={"fonts/2.json"}
          height={0.2}
          size={0.75}
          curveSegments={30}
          bevelEnabled
          bevelThickness={0.03}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={8}
        >
          TYCHON
          <meshStandardMaterial
            color={"white"} // Base color
            metalness={0.5}
            roughness={0.2}
            emissive={"#0463CA"} // Start with the fourth color for the emissive effect
            emissiveIntensity={0.5}
          />
        </Text3D>
      </Float>
      <Stars
        radius={100}
        depth={100}
        count={6000}
        factor={4}
        saturation={0}
        fade
        speed={2}
        
      />
      {/* Sparkles Around the Text */}
      {/* <Sparkles
        count={props.count} // Number of sparkles
        size={2} // Size of the sparkles
        scale={5} // Scale of the sparkle effect
        position={[0, 0, 0]} // Positioning of the sparkles (centered around the text)
      /> */}
    </>
  );
};

export default CompanyTitle;
