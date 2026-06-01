const registrosCatraca = [
  { nome: "João Silva", entrada: "08:15", profissão: "Developer" },
  { nome: "Maria Souza", entrada: "08:30", profissão: "Designer" },
  { nome: "Carlos Lima", entrada: "09:00", profissão: "Product Manager" },
  { nome: "João Silva", entrada: "13:45", profissão: "Developer" }, // Reentrada após o almoço
  { nome: "Ana Costa", entrada: "14:10", profissão: "Data Analyst" },
  { nome: "Maria Souza", entrada: "15:20", profissão: "Designer" }, // Reentrada após o café
  { nome: "Pedro Alves", entrada: "16:00", profissão: "QA Engineer" },
];
function gerarRelatorio(acessos) {
  let pessoasUnicas = [];

  for (const acesso of acessos) {
    if (!pessoasUnicas.includes(acesso.nome)) {
      pessoasUnicas.push(acesso.nome);
    }
  }
  return {
    visitantes: pessoasUnicas,
    total: pessoasUnicas.length,
  };
}
// console.log(gerarRelatorio(registrosCatraca));
const pessoasUnicas = [...new Set(registrosCatraca.map(a => a.nome))];
console.log(pessoasUnicas);
console.log(pessoasUnicas.length)