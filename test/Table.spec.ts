import {
  expect
} from "chai";

import Table from '../src/classes/Table';


suite('Testing Table Class', () => {
  suite(':Locations', () => {
    test('should set location correctly ', async () => {
      const table = new Table()
      table.setLocation(1,2)
      const {x,y} = table.getLocation();
      expect(x).to.be.equal(1);
      expect(y).to.be.equal(2);

      table.setLocation(4,0)
      const {x: x2,y: y2} = table.getLocation();
      expect(x2).to.be.equal(4);
      expect(y2).to.be.equal(0);

      table.setLocation(0,4)
      const {x: x3,y: y3} = table.getLocation();
      expect(x3).to.be.equal(0);
      expect(y3).to.be.equal(4);

    });

    test('should active for correct location', async () => {
      const table = new Table()
      table.setLocation(5,5)
      expect(table.isActive).to.be.equal(false);

      table.setLocation(-1,5)
      expect(table.isActive).to.be.equal(false);


      table.setLocation(0,0)
      expect(table.isActive).to.be.equal(true);


      table.setLocation(-1,5)
      expect(table.isActive).to.be.equal(true);


    });

  });

});
