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
                <p className="tech">Node.JS | Process Automation | AWS Cloud | </p>
                <p>
                  • Designed and developed full backend for an automated concierge subscription service using node.JS and mongoDB
                </p>
                <p>
                  • Created custom API to listen for user-submitted request forms, then perform queries to match user’s requests against reservation availability.
                </p>
                <p>
                  • Implemented AWS Simple Email Service to generate marketing email targeting users when a match is discovered
                </p>
                <p>
                  • Deployed to AWS EC2 Cloud instance.
                </p>
                <p>
                  • Recreated marketing email from FIGMA mockup using only plaintext HTML with inline styling in nodeJS.

                </p>
              </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="text-box">
              <h2>MAP Fund</h2>
              <div>
                <a href="http://garfieldst.web.app">Frontend Engineer </a>
                <a href="https://github.com/brahmk/pball-app"></a>
                <p className="tech">
                  CSS | HTML | Wordpress
                </p>
                <p>
                  • Developed Grantee Announcement page and template for future use by converting Figma files to reusable UI components in Wordpress with custom CSS.

                </p>
                <p>
                  • Updated UI components to ensure proper accessibility and adhere to atomic design principles.
                </p>
              </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="text-box">
              <h2>MidiModo NFT</h2>
              <div>
                <a href="http://garfieldst.web.app">Frontend Engineer </a>
                <a href="https://github.com/brahmk/pball-app"></a>
                <p className="tech">
                  React | HTML | CSS
                </p>
                <p>
                  • Created custom frontend components using ReactJS, HTML and CSS to match Figma mock-up provided by design team.

                </p>
                <p>
                  • Built and delivered the application on-time as part of a team utilizing Kanban board during development.
                </p>
              </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="text-box">
              <h2>Garfield St. Paddleball</h2>
              <div>
                <a href="http://garfieldst.web.app">Frontend Engineer </a>
                <a href="https://github.com/brahmk/pball-app"></a>
                <p className="tech">
                  React | | Node.JS | Express | MongoDB | HTML | CSS
                </p>
                <p>
                  • Designed and built fullstack web-app using ReactJS, nodeJS, FirestoreDB, and custom UI/UX components.
</p>
                <p>
                  • Utilized express API to connect to a mongoDB database and display corresponding information to a React frontend.
                </p>
                <p>
                  • Developed user login system with JWT authentication and password encryption.
                </p>
                <p>
                  • All graphics and UI/UX components designed and created using Adobe Creative Suite.
                </p>
                <p>
                  • Deployed on Google Cloud Services and Firebase Hosting.
                </p>
              </div>
            </div></SwiperSlide>
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
