import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { gsap } from 'gsap';

const DesignPlanet = () => {
  const planetRef = useRef();
  const texture = useLoader(TextureLoader, '/textures/planet-texture.jpg'); // Replace with your texture path

  useEffect(() => {
    // Rotate the planet continuously
    gsap.to(planetRef.current.rotation, {
      y: Math.PI * 2,
      duration: 20,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

  return (
    <mesh ref={planetRef}>
      <Sphere args={[1.5, 64, 64]}>
        <meshStandardMaterial map={texture} />
      </Sphere>
      {/* Glow Effect */}
      <pointLight color="#88ccff" intensity={1} distance={5} position={[0, 0, 3]} />
    </mesh>
  );
};

const SpaceScene = () => {
  return (
    <Canvas className="canvas" camera={{ position: [0, 2, 5], fov: 75 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0.8} fade />
      <DesignPlanet />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default SpaceScene;
