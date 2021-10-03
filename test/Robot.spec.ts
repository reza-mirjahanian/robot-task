import {
  expect
} from "chai";

import Robot from '../src/classes/Robot';


suite('Testing Robot Class', () => {
  suite(':Direction', () => {
    test('should set direction correctly ',  () => {
      const robot = new Robot()
      expect(robot.direction).to.be.equal('');
      robot.direction = 'WEST';
      expect(robot.direction).to.be.equal('WEST');
    });

    test('should rotateLeft() works correctly ',  () => {
      const robot = new Robot()
      robot.direction = 'WEST';

      robot.rotateLeft();
      expect(robot.direction).to.be.equal('SOUTH');
      robot.rotateLeft();
      expect(robot.direction).to.be.equal('EAST');
      robot.rotateLeft();
      expect(robot.direction).to.be.equal('NORTH');
      robot.rotateLeft();
      expect(robot.direction).to.be.equal('WEST');

    });

    test('should rotateRight() works correctly ',  () => {
      const robot = new Robot()
      robot.direction = 'WEST';

      robot.rotateRight();
      expect(robot.direction).to.be.equal('NORTH');
      robot.rotateRight();
      expect(robot.direction).to.be.equal('EAST');
      robot.rotateRight();
      expect(robot.direction).to.be.equal('SOUTH');
      robot.rotateRight();
      expect(robot.direction).to.be.equal('WEST');

    });


    test('should walk() works correctly ',  () => {
      const robot = new Robot()
      robot.direction = 'WEST';
      expect(robot.walk()).to.be.deep.equal({
        x: -1,
        y: 0
      });
      robot.direction = 'EAST';
      expect(robot.walk()).to.be.deep.equal({
        x: 1,
        y: 0
      });
      robot.direction = 'SOUTH';
      expect(robot.walk()).to.be.deep.equal({
        x: 0,
        y: -1
      });
      robot.direction = 'NORTH';
      expect(robot.walk()).to.be.deep.equal({
        x: 0,
        y: 1
      });


    });



  });

});
