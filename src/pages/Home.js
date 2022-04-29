import React, { useEffect } from "react";
import GameDetail from "../components/GameDetail";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../store/actions/gamesAction";
//components
import Game from "../components/Game";
// Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animations";

const Home = () => {
  const location = useLocation();
  const path = location.pathname;
  const gameId = path.split("/")[2];

  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {/* act as a pop up screen */}
          {gameId && <GameDetail gameId={gameId} />}
        </AnimatePresence>

        {/* searched games list */}
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  key={game.id}
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}

        {/* upcoming games list */}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </Games>

        {/* Popular games list*/}
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </Games>

        {/* New games list*/}
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 3rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
