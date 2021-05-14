import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/insta-clone.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://limitless-journey-57515.herokuapp.com/signin">Instagram Clone</a>
                      </h3>
                      <span>MERN Stack</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/amazon-clone.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://challenge-3013f.web.app/">Amazon UI Clone</a>
                      </h3>
                      <span>React.js & Firebase</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInTop"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/xo.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://karunkarthik-git.github.io/XO-Game/">XO Game</a>
                      </h3>
                      <span>Javascript</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
