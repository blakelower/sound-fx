import React from "react";
import "../styles/fx.css";
import "../styles/navbar.scss";
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Log In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead text-center text-white">
        <div className="masthead-content">
          <div className="container">
            <h1 className="masthead-heading mb-0">One Page Wonder</h1>
            <h2 className="masthead-subheading mb-0">
              Will Rock Your Socks Off
            </h2>
            <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5">
              Learn More
            </a>
          </div>
        </div>
        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div>
        <div className="bg-circle-4 bg-circle"></div>
      </header>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-5">
              <img class="img-fluid rounded-circle" src="img/01.jpg" alt="" />
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="p-5">
                <h2 class="display-4">For those about to rock...</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="p-5">
              <img class="img-fluid rounded-circle" src="img/02.jpg" alt="" />
            </div>
            <div class="col-lg-6">
              <div class="p-5">
                <h2 class="display-4">We salute you</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-5">
              <img class="img-fluid rounded-circle" src="img/03.jpg" alt="" />
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="p-5">
                <h2 class="display-4">Let there be rock</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="py-5 bg-black">
        <div class="container">
          <p class="m-0 text-center text-white small">
            Copyright &copy; Your Website 2019
          </p>
        </div>
      </footer>
    </div>
  );
}
