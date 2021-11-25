import React from "react";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import Gallery from "./components/Gallery";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setIsMounted(true), 2000);
  }, [setIsMounted]);

  return (
    <div className="App">
      {!isMounted ? (
        <Loader />
      ) : (
        <React.Fragment>
          <header className="App-header">
            <Header />
          </header>
          <section id="home">
            <Home />
          </section>
          <section id="gallery">
            <Gallery />
          </section>
          <footer>
            <Footer />
          </footer>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
