import * as React from "react";
import Player from "./playerComponent";

const Game = ({ numOfPlayers, setEndOfGame, setWinner }) => {
  const [playerOneChoice, setPlayerOneChoice] = React.useState(null);
  const [playerTwoChoice, setPlayerTwoChoice] = React.useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const player1Choice = e.target.elements.player1.value;
    const player2Choice = e.target.elements.player2.value;
    let player = "";
    let choice = "";
    let tie = false;

    if (player1Choice === player2Choice) {
      tie = true;
    }
    if (player1Choice === "rock" && player2Choice === "paper") {
      player = "Player 2";
      choice = "paper";
    }
    if (player1Choice === "rock" && player2Choice === "scissors") {
      player = "Player 1";
      choice = "rock";
    }

    if (player1Choice === "paper" && player2Choice === "scissors") {
      player = "Player 2";
      choice = "scissors";
    }
    if (player1Choice === "paper" && player2Choice === "rock") {
      player = "Player 1";
      choice = "paper";
    }

    if (player1Choice === "scissors" && player2Choice === "rock") {
      player = "Player 2";
      choice = "rock";
    }
    if (player1Choice === "scissors" && player2Choice === "paper") {
      player = "Player 1";
      choice = "scissors";
    }
    setWinner({
      tie,
      player,
      choice,
    });
    setEndOfGame(true);
  };

  React.useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 3);
    const items = ["rock", "paper", "scissors"];

    if (numOfPlayers === 1) {
      setPlayerTwoChoice(items[randomNumber]);
    }
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Player
          numOfPlayers={numOfPlayers}
          playerNumber={1}
          playerOneChoice={playerOneChoice}
          setPlayerOneChoice={setPlayerOneChoice}
        />
        <Player
          numOfPlayers={numOfPlayers}
          playerNumber={2}
          otherPlayerHasMadeTheirMovie={Boolean(playerOneChoice)}
          isPlayingAgainstComputer={numOfPlayers === 1}
          playerTwoChoice={playerTwoChoice}
          setPlayerTwoChoice={setPlayerTwoChoice}
        />
        {playerOneChoice && playerTwoChoice ? (
          <button type="submit">Submit</button>
        ) : null}
      </form>
    </div>
  );
};

export default Game;
