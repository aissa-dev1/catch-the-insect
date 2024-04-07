import TimerUI from "./TimerUI";

class Timer {
  private _minutes: number;
  private _seconds: number;
  private _timerInterval: number;

  public constructor() {
    this._minutes = 0;
    this._seconds = 0;
    this._timerInterval = 0;
  }

  public start(): void {
    this._timerInterval = setInterval(() => {
      this._seconds += 1;

      TimerUI.updateSeconds(this);

      if (this._seconds === 60) {
        this._minutes += 1;

        this._seconds = 0;

        TimerUI.updateMinutes(this);

        TimerUI.updateSeconds(this);
      }
    }, 1000);
  }

  public reset(): void {
    clearInterval(this._timerInterval);

    this._minutes = 0;
    this._seconds = 0;

    TimerUI.updateMinutes(this);

    TimerUI.updateSeconds(this);
  }

  public get minutes(): number {
    return this._minutes;
  }

  public get seconds(): number {
    return this._seconds;
  }
}

export default Timer;
