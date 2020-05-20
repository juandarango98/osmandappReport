import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
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
                          <span className="color-b">ANtennaPod</span> App
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
                    AntennaPod is a podcast manager and player that gives you
                    instant access to millions of free and paid podcasts, from
                    independent podcasters to large publishing houses such as
                    the BBC, NPR and CNN. Add, import and export their feeds
                    hassle-free using the iTunes podcast database, OPML files or
                    simple RSS URLs. Download, stream or queue episodes and
                    enjoy them the way you like with adjustable playback speeds,
                    chapter support and a sleep timer. Save effort, battery
                    power and mobile data usage with powerful automation
                    controls for downloading episodes (specify times, intervals
                    and WiFi networks) and deleting episodes (based on your
                    favourites and delay settings). Made by podcast-enthusiasts,
                    AntennaPod is free in all senses of the word: open source,
                    no costs, no ads.
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

      <section className="section-services section-t8" id="descripcion">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-wrap d-flex justify-content-between">
                <div className="title-box">
                  <h2 className="title-a">Features</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div>
                <div>
                  <ul className="content-d">
                    <h3>Import, organize and play</h3>
                    <p>
                      Manage playback from anywhere: homescreen widget, system
                      notification and earplug and bluetooth controls
                    </p>
                    <p>
                      Add and import feeds via the iTunes and gPodder.net
                      directories, OPML files and RSS or Atom links
                    </p>
                    <p>
                      Enjoy listening your way with adjustable playback speed,
                      chapter support, remembered playback position and an
                      advanced sleep timer (shake to reset, lower volume)
                    </p>
                    <p>Access password-protected feeds and episodes</p>
                    <h3>Keep track, share & appreciate</h3>
                    <p>
                      Keep track of the best of the best by marking episodes as
                      favourites
                    </p>
                    <p>
                      Find that one episode through the playback history or by
                      searching titles and shownotes
                    </p>
                    <p>
                      Share episodes and feeds through advanced social media and
                      email options, the gPodder.net services and via OPML
                      export
                    </p>
                    <h3>Control the system</h3>
                    <p>
                      Take control over automated downloading: choose feeds,
                      exclude mobile networks, select specific WiFi networks,
                      require the phone to be charging and set times or
                      intervals
                    </p>
                    <p>
                      Manage storage by setting the amount of cached episodes,
                      smart deletion and selecting your preferred location
                    </p>
                    <p>
                      Adapt to your environment using the light and dark theme
                    </p>
                    <p>
                      Back-up your subscriptions with the gPodder.net
                      integration and OPML export
                    </p>
                  </ul>
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
