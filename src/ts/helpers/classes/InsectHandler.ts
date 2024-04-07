import InsectHandlerOptions from "../types/InsectHandlerOptions";
import Game from "./Game";
import Insect from "./Insect";
import InsectHandlerUI from "./InsectHandlerUI";
import Score from "./Score";
import Timer from "./Timer";

class InsectHandler {
  private _insects: Array<Insect>;
  private _game: Game;
  private _timer: Timer;
  private _score: Score;

  public constructor(options: InsectHandlerOptions) {
    this._insects = new Array();
    this._game = options.game;
    this._timer = options.timer;
    this._score = options.score;
  }

  public addInsect(insect: Insect): void {
    this._insects.push(insect);

    InsectHandlerUI.updateInsects(this, this._game, this._timer, this._score);
  }

  public removeInsect(insect: Insect): void {
    const insectIndex = this._insects.indexOf(insect);

    this._insects.splice(insectIndex, 1);

    InsectHandlerUI.updateInsects(this, this._game, this._timer, this._score);
  }

  public isInsectsEmpty(): boolean {
    return this._insects.length <= 0;
  }

  public get insects(): Array<Insect> {
    return this._insects;
  }
}

export default InsectHandler;
