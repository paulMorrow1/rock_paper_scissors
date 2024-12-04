import * as React from "react";

const Home = ({ setNumberOfPlayers }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setNumberOfPlayers(Number(e.target.elements.numOfPlayers.value));
  };

  return (
    <div>
      <h3>Select number of players</h3>
      <form onSubmit={handleSubmit}>
        <select name="numOfPlayers" defaultValue={1}>
          <option value={1}>1</option>
          <option option={2}>2</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
