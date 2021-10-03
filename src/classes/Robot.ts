import {
  Direction
} from "../Types";

export default class Robot {

  private _direction: Direction = ''

  /**
   * 'NORTH' | 'SOUTH' | 'EAST' | 'WEST'
   * @type {Direction}
   */
  public get direction() {
    return this._direction;
  }

  /**
   * 'NORTH' | 'SOUTH' | 'EAST' | 'WEST'
   */
  public set direction(d) {
    this._direction = d;
  }


  /**
   * Change the direction of the Robot -90∘
   */
  rotateLeft() {
    switch (this._direction) {
      case 'EAST':
        this._direction = 'NORTH'
        break;
      case 'NORTH':
        this._direction = 'WEST'
        break;
      case 'WEST':
        this._direction = 'SOUTH'
        break;
      case 'SOUTH':
        this._direction = 'EAST'
        break;
    }
  }

  /**
   * Change the direction of the Robot +90∘
   */
  rotateRight() {
    switch (this._direction) {
      case 'EAST':
        this._direction = 'SOUTH'
        break;
      case 'NORTH':
        this._direction = 'EAST'
        break;
      case 'WEST':
        this._direction = 'NORTH'
        break;
      case 'SOUTH':
        this._direction = 'WEST'
        break;
    }
  }



  /**
   * Give us the border of direction and distance.
   * @return {x: number, y: number}
   */
  walk() {
    const speed = 1;
    const distance = {
      x: 0,
      y: 0
    }
    switch (this._direction) {
      case 'NORTH':
        distance.y = speed;
        break;
      case 'SOUTH':
        distance.y = -1 * speed;
        break;
      case 'EAST':
        distance.x = speed;
        break;
      case 'WEST':
        distance.x = -1 * speed;
        break;
    }

    return distance;
  }
}