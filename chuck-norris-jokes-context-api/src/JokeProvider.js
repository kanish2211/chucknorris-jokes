import JokeContext from "./JokeContext";
import { useState, useEffect } from "react";
import axios from "axios";

const JokeProvider = (props) => {
  const [jokes, setJokes] = useState("It is a Joke Here");
  const [categoriesList, setCategoriesList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const getCategories = async () => {
    try {
      const categories = await axios.get(
        "https://api.chucknorris.io/jokes/categories"
      );

      if (categories.status === 200) {
        setCategoriesList(categories.data);
      } else {
        console.error("getcategories error", categories.data.error); //
      }
    } catch (error) {
      console.error("getCategories error", error);
    } finally {
    }
  };

  useEffect(() => {
    getCategories();
  });

  return (
    <JokeContext.Provider
      value={{
        categoriesListData: categoriesList,
        jokesData: jokes,
        selectedCategoryData: selectedCategory,

        categoriesButtonOnClick: (value) => {
          setSelectedCategory(value);
        },

        getJokes: async () => {
          const response = await axios.get(
            `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`
          );

          console.log(response.data.value);

          setJokes(response.data.value);
        },
        getCategories: getCategories,
      }}
    >
      {props.children}
    </JokeContext.Provider>
  );
};

export default JokeProvider;
