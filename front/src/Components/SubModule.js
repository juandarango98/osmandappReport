import React from "react";
const SubModule = (props) => {
  if (props.left) {
    return (
      <div style={{ verticalAlign: "middle !Important" }}>
        <h3
          style={{
            fontSize: "26pt",
            fontStyle: "Bold",
            margin: "10px",
          }}
        >
          {props.title}
        </h3>
        <br></br>
        <div className="row">
          <div className="col md-6 col sm-10">
            <p
              style={{
                verticalAlign: "middle !Important",
                fontSize: "18pt",
                display: "inline-block !Important ",
              }}
            >
              {props.p}
            </p>
          </div>
          <div className="col md-4">
            <img src={props.img} style={{ zoom: "30%" }}></img>
          </div>
        </div>
        <br></br>

        <br></br>
      </div>
    );
  } else {
    return (
      <div>
        <h3
          style={{
            fontSize: "26pt",
            fontStyle: "Bold",
            margin: "10px",
          }}
        >
          {props.title}
        </h3>
        <br></br>
        <div className="row">
          <div className="col md-4">
            <img src={props.img} style={{ zoom: "30%" }}></img>
          </div>
          <div className="col md-6 col sm-10">
            <p
              style={{
                verticalAlign: "middle !Important",
                fontSize: "18pt",
                display: "inline-block !Important ",
              }}
            >
              {props.p}
            </p>
          </div>
        </div>

        <br></br>
        <br></br>
      </div>
    );
  }
};

export default SubModule;
