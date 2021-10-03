import _ from 'lodash';
import Logger from '../utils/logger';
const lineByLine = require('n-readlines');
const VALID_COMMANDS = ['MOVE',
  'LEFT',
  'RIGHT',
  'REPORT'
]

const PLACE_COMMANDS_REGEX = /PLACE\s+(\d+)\s*,\s*(\d+)\s*,\s*(NORTH|SOUTH|EAST|WEST)/g;

export default class CommandParser {

  constructor(private commandPath: string) {}

  * parse() {
    let lineNumber = 0;
    let liner;
    try {
      liner = new lineByLine(this.commandPath);

      let line;

      while (line = liner.next()) {
        const command = _.trim(line.toString());
        const commandBag = {
          name: '',
          args: {}
        }
        if (VALID_COMMANDS.includes(command)) {
          commandBag.name = command;
        } else {
          const matchAll = [...command.matchAll(PLACE_COMMANDS_REGEX)][0];
          if (matchAll) {
            const x = _.toNumber(matchAll[1]);
            const y = _.toNumber(matchAll[2]);
            const direction = matchAll[3];
            commandBag.name = 'PLACE';
            commandBag.args = {
              x,
              y,
              direction
            }
          } else {
            throw Error('Invalid command: ' + command);
          }


        }

        yield commandBag;
        lineNumber++;
      }


    } catch (e) {
      liner && liner.close();
      Logger.error((e as Error).message, {
        lineNumber
      })
    }
  }

}
