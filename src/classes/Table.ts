export default class Table {

  private _locationX = -1
  private _locationY = -1
  private _isActive = false;

  constructor(private _width: number = 5, private _height: number = 5) {

  }

  private _isValidPlace(x: number, y: number) {
    if (x >= 0 && x < this._width) {
      if (y >= 0 && y < this._height) {
        this._isActive = true;
        return true;
      }
    }
    return false
  }

  setLocation(x: number, y: number) {
    if (this._isValidPlace(x, y)) {
      this._locationX = x;
      this._locationY = y;
    }
  }

  getLocation() {
    return {
      x: this._locationX,
      y: this._locationY
    }
  }

  public get isActive() {
    return this._isActive;
  }

}
