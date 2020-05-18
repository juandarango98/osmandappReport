import React from "react";
import Nav from "../Nav.js";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Nav></Nav>

      <div className="intro intro-carousel">
        <div id="carousel" className="owl-carousel owl-theme">
          <div
            className="carousel-item-a intro-item bg-image"
            style={{
              backgroundImage: `url(https://osmand.net/images/header_image.jpg)`,
            }}
          >
            <div className="overlay overlay-a"></div>
            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="intro-body">
                        <p className="intro-title-top">
                          Juan Diego Arango & Gregorio Ospina
                        </p>
                        <h1 className="intro-title mb-4">
                          <span className="color-b">Osmand</span> App
                        </h1>
                        <p className="intro-subtitle intro-price">
                          <a href="#descripcion">
                            <span className="price-a">What is Osmand?</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-services section-t8" id="descripcion">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-wrap d-flex justify-content-between">
                <div className="title-box">
                  <h2 className="title-a">Description</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card-box-c foo">
                <div className="card-body-c">
                  <p className="content-d">
                    OsmAnd is an offline navigation application with access to
                    the free, worldwide, and high-quality offline maps. Enjoy
                    voice and visual offline navigation, viewing points of
                    interest, creating and managing GPX tracks, using contour
                    lines visualization and altitude info (through plugin), a
                    choice between car navigation, cycle navigation or
                    directions in the pedestrian mode, OSM editing and much
                    more. Just download your free maps and get the following:
                  </p>
                </div>
                <div className="card-footer-c">
                  <a href="/signup" className="link-c link-icon">
                    Learn more
                    <span className="ion-ios-arrow-forward"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="copyright-footer">
              <p className="copyright color-text-a">
                &copy;
                <span className="color-a">
                  {" "}
                  Gregorio Ospina - Juan Diego Arango
                </span>{" "}
                .
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
