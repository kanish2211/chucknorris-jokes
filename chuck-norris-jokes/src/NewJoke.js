import JokeContext from "./JokeContext";
import "./App.css";

const NewJoke = () => {
  return (
    <JokeContext.Consumer>
      {(context) => {
        return (
          <div>
            <h3 className="joke">{context.jokesData}</h3>
            <button className="newJokeBtn" onClick={context.getJokes}>
              New Joke
            </button>
          </div>
        );
      }}
    </JokeContext.Consumer>
  );
};

export default NewJoke;
