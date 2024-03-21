import Update from '@/components/update';

type Action = {
  nome: string;
  preco: number;
  atualizada: string;
};

export const revalidate = 5;

export default async function AcoesPage() {
  const response = await fetch('https://api.origamid.online/acoes/lua', {
    next: {
      // revalidate: 0,
      tags: ['actions'],
    },
  });

  const action = (await response.json()) as Action;

  return (
    <main>
      <h1>Actions</h1>
      <Update />
      <h2>{action.nome}</h2>
      <p>Price: {action.preco}</p>
      <p>Updated: {action.atualizada}</p>
    </main>
  );
}
