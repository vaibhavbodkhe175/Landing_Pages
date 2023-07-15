import React from "react";
import "../assets/skitch.css";
// import "../assets/images/left.png/"
class Home extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <img className="b1" src="../images/left.png" alt="left button" />
          <a className="about" href="#about">
            About Us
          </a>
          <a className="features" href="#features">
            Features
          </a>
          <a className="contact" href="#contact">
            Contact
          </a>
          <a className="Login" href="#login">
            Login
          </a>
          <a className="start" href="#get-started">
            Get Started
          </a>
        </nav>
        <header>
          <p className="subname">Made life easy by</p>
          <h1 className="Name">NAMASTE POS</h1>
        </header>
        <div1 style={{ textAlign: "right" }}>
          <img src="/images/cashier.png" width="400px" alt="My Image" />
        </div1>
        <pre>
          {" "}
          <section1 id="about">
            {"\n"}
            {"  "}
            <br />
            <br />
            <br />
            <br />
            {"\n"}
            <h3>About Us</h3>
            {"\n"}
            {"      "}Lorem ipsum dolor sit amet consectetur.{"\n"}
            {"            "}Scelerisque posuere mi cum consectetur justo {"\n"}
            {"    "}Curabitur adipiscing ipsum semper vel{"\n"}
            {"         "}bibendum platea integer. Consectetur eget {"\n"}
            {"          "}consectetur enim blandit tincidunt dignissi {"\n"}
            duis.
          </section1>
        </pre>
        <br />
        <section id="features">
          <h4> Explore Features </h4>
          <p className="foo" style={{ textAlign: "left" }}>
            Lorem ipsum dolor sit amet consectetur. Scelerisque posuere mi cum
            consectetur justo Curabitur adipiscing ipsum semper.
          </p>
          <br />
          <ul className="li">
            <input className="a1" type="radio" />{" "}
            <li style={{ textAlign: "left" }}> On table ordering system</li>{" "}
            <input className="a2" type="radio" />
            <li style={{ textAlign: "right" }}> Detailed report</li>
            <br />
            <input className="a3" type="radio" />
            <li style={{ textAlign: "left" }}> Manage inventory</li>{" "}
            <input className="a2" type="radio" />
            <li style={{ textAlign: "right" }}> Section arrangement</li>
            <br />
            <input className="a5" type="radio" />{" "}
            <li style={{ textAlign: "left" }}>
              {" "}
              Pickup/parcel ordering system
            </li>{" "}
            <input className="a2" type="radio" />
            <li style={{ textAlign: "right" }}> Customer details</li>
            <br />
            <p style={{ textAlign: "left" }}> All in one screen!</p>
          </ul>
        </section>
        <section id="built-for">
          <h5>Built for?</h5>
          <p className="bud">
            Lorem ipsum dolor sit amet consectetur. Scelerisque posuere mi cum
            consectetur
          </p>
          <foo>
            <img
              style={{ textAlign: "center" }}
              src="/images/build.png"
              alt="build for"
              width="1000px"
            />
          </foo>
        </section>
        <br />
        <section id="company">
          <coo>
            <img src="/images/logo1.png" alt="skitch" width="30px" />
          </coo>
          <h6>skitch.pvt ltd</h6>
          <baz>
            <ul>
              <a className="p1" href="#Company">
                company
              </a>
              <a className="p4" shref="#contact">
                Contact Us
              </a>
              <a className="p2" href="#About us">
                About Us
              </a>
              <a className="p3" href="#blog">
                Blog
              </a>
            </ul>
            <ul>
              <a className="p5" href="#For You">
                For You
              </a>
              <li>
                <a className="p6" href="#privacy">
                  Privacy
                </a>
              </li>
              <li>
                <a className="p8" href="#terms">
                  Terms
                </a>
              </li>
              <li>
                <a className="p9" href="#Refund">
                  Refund
                </a>
              </li>
            </ul>
            <ul>
              <a className="p10" href="#contact">
                Contact
              </a>
              <p className="p11"> Rohini Delhi-110085 </p>
              <p className="p12">+91702517208</p>
              <p className="p13">cconnect@skitch.in</p>
            </ul>
          </baz>
        </section>
        <p className="tc">
          By continuing past this page, you are agree to our terms ofservices,
          cookie policy, Privacy Policy and containt Policies. All trademarks
          are properties of their respective owners.
        </p>
        <footer>
          <p>© SKITCH. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default Home;
