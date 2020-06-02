import chai from 'chai';
import { Calculater } from '..';

// Class instance
const calculator = new Calculater;

// Che except instance
const except = chai.expect;

// Test calculator class
describe("Test calculator", () => {
  it("Add two number", () => {
    except(calculator.add(20, 10)).to.be.equal(30);
  })
})
