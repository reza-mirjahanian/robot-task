
### Robot Task


#### Setup
- Node.JS 14 ( or later )
- Install dependencies `yarn` or `npm i`
- `npm start` - Runs project.
- `npm test` - Runs tests.
- `npm run coverage` - Runs code coverage.

#### Assumptions
- ✅ Moving the robot handled by Table. The robot only does the rotation.
- ✅ For reading command (`*parse`) I've used [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) technic.
- ✅ There is a `constant` file for configuration.
- ✅ The origin (0,0) considered to be the `SOUTH WEST` most corner.
- ✅ The first valid command to the robot is a `PLACE` command.
- ✅ `src` folder for source, `test` for test cases, `testData` for commands list

#### Todo
- 💡 Code to Interfaces.
- 💡 Use faker for generating test data.
- 💡 Use event or other method for better decoupling.
