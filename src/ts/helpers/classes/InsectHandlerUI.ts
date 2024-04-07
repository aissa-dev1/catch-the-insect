import Div from "../../types/elements/Div";
import dom from "./Dom";
import Game from "./Game";
import GameUI from "./GameUI";
import Insect from "./Insect";
import InsectHandler from "./InsectHandler";
import Score from "./Score";
import Timer from "./Timer";

const gameDisplaySection = dom.select<Div>(".game-display-section");

class InsectHandlerUI {
  public static updateInsects(
    insectHandler: InsectHandler,
    game: Game,
    timer: Timer,
    score: Score
  ): void {
    gameDisplaySection.textContent = "";

    insectHandler.insects.forEach((insect) => {
      const insectContainer = dom.create("div");
      const insectImg = dom.create("img");

      insectContainer.style.left = `${insect.dimensions.dx}px`;
      insectContainer.style.top = `${insect.dimensions.dy}px`;

      insectImg.src = `./${insect.type}.png`;
      insectImg.alt = insect.type;

      insectContainer.addEventListener("click", () => {
        insectHandler.removeInsect(insect);

        for (let i = 0; i < Math.floor(Math.random() * 5); i += 1) {
          insectHandler.addInsect(new Insect({ type: insect.type }));
        }

        if (insectHandler.isInsectsEmpty()) {
          game.gameOver();

          GameUI.updateGameOver(timer, score);

          timer.reset();

          score.reset();
        } else {
          score.increase();

          GameUI.toggleGunFire();
        }
      });

      dom.classList(insectContainer, "add", "insect-container");
      dom.classList(insectImg, "add", `${insect.type}-img`);

      insectContainer.appendChild(insectImg);
      gameDisplaySection.appendChild(insectContainer);
    });
  }
}

export default InsectHandlerUI;
