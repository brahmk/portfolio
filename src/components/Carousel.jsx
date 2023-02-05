import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Carousel.css";

// import required modules
import { EffectCards } from "swiper";
 
export default function Carousel () {
    
return (
    <>
    <div className="projects">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="text-box">
              <h2>Allterco Robotics</h2>
              <div>
                <a href="http://garfieldst.web.app">Fullstack Engineer </a>
                <a href="https://github.com/brahmk/pball-app"></a>
                <p className="tech">
                  React | Node.js | Express | MongoDB | CSS | microJS
                </p>
                <p>
                  • Conceptualized, designed, and developed an API to control IoT systems via “dumbphone” devices using voice commands.
                </p>
                <p>
                  • Developed a commercial-scale version of our consumer webapp to control, monitor, and analyze performance of IoT devices.

                </p>
                <p>
                  • Utilized open-source nodeJS API to modify behavior of real-world electronic smart home devices using custom javascript code.


                </p>
                <p>
                • Built consumer-facing dashboard in ReactJS to display data from + control a fleet of IoT switches, relays, plugs, bulbs, and sensors.

                </p>
              </div>
            </div>
          </SwiperSlide>
        <SwiperSlide><div className="text-box">
              <h2>RVSpotDrop</h2>
              <div>
                <a href="https://aor-chatbot.web.app/">Backend Engineer </a>
                <a href="https://github.com/brahmk/socket-chat"></a>
                <p className="tech">nodeJS | Process Automation | AWS Cloud </p>
                <p>
                  • Utilized rudimentary artifical intelligence to simulate
                  conversation by responding to user input
                </p>
                <p>
                  •Built custom UI in React to emulate old-school AOL experience
                  using React hooks to display messages and play sounds
                </p>
              </div>
            </div></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide><div className="text-box">
              <h2>Super Monster Ball 3D</h2>
              <div>
                <p className="tech">Unity | C#</p>

                <p>• 3D video game demo built in Unity engine</p>
                <p>
                  • Utilized C# scripts for player controls, scorekeeping, and
                  3D object behavior
                </p>
              </div>
            </div></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
