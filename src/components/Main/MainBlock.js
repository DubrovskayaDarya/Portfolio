import React from "react";
import style from "./MainBlock.module.scss";
import me from "../../common/images/myPhoto.jpg";
import { ParticleComponent } from "../subComponents/ParticleComponent";
import Slide from "react-reveal/Slide";
import ReactTypingEffect from "react-typing-effect";

export const MainBlock = () => {
  return (
    <div id={"main"} className={style.mainBlock}>
      <div className={style.greetingBlock}>
        <Slide left>
          <div className={style.greetingText}>
            <h2>DUBROVSKAYA</h2>
            <ReactTypingEffect
              text={["Front-End Developer"]}
              speed={100}
              typingDelay={500}
            />
          </div>
        </Slide>
        <Slide right>
          <div className={style.avatar}>
            <img src={me} alt={"Profile Photo"} />
          </div>
        </Slide>
      </div>
      <ParticleComponent />
    </div>
  );
};
