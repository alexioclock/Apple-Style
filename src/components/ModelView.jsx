import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import React, { Suspense } from "react";
import Lights from "./Lights";
import IphoneModel from "./IphoneModel";
import Loader from "./Loader";
import * as THREEE from 'three';

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationSize,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 
      'right-[-100%]' : ''}`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]}></PerspectiveCamera>
      <Lights />
      <OrbitControls makeDefault
      ref={controlRef}
      enableZoom={false}
      enablePan= {false}
      rotateSpeed={0.4}
      target={new THREEE.Vector3(0, 0, 0)}
      onEnd={() => setRotationSize(controlRef.current.getAzimutAngle())}
      />
      <group ref={groupRef} name={`${index === 1} ? 'small' : 'large`} position={[0, 0, 0]}>
      <Suspense fallback={<Loader />}>
        <IphoneModel scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} />
      </Suspense>
      </group>

    </View>
  );
};

export default ModelView;
