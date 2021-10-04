
import Logger from '../utils/logger';
import Table from './Table';
import Robot from './Robot';
import {
    PlaceArg
} from "../Types";


export default class Manager {

    run(commands: Generator<{ args: {}, name: string }>){
        const robot = new Robot();
        const table = new Table();

        for (let commandBag of commands ) {
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





