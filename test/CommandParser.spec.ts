import {
  expect
} from "chai";
import constants from '../constants';

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



  });

});