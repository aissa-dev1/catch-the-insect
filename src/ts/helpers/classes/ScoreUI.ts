import Span from "../../types/elements/Span";
import dom from "./Dom";
import Score from "./Score";

const scoreElm = dom.select<Span>("#score_elm");

class ScoreUI {
  public static updateScore(score: Score): void {
    scoreElm.textContent = `${score.score < 10 ? "0" : ""}${score.score}`;
  }
}

export default ScoreUI;
