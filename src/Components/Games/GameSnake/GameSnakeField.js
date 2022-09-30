import { useEffect, useRef, useState } from 'react';
import { THEME_STYLES } from '../../../styles/THEME_STYLES';
import { ButtonStyled } from '../../Buttons/Button.styles';
import Fruit from './Fruit';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  DotAnswer,
  FieldBorders,
  GameOver,
  Result,
  WrapperArrows,
  WrapperCenter,
  WrapperLegend,
  WrapperTop,
} from './GameSnakeField.styles';
import Snake from './Snake';

const getInitialState = () => ({
  key: 'ArrowRight',
  snakeCoords: [
    [0, 0],
    [5, 0],
    [10, 0],
    [15, 0],
    [20, 0],
    [25, 0],
    [30, 0],
  ],
  fruitCoords: [20, 20],
  fruitFakeCoords: [40, 40],
  accerts: 0,
  finishGame: false,
});

const GameSnakeField = ({ gameOpt, handlerNextGame }) => {
  const states = useRef(getInitialState());
  const frame = useRef(0);
  const [refresh, setRefresh] = useState(0);
  const [start, setStart] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [randomDotCorrectAnswer] = useState(Math.floor(Math.random() * 2));
  const handlerRestartGame = () => {
    states.current = getInitialState();
    frame.current = 0;
    setRefresh(0);
    setStart(false);
  };

  const gameLoop = () => {
    const idAnimationFrame = window.requestAnimationFrame(gameLoop);

    coordinatesFunction(frame, states);

    const isOutside = isSnakeOutside(states);
    const hasEatenTail = isSnakeEatingItsTail(states);
    const hasEatenFakeFruit = hasTheSnakeEatedTheFruit(
      states,
      states.current.fruitFakeCoords
    );

    if (isOutside || hasEatenTail || hasEatenFakeFruit) {
      states.current.finishGame = true;
      states.current.snakeCoords.pop();
      setStart(1);
      cancelAnimationFrame(idAnimationFrame);
    } else {
      setRefresh((prev) => prev + 1);
    }

    const hasEatedFruit = hasTheSnakeEatedTheFruit(
      states,
      states.current.fruitCoords
    );

    if (hasEatedFruit) {
      states.current.accerts += 1;
      generateRandomFruits(states);
      increaseSnakeDots(states);
      handlerNextGame();
    }
  };

  const functionAddEventListener = (e) => {
    if (
      (e.key === 'ArrowLeft' && states.current.key !== 'ArrowRight') ||
      (e.key === 'ArrowRight' && states.current.key !== 'ArrowLeft') ||
      (e.key === 'ArrowUp' && states.current.key !== 'ArrowDown') ||
      (e.key === 'ArrowDown' && states.current.key !== 'ArrowUp')
    ) {
      states.current.key = e.key;
    }
  };

  useEffect(() => {
    if (start) {
      window.addEventListener('keydown', functionAddEventListener);
      const btnUp = document.getElementById('btnUp');
      const btnDown = document.getElementById('btnDown');
      const btnLeft = document.getElementById('btnLeft');
      const btnRight = document.getElementById('btnRight');

      btnUp.addEventListener('click', () => {
        if (
          states.current.key !== 'ArrowDown' ||
          states.current.key !== 'ArrowUp'
        )
          states.current.key = 'ArrowUp';
      });
      btnDown.addEventListener('click', () => {
        if (
          states.current.key !== 'ArrowUp' ||
          states.current.key !== 'ArrowDown'
        )
          states.current.key = 'ArrowDown';
      });
      btnLeft.addEventListener('click', () => {
        if (
          states.current.key !== 'ArrowLeft' ||
          states.current.key !== 'ArrowRight'
        )
          states.current.key = 'ArrowLeft';
      });
      btnRight.addEventListener('click', () => {
        if (
          states.current.key !== 'ArrowLeft' ||
          states.current.key !== 'ArrowRight'
        )
          states.current.key = 'ArrowRight';
      });
      window.requestAnimationFrame(gameLoop);
    }
    return () =>
      window.removeEventListener('keydown', functionAddEventListener);
  }, [start]);

  return (
    <>
      <WrapperTop>
        <div>
          {window.screen.width < THEME_STYLES.MEDIA_QUERYS.DESKTOP && (
            <ButtonStyled onClick={() => setIsMobile((prev) => !prev)}>
              Display mobile arrows
            </ButtonStyled>
          )}
        </div>
        {states.current.finishGame && (
          <ButtonStyled onClick={handlerRestartGame}>Next Game</ButtonStyled>
        )}
        <Result>{states.current.accerts}</Result>
        <WrapperLegend>
          <p>{gameOpt.question}?</p>
          <div>
            <DotAnswer
              color={
                randomDotCorrectAnswer
                  ? gameOpt.correctColorAnswer
                  : gameOpt.wrongColorAnswer
              }
            />
            <span>
              {randomDotCorrectAnswer ? gameOpt.answer : gameOpt.answerFake}
            </span>
          </div>
          <div>
            <DotAnswer
              color={
                randomDotCorrectAnswer
                  ? gameOpt.wrongColorAnswer
                  : gameOpt.correctColorAnswer
              }
            />
            <span>
              {randomDotCorrectAnswer ? gameOpt.answerFake : gameOpt.answer}
            </span>
          </div>
        </WrapperLegend>
        <div>
          {window.screen.width < THEME_STYLES.MEDIA_QUERYS.DESKTOP &&
            !start && (
              <ButtonStyled onClick={() => setStart(true)}>Start</ButtonStyled>
            )}
        </div>
      </WrapperTop>
      <WrapperCenter>
        {window.screen.width >= THEME_STYLES.MEDIA_QUERYS.DESKTOP && (
          <ButtonStyled onClick={() => setStart((prev) => !prev)}>
            Start
          </ButtonStyled>
        )}

        <div>
          <FieldBorders>
            {states.current.finishGame && <GameOver>GAME OVER</GameOver>}
            <Snake snakeCoords={states.current.snakeCoords} />
            <Fruit
              fruitCoords={states.current.fruitCoords}
              color={gameOpt.correctColorAnswer}
            />
            <Fruit
              fruitCoords={states.current.fruitFakeCoords}
              color={gameOpt.wrongColorAnswer}
            />
          </FieldBorders>
          <WrapperArrows isMobile={isMobile}>
            <ArrowUp id="btnUp" isMobile={isMobile} />
            <ArrowLeft id="btnLeft" isMobile={isMobile} />
            <ArrowRight id="btnRight" isMobile={isMobile} />
            <ArrowDown id="btnDown" isMobile={isMobile} />
          </WrapperArrows>
        </div>
        {window.screen.width >= THEME_STYLES.MEDIA_QUERYS.DESKTOP && (
          <ButtonStyled onClick={() => setIsMobile((prev) => !prev)}>
            Display mobile arrows
          </ButtonStyled>
        )}
      </WrapperCenter>
    </>
  );
};

const coordinatesFunction = (frame, states) => {
  if (frame.current === 7) {
    frame.current = 0;
    let newCoords = [...states.current.snakeCoords];

    if (!states.current.finishGame)
      switch (states.current.key) {
        case 'ArrowUp': {
          newCoords.push([
            newCoords[newCoords.length - 1][0],
            newCoords[newCoords.length - 1][1] - 5,
          ]);
          newCoords.shift();

          break;
        }
        case 'ArrowDown': {
          newCoords.push([
            newCoords[newCoords.length - 1][0],
            newCoords[newCoords.length - 1][1] + 5,
          ]);
          newCoords.shift();

          break;
        }
        case 'ArrowLeft': {
          newCoords.push([
            newCoords[newCoords.length - 1][0] - 5,
            newCoords[newCoords.length - 1][1],
          ]);
          newCoords.shift();

          break;
        }
        case 'ArrowRight': {
          newCoords.push([
            newCoords[newCoords.length - 1][0] + 5,
            newCoords[newCoords.length - 1][1],
          ]);
          newCoords.shift();

          break;
        }
        default: {
          break;
        }
      }
    states.current.lastKey = undefined;

    states.current.snakeCoords = newCoords;
  } else {
    frame.current += 1;
  }
};

const isSnakeOutside = (states) => {
  const isOutside =
    states.current.snakeCoords[states.current.snakeCoords.length - 1][1] < 0 ||
    states.current.snakeCoords[states.current.snakeCoords.length - 1][0] < 0 ||
    states.current.snakeCoords[states.current.snakeCoords.length - 1][1] > 96 ||
    states.current.snakeCoords[states.current.snakeCoords.length - 1][0] > 96;

  if (isOutside) return true;
  return false;
};

const isSnakeEatingItsTail = (states) => {
  const head =
    states.current.snakeCoords[states.current.snakeCoords.length - 1];

  const body = [...states.current.snakeCoords];
  body.pop();

  const isEating = body.some((dot) => {
    return dot[0] === head[0] && dot[1] === head[1];
  });

  if (isEating) return true;
  return false;
};

const hasTheSnakeEatedTheFruit = (states, coords) => {
  const head =
    states.current.snakeCoords[states.current.snakeCoords.length - 1];

  const hasEated = head[0] === coords[0] && head[1] === coords[1];

  return hasEated;
};

const generateRandomFruits = (states) => {
  let conditionFr1 = undefined;
  let conditionFr2 = undefined;
  let condition3 = undefined;
  let posX1;
  let posY1;
  let posX2;
  let posY2;
  do {
    posX1 = Math.floor(Math.random() * 20) * 5;
    posY1 = Math.floor(Math.random() * 20) * 5;
    posX2 = Math.floor(Math.random() * 20) * 5;
    posY2 = Math.floor(Math.random() * 20) * 5;

    conditionFr1 = states.current.snakeCoords.some(
      (coord) => coord[0] === posX1 && coord[1] === posY1
    );

    conditionFr2 = states.current.snakeCoords.some(
      (coord) => coord[0] === posX2 && coord[1] === posY2
    );

    condition3 = posX1 === posX2 && posY1 === posY2;
  } while (conditionFr1 || conditionFr2 || condition3);

  states.current.fruitCoords = [posX1, posY1];
  states.current.fruitFakeCoords = [posX2, posY2];
};

const increaseSnakeDots = (states) => {
  let snakeCopy = [...states.current.snakeCoords];
  switch (states.current.key) {
    case 'ArrowUp': {
      snakeCopy.unshift([
        [states.current.snakeCoords][0] + 5,
        [states.current.snakeCoords][1],
      ]);
      break;
    }
    case 'ArrowDown': {
      snakeCopy.unshift([
        [states.current.snakeCoords][0] - 5,
        [states.current.snakeCoords][1],
      ]);
      break;
    }
    case 'ArrowLeft': {
      snakeCopy.unshift([
        [states.current.snakeCoords][0],
        [states.current.snakeCoords][1] + 5,
      ]);
      break;
    }
    case 'ArrowRight': {
      snakeCopy.unshift([
        [states.current.snakeCoords][0],
        [states.current.snakeCoords][1] - 5,
      ]);
      break;
    }
    default: {
      break;
    }
  }
  states.current.snakeCoords = snakeCopy;
};

export default GameSnakeField;
