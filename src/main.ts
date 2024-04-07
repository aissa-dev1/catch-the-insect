import dom from "./ts/helpers/classes/Dom";
import Game from "./ts/helpers/classes/Game";
import GameUI from "./ts/helpers/classes/GameUI";
import Insect from "./ts/helpers/classes/Insect";
import InsectHandler from "./ts/helpers/classes/InsectHandler";
import Score from "./ts/helpers/classes/Score";
import Timer from "./ts/helpers/classes/Timer";
import InsectType from "./ts/helpers/types/InsectType";
import Button from "./ts/types/elements/Button";
import Div from "./ts/types/elements/Div";

const playGameBtn = dom.select<Button>("#play_game_btn");
const chooseInsectContainers = dom.selectAll<Div>(".choose-insect-container");
const playAgainBtn = dom.select<Button>("#play_again_btn");
const goHomebtn = dom.select<Button>("#go_home_btn");

const game = new Game();

const timer = new Timer();

const score = new Score();

const insectHandler = new InsectHandler({ game, timer, score });

window.addEventListener("load", () => {
  GameUI.updateGameLocation(game);
});

playGameBtn.addEventListener("click", () => {
  game.changeLocation("choose-insect");
});

chooseInsectContainers.forEach((chooseInsectContainer) => {
  chooseInsectContainer.addEventListener("click", () => {
    game.changeLocation("game");
    insectHandler.addInsect(
      new Insect({ type: chooseInsectContainer.dataset.insect as InsectType })
    );
    timer.start();
    GameUI.updateGameCursor();
  });
});

playAgainBtn.addEventListener("click", () => {
  game.changeLocation("choose-insect");
});

goHomebtn.addEventListener("click", () => {
  game.changeLocation("home");
});
