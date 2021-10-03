import {
  expect
} from "chai";

import Table from '../src/classes/Table';


suite('Testing Table Class', () => {
  suite(':Locations', () => {
    test('should set location correctly ', async () => {
      const table = new Table()
      table.putObject(1,2)
      const {x,y} = table.getObjectLocation();
      expect(x).to.be.equal(1);
      expect(y).to.be.equal(2);

      table.putObject(4,0)
      const {x: x2,y: y2} = table.getObjectLocation();
      expect(x2).to.be.equal(4);
      expect(y2).to.be.equal(0);

      table.putObject(0,4)
      const {x: x3,y: y3} = table.getObjectLocation();
      expect(x3).to.be.equal(0);
      expect(y3).to.be.equal(4);

    });

    test('should active for correct location', async () => {
      const table = new Table()
      table.putObject(5,5)
      expect(table.isObjectActive).to.be.equal(false);

      table.putObject(-1,5)
      expect(table.isObjectActive).to.be.equal(false);


      table.putObject(0,0)
      expect(table.isObjectActive).to.be.equal(true);


      table.putObject(-1,5)
      expect(table.isObjectActive).to.be.equal(true);


    });

  });

});
