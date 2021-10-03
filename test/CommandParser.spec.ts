import {
  expect
} from "chai";
import constants from '../constants';
const sinon = require("sinon");
const chai = require("chai");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);
import CommandParser from '../src/classes/CommandParser';


suite('Testing CommandParser Class', () => {
  suite('*Parse() - generators', () => {
    test('should return lines correctly ', async () => {
      const commandParser = new CommandParser(constants.TEST_DATA_ONE);
      const cmdIterator = commandParser.parse();
      expect(cmdIterator.next().value).to.be.deep.equal({
        name: 'PLACE',
        args: {
          direction: 'EAST',
          x: 1,
          y: 2
        }
      });

      expect(cmdIterator.next().value).to.be.deep.equal({
        name: 'MOVE',
        args: {}
      });

      expect(cmdIterator.next().value).to.be.deep.equal({
        name: 'MOVE',
        args: {}
      });

      expect(cmdIterator.next().value).to.be.deep.equal({
        name: 'LEFT',
        args: {}
      });

      expect(cmdIterator.next().value).to.be.deep.equal({
        name: 'MOVE',
        args: {}
      });
      expect(cmdIterator.next().value).to.be.deep.equal({
        name: 'REPORT',
        args: {}
      });

      expect(cmdIterator.next().value).to.be.equal(undefined);

    });

    test('should handle errors correctly ', async () => {
      const commandParser = new CommandParser("./wrong");
      const cmdIterator = commandParser.parse();
      sinon.spy(console, 'error');
      cmdIterator.next()
      expect(console.error).to.be.calledWith("#Error: ENOENT: no such file or directory, open './wrong'");
    });

  });

});