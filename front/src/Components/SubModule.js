import React from "react";
const SubModule = (props) => {
  if (props.left) {
    return (
      <div>
        <h3>{props.title}</h3>
        <div className="row">
          <div className="col md-6 col sm-10">
            <p>{props.p}</p>
          </div>
          <div className="col md-4">
            <img src={props.img} style={{ zoom: "30%" }}></img>
          </div>
        </div>
        <br></br>
      </div>
    );
  } else {
    return (
      <div>
        <h3>{props.title}</h3>
        <div className="row">
          <div className="col md-4">
            <img src={props.img} style={{ zoom: "30%" }}></img>
          </div>
          <div className="col md-6 col sm-10">
            <p>{props.p}</p>
          </div>
        </div>

        <br></br>
      </div>
    );
  }
};

export default SubModule;
