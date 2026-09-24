import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/kim-character.glb");

  return (
    <primitive
    object={scene}
    scale={1.9}
    position={[0, -1.5, 0]} 
    />
  );
}

function Profile3D() {
  return (
    <div className="profile-3d">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />

        <Environment preset="studio" />

        <Model />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.5}
        />
      </Canvas>
    </div>
  );
}

export default Profile3D;