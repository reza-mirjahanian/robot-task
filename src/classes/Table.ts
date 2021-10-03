export default class Table {

  private _objectX = -1
  private _objectY = -1
  private _isObjectActive = false;

  /**
   * @constructor
   * @param {number} _width - The width of the table.
   * @param {number} _height - The height of the table.
   */
  constructor(private _width: number = 5, private _height: number = 5) {}


  /**
   * is location in the board?
   * @param {number} x
   * @param {number} y
   * @return {boolean}
   */
  private _isValidPlace(x: number, y: number) {
    if (x >= 0 && x < this._width) {
      if (y >= 0 && y < this._height) {
        return true;
      }
    }
    return false
  }


  /**
   * Put Robot on the table and set the _isObjectActive true for correct locations.
   * @param {number} x
   * @param {number} y
   */
  putObject(x: number, y: number) {
    if (this._isValidPlace(x, y)) {
      this._isObjectActive = true;
      this._objectX = x;
      this._objectY = y;
    }
  }


  /**
   * Return the Robot location on the table.
   * @return {x: number, y: number}
   */
  getObjectLocation() {
    return {
      x: this._objectX,
      y: this._objectY
    }
  }

  /**
   * Is table active? (Robot is in the correct place).
   * @type {boolean}
   */
  public get isObjectActive() {
    return this._isObjectActive;
  }

}