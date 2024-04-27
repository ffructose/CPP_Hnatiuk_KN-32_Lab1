import { Sofa } from './Class/sofa';

describe('SofaTesting', () => {
  let sofa: Sofa;

  beforeEach(() => {
    sofa = new Sofa("Sofa", 250);
  }
  )

  it("SOFA -- should create class object", () => {
    expect(sofa).toBeTruthy();
  })

  it("SOFA -- creating class obj with negative value", () =>{
    expect(()=> new Sofa('Sofa',-5)).toThrow(new Error('value<=0'))
  })

  it("SOFA -- calculating Cost of the sofa with S=250", () =>{
    sofa.getCost();
    let s = sofa.cost;
    let cost = (250*250)/3 + 5000;
    expect(s.toFixed(2)).toBe(cost.toFixed(2));
  })

});

