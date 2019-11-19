import React from 'react';
import { Pannellum } from "pannellum-react";
import myImage from "./studio2.jpg";

const Panorama = () => (
    <div>
        <Pannellum
            width="100%"
            height="100vh"
            image={myImage}
            pitch={0}
            yaw={0}
            hfov={115}
            vaov={85}
            haov={360}
            maxPitch={40}
            minPitch={-40}
            maxYaw={180}
            minYaw={-160}
            keyboardZoom={false}
            mouseZoom={false}
            showZoomCtrl={false}
            autoLoad
            onLoad={() => {
                console.log("panorama loaded");
            }}
        >
        </Pannellum>
    </div>
);

export default Panorama;