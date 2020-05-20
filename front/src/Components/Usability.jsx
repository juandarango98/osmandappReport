import React from "react";
import "./EC.css";
import SubModule from "./SubModule";
import inicioapp from "../images/inicioapp.png";
import addpodcast from "../images/addpodcast.png";
const Usability = (props) => {
  return (
    <div id="write" className="is-node">
      <div>
        <h2>Usability</h2>
        <SubModule
          left={true}
          title="Using the app for the first time"
          p="The page in where the app is first opened is not really atractive,
              besides that, I don't know what to do. There is a side bar with
              various options in which the 'add podcast' seems to be selected
              therefore I think that is the first place the developers want me
              to go."
          img={inicioapp}
        ></SubModule>
        <SubModule
          title="Adding a podcast"
          p=""
          img={inicioapp}
          left={false}
        ></SubModule>
        <p>
          I follow what I believe is the inteneded flow of the app and get to
          this window. Here I see a library of different podcasts I can choose.
          This window's purpose is clear, I found some interesting features that
          allow me to search for an specific podcast and there is also a section
          to discover podcasts which is pretty nice.
        </p>
      </div>
      <h3>Non-informative message</h3>
    </div>
  );
};

export default Usability;
