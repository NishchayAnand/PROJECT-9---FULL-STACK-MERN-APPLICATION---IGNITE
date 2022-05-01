import React from "react";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
// React-Router
import { useNavigate } from "react-router-dom";
// utility functions
import { smallImage } from "../util";

const GameDetail = ({ gameId }) => {
  const navigate = useNavigate();

  const { game, screenshots, isLoading } = useSelector(
    (state) => state.gameDetails
  );

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/igniteMERNStackDemo/");
    }
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={gameId}>
            {/*Section 1 - displaying rating and platforms */}
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${gameId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>

            {/*Section 2 - displaying game's main image */}
            <Media>
              <motion.img
                layoutId={`image ${gameId}`}
                src={smallImage(game.background_image, 1280)}
                alt="main_image"
              />
            </Media>

            {/*Section 3 - displaying game's description */}
            <Description>
              <p>{game.description_raw}</p>
            </Description>

            {/*Section 4 - displaying a list of screenshots from gameplay */}
            <div className="gallery">
              {screenshots.results.map((ss) => (
                <img
                  src={smallImage(ss.image, 1280)}
                  alt={ss.image}
                  key={ss.id}
                ></img>
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  background: white;
  border-radius: 1rem;
  padding: 2rem 5rem;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
  h3 {
    padding: 1rem;
  }
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0;
`;

export default GameDetail;
