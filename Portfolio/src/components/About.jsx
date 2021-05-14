import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Us</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I love everything that is related to Web programming
                        (React - Firebase, Mern Stack) and Python.
                        <br /> I'm a motivated developer and designer with
                        experience creating custom websites with ReactJs,
                        JavaScript, HTML5 & CSS3, and MongoDB.
                        <br />
                        I'm also good at developing android applications using
                        Kotlin.
                      </p>
                      <p>
                        I attended many challenges, Hackathons to brush up my
                        skills. When I'm not coding, texting or pushing pixels,
                        you'll find me gaming or working out. I love nature{" "}
                        <span role="img">{"💚"}</span> .
                      </p>
                    </div>
                    <ul class="tag_list">
                      <li>Html & Css</li>
                      <li>JavaScript</li>
                      <li>Bootstrap & jQuery</li>
                      <li>React</li>
                      <li>Firebase</li>
                      <li>MongoDB</li>
                      <li>Kotlin</li>
                      <li>Android Studio</li>
                      <li>Flutter</li>
                      <li>Python</li>
                      <li>Photoshop</li>
                      <li>Figma</li>
                      <li>Adobe XD</li>
                      <li>Java</li>
                      <li>C++</li>
                      <li>C</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                  <span className="icon">
                    <i className="icon-globe" />
                  </span>
                  <div className="desc">
                    <h3>Web Development </h3>
                    <p>
                      I like to code personalized websites, and enjoy bringing
                      ideas to life in the browser.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-layers2" />
                  </span>
                  <div className="desc">
                    <h3>Freelancing</h3>
                    <p>
                      I've been working as a freelancer since last 2 years. It
                      was fun working with a mixed bag of projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>
                      I value user's experience and comfort. I can provide clean
                      design patterns with thoughtful interactions.
                    </p>
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

export default About;