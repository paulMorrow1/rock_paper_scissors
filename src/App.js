import * as React from "react";
import Game from "./Components/gameComponent";
import Home from "./Components/homeComponent";

function App() {
  const [numOfPlayers, setNumOfPlayers] = React.useState(null);
  const [winner, setWinner] = React.useState(null); // {tie: false, player: playerName, choice: "rock"}
  const [endOfGame, setEndOfGame] = React.useState(false);

  const resetGame = () => {
    setNumOfPlayers(null);
    setEndOfGame(false);
    setWinner(null);
  };
  return (
    <div>
      <h1>Rock... Paper... Scissors!</h1>
      {!numOfPlayers && !endOfGame ? (
        <Home setNumberOfPlayers={setNumOfPlayers} />
      ) : null}

      {numOfPlayers && !endOfGame ? (
        <Game
          numOfPlayers={numOfPlayers}
          setEndOfGame={setEndOfGame}
          setWinner={setWinner}
        />
      ) : null}

      {endOfGame ? (
        <div>
          {winner.tie ? (
            <p>Game was a tie, try again</p>
          ) : (
            <>
              <p>Winner: {winner.player}</p>
              <p>By: {winner.choice}</p>
            </>
          )}
        </div>
      ) : null}

      <button onClick={resetGame}>Reset Screen</button>
    </div>
  );
}

export default App;
