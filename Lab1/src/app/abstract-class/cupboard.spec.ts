import { Cupboard } from './Class/cupboard';

describe('CupboardTesting', () => {
  let cupboard: Cupboard;

  beforeEach(() => {
    cupboard = new Cupboard("Cupboard", 250);
  }
  )

  it("CUPBOARD -- should create class object", () => {
    expect(cupboard).toBeTruthy();
  })

  it("CUPBOARD -- creating class obj with negative value", () =>{
    expect(()=> new Cupboard('Cupboard',-5)).toThrow(new Error('value<=0'))
  })

  it("CUPBOARD -- calculating Cost of the cupboard with V=250", () =>{
    cupboard.getCost();
    let s = cupboard.cost;
    let cost = 75.0*250;
    expect(s.toFixed(2)).toBe(cost.toFixed(2));
  })
});
