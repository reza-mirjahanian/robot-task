import {
  expect
} from "chai";
import constants from '../src/constants';
const sinon = require("sinon");
const chai = require("chai");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);
import Manager from "../src/classes/Manager";
import CommandParser from "../src/classes/CommandParser";


suite('Testing Manager Class', () => {
  suite(':run() ', () => {

    test('should handle errors correctly ',  () => {
      const commandParser = new CommandParser(constants.TEST_DATA_ONE);
      sinon.spy(console, 'log');
      const manager = new Manager();
      manager.run(commandParser.parse());
      expect(console.log).to.be.calledWith("3,3,NORTH");
    });

  });

});
