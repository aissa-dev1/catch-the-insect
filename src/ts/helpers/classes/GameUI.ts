import Div from "../../types/elements/Div";
import dom from "./Dom";
import Game from "./Game";
import Score from "./Score";
import Timer from "./Timer";

const startGameHeader = dom.select<Div>(".start-game-header");
const chooseInsectHeader = dom.select<Div>(".choose-insect-header");
const gameHeader = dom.select<Div>(".game-header");
const gameOverHeader = dom.select<Div>(".game-over-header");
const playTimeInfo = dom.select<Div>("#play_time_info");
const gameScoreInfo = dom.select<Div>("#game_score_info");
const gunContainer = dom.select<Div>(".gun-container");
const fireImg = dom.select<Div>(".fire-img");

class GameUI {
  public static updateGameLocation(game: Game): void {
    switch (game.location) {
      case "home":
        dom.classList(chooseInsectHeader, "add", "hide");
        dom.classList(gameHeader, "add", "hide");
        dom.classList(gameOverHeader, "add", "hide");
        dom.classList(startGameHeader, "remove", "hide");
        break;

      case "choose-insect":
        dom.classList(startGameHeader, "add", "hide");
        dom.classList(gameHeader, "add", "hide");
        dom.classList(gameOverHeader, "add", "hide");
        dom.classList(chooseInsectHeader, "remove", "hide");
        break;

      case "game":
        dom.classList(startGameHeader, "add", "hide");
        dom.classList(chooseInsectHeader, "add", "hide");
        dom.classList(gameOverHeader, "add", "hide");
        dom.classList(gameHeader, "remove", "hide");
        break;

      case "game-over":
        dom.classList(startGameHeader, "add", "hide");
        dom.classList(chooseInsectHeader, "add", "hide");
        dom.classList(gameHeader, "add", "hide");
        dom.classList(gameOverHeader, "remove", "hide");
        break;

      default:
        dom.classList(chooseInsectHeader, "add", "hide");
        dom.classList(gameHeader, "add", "hide");
        dom.classList(startGameHeader, "remove", "hide");
    }
  }

  public static updateGameOver(timer: Timer, score: Score): void {
    playTimeInfo.textContent = `${timer.minutes < 10 ? "0" : ""}${
      timer.minutes
    }:${timer.seconds < 10 ? "0" : ""}${timer.seconds}`;

    gameScoreInfo.textContent = `${score.score < 10 ? "0" : ""}${score.score}`;
  }

  public static updateGameCursor(): void {
    window.addEventListener("mousemove", (e) => {
      dom.classList(gunContainer, "remove", "hide");
      gunContainer.style.left = `${e.x}px`;
      gunContainer.style.top = `${e.y}px`;
    });
  }

  public static toggleGunFire(): void {
    dom.classList(fireImg, "remove", "hide");

    setTimeout(() => {
      dom.classList(fireImg, "add", "hide");
    }, 500);
  }
}

export default GameUI;
