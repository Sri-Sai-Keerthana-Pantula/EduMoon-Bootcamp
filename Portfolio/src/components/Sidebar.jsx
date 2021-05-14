import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h3 id="colorlib-logo"><a href="index.html">Karun Karthik</a></h3>
              <h5>EduMoon<br/>Lead Developer &  Instructor </h5>
              <span className="email"><i className="icon-mail"></i> karunkarthik.t@gmail.com</span>
              <br/>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
              <li><a href="https://github.com/karunkarthik-git" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://instagram.com/_.karun._" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/karun-karthik-5a0794187" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-code" aria-hidden="true" /> and <i className="icon-heart" aria-hidden="true"></i><br></br>
              </small></p>
            </div>
          </aside>
        </div>
    )
  }
}
