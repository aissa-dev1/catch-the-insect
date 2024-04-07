import ScoreUI from "./ScoreUI";

class Score {
  private _score: number;

  public constructor() {
    this._score = 0;
  }

  public increase(by?: number): void {
    if (by) this._score += by;
    else this._score += 1;

    ScoreUI.updateScore(this);
  }

  public decrease(by?: number): void {
    if (by) this._score -= by;
    else this._score -= 1;

    ScoreUI.updateScore(this);
  }

  public reset(): void {
    this._score = 0;

    ScoreUI.updateScore(this);
  }

  public get score(): number {
    return this._score;
  }
}

export default Score;
