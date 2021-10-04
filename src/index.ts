import Manager from './classes/Manager';
import constants from './constants';
import CommandParser from "./classes/CommandParser";


const commandParser = new CommandParser(constants.TEST_DATA_ONE);
const manager = new Manager();
manager.run(commandParser.parse());
