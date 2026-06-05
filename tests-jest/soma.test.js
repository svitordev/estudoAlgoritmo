const sum = require("./soma");

describe("soma.js", () => {
  test("quando somar 2 + 4 tem que retornar 6", () => {
    expect(sum(2, 4)).toBe(6);
  });

  it("deve retornar -2 quando somar -5 + 3", () => {
    expect(sum(-5, 3)).toBe(-2);
  });

  test("deve lançar erro se algum parâmetro não for número", () => {
    expect(() => sum("3", 2)).toThrow("Os parâmetros precisam ser números.");
    expect(() => sum("a", {})).toThrow();
    expect(() => sum(null, undefined)).toThrow();
  });
});
