import React from "react";

import "./App.css";
import CategoriesButton from "./CategoriesButton";
import NewJoke from "./NewJoke";
import Header from "./Header";
import JokeProvider from "./JokeProvider";

const App = () => {
  return (
    <JokeProvider>
      <Header />
      <CategoriesButton />
      <NewJoke />
    </JokeProvider>
  );
};
export default App;
