import {
  expect
} from "chai";
import constants from '../constants';
const sinon = require("sinon");
const chai = require("chai");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);
import Manager from "../src/classes/Manager";


suite('Testing Manager Class', () => {
  suite(':run() ', () => {

    test('should handle errors correctly ',  () => {

      sinon.spy(console, 'log');
      const manager = new Manager();
      manager.run();
      expect(console.log).to.be.calledWith("3,3,NORTH");
    });

  });

});
