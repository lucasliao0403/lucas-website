

import React, { Suspense, useEffect, useState,  } from "react";
import { Canvas , useFrame} from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three'
import {motion, useScroll} from "framer-motion";


import CanvasLoader from "./Loader.js";


export function Model() {

    const model = useGLTF('./dingus/scene.gltf');
    // console.log(model);
    model.scene.scale.set(0.2,0.2,0.2);


    // rotation doesnt work lol:

    // useFrame(() => { 
    //     model.scene.rotation.y += 0.01
    //   })


    // console.log(model);

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor='white' /> 
            <pointLight intensity={2} />
             <ambientLight intensity={5} />

            <primitive
            object={model.scene}
            position = {[0.25,-1.8,0]} // move center of cat
            />

        </mesh>
    )
}

export function ModelCanvas() {

  

    return (
       
            <Canvas
                id = "canvas"
                frameloop='demand'
                shadows
                // dpr={[1, 2]}
                camera={{ position: [15, 0, 5], fov: 25 }}
                gl={{ preserveDrawingBuffer: true }}
            >

                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls
                        enableZoom={true}
                        maxPolarAngle={Math.PI/2 }
                        minPolarAngle={Math.PI/2}
                        enableRotate={true}
                        minDistance={15}
                        maxDistance={50}
                    />

                    <Model/>

                </Suspense>

                <Preload all />
            </Canvas>

    )
}