import * as React from "react";

const Player = ({
  numOfPlayers,
  playerNumber = 1,
  isPlayingAgainstComputer,
  otherPlayerHasMadeTheirMovie,
  playerOneChoice = null,
  setPlayerOneChoice = null,
  playerTwoChoice = null,
  setPlayerTwoChoice = null,
}) => {
  const handleOnChange = (e) => {
    if (setPlayerOneChoice) {
      setPlayerOneChoice(e.target.value);
    }
    if (setPlayerTwoChoice) {
      setPlayerTwoChoice(e.target.value);
    }
  };
  return (
    <div
      hidden={
        isPlayingAgainstComputer ||
        (playerNumber === 2 && !otherPlayerHasMadeTheirMovie) ||
        (playerNumber === 1 && playerOneChoice) ||
        (playerNumber === 2 && playerTwoChoice)
      }
    >
      <h3>Player {playerNumber}</h3>
      <div>
        <input
          type="radio"
          name={`player${playerNumber}`}
          value="rock"
          id="rock"
          onChange={handleOnChange}
          checked={playerOneChoice === "rock" || playerTwoChoice === "rock"}
        />
        <label htmlFor="rock">Rock</label>
      </div>
      <div>
        <input
          type="radio"
          name={`player${playerNumber}`}
          value="paper"
          id="paper"
          onChange={handleOnChange}
          checked={playerOneChoice === "paper" || playerTwoChoice === "paper"}
        />
        <label htmlFor="paper">Paper</label>
      </div>
      <div>
        <input
          type="radio"
          name={`player${playerNumber}`}
          value="scissors"
          id="scissors"
          onChange={handleOnChange}
          checked={
            playerOneChoice === "scissors" || playerTwoChoice === "scissors"
          }
        />
        <label htmlFor="scissors">Scissors</label>
      </div>
    </div>
  );
};

export default Player;
