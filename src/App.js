import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoadingIcon } from "./LoadingIcon";
import { SiteHeaderTitle } from "./SiteHeaderTitle";
import { Hero } from "./Hero";
//for local testing
import data from "./data.json";

const About = React.lazy(() => import("./About"));
const Portfolio = React.lazy(() => import("./Portfolio"));
const Redirect = React.lazy(() => import("./Redirect"));

const placeHolder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";
//for local testing
export { data };
//export var data;

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      loading: true,
      imagePlaceHolder:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    /*fetch('http://colettefleury.com/data.json')
    .then((response) => {
      return response.json();
    }).then((siteData) => {
      data = siteData
      this.setState({loading: false}, () => this.loadImages());
    })*/
    //for local testing
    this.setState({ loading: false }, () => this.loadImages());
    //console.log(data);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    let scrollTop = window.pageYOffset;
    if (scrollTop > 0) {
      document.querySelector("nav").classList.add("scrolling-nav");
    } else {
      document.querySelector("nav").classList.remove("scrolling-nav");
    }
  }

  loadImages() {
    const objects = document.getElementsByClassName("asyncImage");
    Array.from(objects).map((item) => {
      // Start loading image
      const img = new Image();
      img.src = item.dataset.src;
      // Once image is loaded replace the src of the HTML element
      img.onload = () => {
        item.classList.remove("asyncImage");
        item.nodeName === "IMG"
          ? (item.src = item.dataset.src)
          : (item.style.backgroundImage = 'url("' + item.dataset.src + '")');
        item.removeAttribute("data-src");
      };
    });
  }

  render() {
    return (
      <Router>
        <div style={{ minHeight: "100vh" }}>
          <nav>
            <div className="grid-container">
              <ul>
                <li>
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.376 13.896l-2.376.479.479-2.375 1.897 1.896zm-1.425-2.368l1.896 1.896 5.153-5.153-1.896-1.896-5.153 5.153zm3.31 3.311l-.094.08v2.241c-3.927.269-6.853 1.148-8.25 1.649v-11.74c2.705-1.602 7.582-2.172 10.083-2.303v-1.766c-4.202.128-8.307.804-11 2.481-2.693-1.677-6.798-2.353-11-2.481v15.904c3.608.11 7.146.624 9.778 1.829.775.355 1.666.356 2.444 0 2.633-1.205 6.169-1.718 9.777-1.829v-5.804l-1.738 1.739zm-10.178 3.969c-1.397-.5-4.322-1.38-8.25-1.649v-12.228c4.727.356 6.9 1.341 8.25 2.14v11.737zm4.959-4.263l.177-1.066-2.219.549v1.019l2.042-.502z" />
                    </svg>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.23 15.5c-6.801 0-10.367-1.221-12.23-2.597v9.097h24v-8.949c-3.218 2.221-9.422 2.449-11.77 2.449zm1.77 2.532c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-14-8.541v-2.491h24v2.605c0 5.289-24 5.133-24-.114zm9-7.491c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z" />
                    </svg>
                    Portfolio
                  </Link>
                </li>
              </ul>
              <Link
                className="center"
                style={{ textDecoration: "none", margin: "none" }}
                to="/"
              >
                <SiteHeaderTitle />
              </Link>
              <ul className="right">
                <li>
                  <a href="https://github.com/clfleury" target="new">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/colette-fleury-69776790/"
                    target="new"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Suspense
            fallback={
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#23294d",
                }}
              >
                <LoadingIcon />
              </div>
            }
          >
            <Switch>
              <Route path="/about">
                <About loading={this.state.loading} />
              </Route>
              <Route path="/portfolio">
                <Portfolio
                  data={this.state.data}
                  loadImages={this.loadImages}
                  imagePlaceHolder={this.state.imagePlaceHolder}
                  loading={this.state.loading}
                />
              </Route>
              <Route path="/usabilityfinalproject">
                <Redirect loc="http://colettefleury.com/usabilityfinalproject/index.html" />
              </Route>
              <Route path="/mendel">
                <Redirect loc="http://colettefleury.com/mendel" />
              </Route>
              <Route path="/">
                <Home
                  loadImages={this.loadImages}
                  loading={this.state.loading}
                />
              </Route>
            </Switch>
          </Suspense>
        </div>
        <footer
          className="grid-container"
          style={{ height: "60px", display: "flex", alignItems: "center" }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: "15px",
              margin: "0px",
              padding: "0px",
            }}
          >
            &copy; {new Date().getFullYear()} Colette Fleury
          </p>
        </footer>
      </Router>
    );
  }
}

class Home extends React.Component {
  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    return (
      <div className="home fade-in">
        {this.props.loading ? (
          <LoadingIcon />
        ) : (
          <div>
           <Hero />
          </div>
        )}
      </div>
    );
  }
}

export default function App() {
  return <AppContainer />;
}
