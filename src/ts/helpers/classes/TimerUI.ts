import Span from "../../types/elements/Span";
import dom from "./Dom";
import Timer from "./Timer";

const timeMinutesElm = dom.select<Span>("#time_minutes_elm");
const timeSecondsElm = dom.select<Span>("#time_seconds_elm");

class TimerUI {
  public static updateMinutes(timer: Timer): void {
    timeMinutesElm.textContent = `${timer.minutes < 10 ? "0" : ""}${
      timer.minutes
    }:`;
  }

  public static updateSeconds(timer: Timer): void {
    timeSecondsElm.textContent = `${timer.seconds < 10 ? "0" : ""}${
      timer.seconds
    }`;
  }
}

export default TimerUI;
