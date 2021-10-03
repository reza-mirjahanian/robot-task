import constants from '../../constants';
import Logger from '../utils/logger';
import CommandParser from './CommandParser';
import Table from './Table';
import Robot from './Robot';
import {
    PlaceArg
} from "../Types";


export default class Manager {

    run(){
        const robot = new Robot();
        const table = new Table();

        const commandParser = new CommandParser(constants.TEST_DATA_ONE);

        for (let commandBag of commandParser.parse()) {
            const command = commandBag.name;

            if (command === 'PLACE') {
                const {
                    x,
                    y,
                    direction
                } = commandBag.args as PlaceArg;

                table.putObject(x, y);
                if (table.isObjectActive) {
                    //change robot direction
                    robot.direction = direction;
                }
            } else if (table.isObjectActive) {
                switch (command) {
                    case 'LEFT':
                        robot.rotateLeft();
                        break;
                    case 'RIGHT':
                        robot.rotateRight();
                        break;
                    case 'REPORT':
                        const {
                            x, y
                        } = table.getObjectLocation();
                        const direction = robot.direction;
                        const report = `${x},${y},${direction}`;
                        Logger.output(report) //@todo maybe dispatch an event
                        break;
                    case 'MOVE':
                        const walk = robot.walk();
                        const currentLocation = table.getObjectLocation();
                        const newLocationX = currentLocation.x + walk.x;
                        const newLocationY = currentLocation.y + walk.y;
                        table.putObject(newLocationX, newLocationY);
                        break;
                }
            }

        }
    }
}





