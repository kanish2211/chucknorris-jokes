import JokeContext from "./JokeContext";
import "./App.css";

const CategoriesButton = () => {
  return (
    <JokeContext.Consumer>
      {(context) => {
        const listdata = context.categoriesListData;
        console.log(listdata);
        return (
          <div>
            {listdata.map((value) => (
              <button
                style={{
                  backgroundColor:
                    value === context.selectedCategoryData
                      ? "#2b4417 "
                      : "ivory",
                  color:
                    value === context.selectedCategoryData ? "ivory " : "black",
                }}
                categoriesList={value}
                onClick={() => {
                  context.categoriesButtonOnClick(value);
                }}
              >
                {value}
              </button>
            ))}
          </div>
        );
      }}
    </JokeContext.Consumer>
  );
};
export default CategoriesButton;
