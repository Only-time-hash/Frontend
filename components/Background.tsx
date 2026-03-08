"use client"

import { Canvas } from "@react-three/fiber"
import { Float, Sphere } from "@react-three/drei"

export default function Background() {
  return (
    <Canvas className="absolute top-0 left-0 -z-10">
      <ambientLight intensity={1} />

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 100, 200]}>
          <meshStandardMaterial color="#8b5cf6" />
        </Sphere>
      </Float>

    </Canvas>
  )
}