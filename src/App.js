import React, { useContext } from "react";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Intro from "./Components/intro/Intro";
import ProductList from "./Components/productList/ProductList";
import Resume from "./Components/Resume/Resume";
import Toggle from "./Components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <Resume />
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
