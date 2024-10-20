"use client";
import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./_components/Scene";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EnvoirnmentComp from "./_components/Envoirnment";
import { Text3D } from "@react-three/drei";
import CompanyTitle from "./_components/CompanyTitle";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <div>
      <div className="mainContainer" style={{ position: "relative" }}>
        <Canvas
          gl={{ alpha: true }}
          style={{
            width: "100vw",
            height: "100vh",
            zIndex: -1,
          }}
        >
          {/* <Scene /> */}
          <EnvoirnmentComp />
        </Canvas>

        {/* Content Section */}
        <section
          style={{
            position: "absolute",
            width: "100vw",
            top: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Canvas>
            <CompanyTitle count={400} color={"blue"} />
          </Canvas>
        </section>
      </div>
      <section className="h-[100vh] z-10">
        <Canvas
          gl={{ alpha: true }}
          style={{
            width: "100vw",
            height: "100vh",
            zIndex: 10,
          }}
        >
          <Scene />
          <CompanyTitle count={100} color={"lightblue"} />
        </Canvas>
      </section>
    </div>
  );
}
