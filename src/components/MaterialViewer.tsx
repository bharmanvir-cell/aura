import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Suspense } from "react";

function PlasterSphere() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#D4AF37" // Gold base
          speed={3}
          distort={0.2}
          radius={1}
          roughness={0.1}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Sphere>
    </Float>
  );
}

export default function MaterialViewer() {
  return (
    <div className="w-full h-full min-h-[400px] cursor-grab active:cursor-grabbing">
      <Canvas 
        camera={{ position: [0, 0, 3], fov: 45 }}
        dpr={[1, 2]} // Limit resolution on high-DPI screens
        performance={{ min: 0.5 }} // Allow scaling down if performance drops
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          
          <PlasterSphere />
          
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            makeDefault
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none text-center">
        <span className="font-mono text-[8px] text-gold uppercase tracking-[0.3em] opacity-50">
          Drag to explore texture
        </span>
      </div>
    </div>
  );
}
