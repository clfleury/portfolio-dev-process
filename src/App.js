import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoadingIcon } from "./LoadingIcon";
import ScrollToTop from "./scrollTop";
import { Layout } from "./layout";
import { Home } from "./home";

const About = React.lazy(() => import("./About"));
const Portfolio = React.lazy(() => import("./Portfolio"));
const Redirect = React.lazy(() => import("./Redirect"));

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      loading: true,
      imagePlaceHolder:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    fetch("data.json")
      .then((response) => {
        return response.json();
      })
      .then((siteData) => {
        this.setState({ loading: false, data: siteData }, () =>
          this.loadImages(),
        );
      })
      .catch((e) => {
        throw new Error(`HTTP error! status: ${e}`);
      });
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
        <Layout>
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
            <ScrollToTop>
              <Switch>
                <Route path="/about">
                  <About loading={this.state.loading} data={this.state.data} />
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
                    data={this.state.data}
                    loading={this.state.loading}
                  />
                </Route>
              </Switch>
            </ScrollToTop>
          </Suspense>
        </Layout>
      </Router>
    );
  }
}

export default function App() {
  return <AppContainer />;
}
