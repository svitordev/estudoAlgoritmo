const saudacao = require("./saudacao");

describe("saudacao.js", () => {
  it("tem que retornar bem vindo Vitor!", () => {
    expect(saudacao("Vitor")).toBe("Bem vindo, Vitor!");
  });
});
