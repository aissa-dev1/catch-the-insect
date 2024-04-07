import GameLocation from "../types/GameLocation";
import GameUI from "./GameUI";

class Game {
  private _location: GameLocation;
  private _isGameOver: boolean;

  public constructor() {
    this._location = "home";
    this._isGameOver = false;
  }

  public changeLocation(newLocation: GameLocation): void {
    this._location = newLocation;

    GameUI.updateGameLocation(this);
  }

  public gameOver(): void {
    this._isGameOver = true;

    this.changeLocation("game-over");
  }

  public get location(): GameLocation {
    return this._location;
  }

  public get isGameOver(): boolean {
    return this._isGameOver;
  }
}

export default Game;
