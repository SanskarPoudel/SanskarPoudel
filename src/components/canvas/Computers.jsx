import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ computer }) => (
  <mesh>
    <hemisphereLight intensity={0.15} groundColor="black" />
    <pointLight intensity={1} />
    <spotLight position={[-20, 50, 10]} angle={0.12} />
    <primitive
      object={computer.scene}
      scale={0.75}
      position={[0, -3.25, -1.5]}
      penumbra={1}
      intensity={1}
      castShadow
    />
  </mesh>
);

const ComputersCanvas = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ powerPreference: "high-performance" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers computer={computer} />
      </Suspense>
      <Preload />
    </Canvas>
  );
};

export default ComputersCanvas;
