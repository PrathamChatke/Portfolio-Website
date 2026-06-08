import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function RotatingSphere() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial color="#4f46e5" wireframe />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas className="h-[400px]">
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 3, 3]} />

      <RotatingSphere />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}