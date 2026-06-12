import {  controleParquinho } from '#/utils/controleParquinho'
import { filtrarProdutos } from '#/utils/filtrarProdutos'
import { createFileRoute, Link } from '@tanstack/react-router'
export const amigos = [
  { nome: 'Pedro', idade: 14, altura: 150 }, // ✅ Tem idade (14 >= 12) E altura (150 >= 140) -> LIBERADO
  { nome: 'Lucas', idade: 10, altura: 145 }, // ❌ Altura OK, mas é muito novo (10 < 12) -> BARRADO
  { nome: 'Maria', idade: 13, altura: 134 }, // ❌ Idade OK, mas é baixinha (135 < 140) -> BARRADO
  { nome: 'Ana', idade: 12, altura: 140 }, // ✅ No limite exato! Tem 12 anos e 140cm -> LIBERADO
]
const vitrine = [
    { nome: 'Camiseta Azul', preco: 50 },
    { nome: 'Camiseta Vermelha', preco: 60 },
    { nome: 'Calça Jeans', preco: 120 },
    { nome: 'Meia Branca', preco: 15 },
  ];
export const Route = createFileRoute('/')({ component: Home })
function Home() {
  console.log(filtrarProdutos(vitrine, "L", 130));
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <p className="mt-4 text-lg">
        Edit <code>src/routes/index.tsx</code> to get started.
      </p>
      <Link to="/perfil">perfil</Link>
      <p>{controleParquinho(amigos)}</p>
    </div>
  )
}
