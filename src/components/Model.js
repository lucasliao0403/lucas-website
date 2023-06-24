

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader.js";


export function Model() {

    const model = useGLTF('./shiba/scene.gltf');
    console.log(model);
    model.scene.scale.set(5,5,5);
    // console.log(model);

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor='white' />
            <pointLight intensity={2} />
            <ambientLight intensity={1} />

            <primitive
            object={model.scene}
            // scale={isMobile ? 0.7 : 0.75}
            // position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
            // rotation={[-0.01, -0.2, -0.1]}
        />
        </mesh>
    )
}

export function ModelCanvas() {
    return (
        <Canvas
            frameloop='demand'
            shadows
            // dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >

            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />

                <Model/>

            </Suspense>

            <Preload all />
        </Canvas>

    )
}