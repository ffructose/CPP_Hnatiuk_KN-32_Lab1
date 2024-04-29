import { Challenge } from "./challenge";
import { Test } from "./test";
import { Exam } from "./exam";
import { GradExam } from "./gradExam";

describe('ЛАБОРАТОРНА 6 Тестування ', () => {
  let challenge: Challenge;
  let test: Test;
  let exam: Exam;
  let gradExam: GradExam;

  beforeEach(() => {
    challenge = new Challenge("аудіо", "метро Виставковий центр");
    test = new Test(25, "Мудл");
    exam = new Exam(1, "модульна контрольна робота", "Probability");
    gradExam = new GradExam(2, "страшний екзамен", "Maths");
  }
  )

  it("CHALLENGE -- should create class object", () => {
    expect(challenge).toBeTruthy();
  })
  it("TEST -- should create class object", () => {
    expect(test).toBeTruthy();
  })
  it("EXAM -- should create class object", () => {
    expect(exam).toBeTruthy();
  })
  it("GRADEXAM -- should create class object", () => {
    expect(gradExam).toBeTruthy();
  })


  it("EXAM -- testing isHard() with complexity 88", () =>{
    exam.complexity = 88;
    let res = exam.isHard();
    expect(res).toBe(true);
  })
  it("EXAM -- testing isHard() with complexity 42", () =>{
    exam.complexity = 42;
    let res = exam.isHard();
    expect(res).toBe(false);
  })

  it("GRADEXAM -- testing getComplexity for 1-course Maths", () =>{
    gradExam.course = 1;
    gradExam.subject = "Maths";
    gradExam.getComplexity();
    expect(gradExam.complexity).toBe(85);
  })
  it("GRADEXAM -- testing getComplexity for 3-course OOP", () =>{
    gradExam.course = 3;
    gradExam.subject = "OOP";
    gradExam.getComplexity();
    expect(gradExam.complexity).toBe(42);
  })
});
