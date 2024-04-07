import Div from "../../types/elements/Div";
import InsectDimensions from "../types/InsectDimensions";
import InsectOptions from "../types/InsectOptions";
import InsectType from "../types/InsectType";
import dom from "./Dom";

const gameDisplaySection = dom.select<Div>(".game-display-section");

class Insect {
  private _type: InsectType;
  private _id: number;
  private _dimensions: InsectDimensions;

  public constructor(options: InsectOptions) {
    this._type = options.type;
    this._id = Math.floor(Math.random() * 1000000);
    this._dimensions = {
      dx: Math.floor(
        Math.random() * gameDisplaySection.getBoundingClientRect().width
      ),
      dy: Math.floor(
        Math.random() * gameDisplaySection.getBoundingClientRect().height
      ),
    };
  }

  public changeType(newType: InsectType): void {
    this._type = newType;
  }

  public get type(): InsectType {
    return this._type;
  }

  public get id(): number {
    return this._id;
  }

  public get dimensions(): InsectDimensions {
    return this._dimensions;
  }
}

export default Insect;
