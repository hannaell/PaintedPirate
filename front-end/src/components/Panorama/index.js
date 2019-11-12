import React from 'react';
import { Pannellum } from "pannellum-react";
import myImage from "./studio.jpg";

const Panorama = () => (
    <div>
        <Pannellum
            width="100%"
            height="100vh"
            image={myImage}
            pitch={10}
            yaw={-50}
            hfov={110}
            vaov={85}
            haov={310}
            maxPitch={40}
            minPitch={-40}
            maxYaw={150}
            minYaw={-140}
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