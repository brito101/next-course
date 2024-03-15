// app/cursos/[curso]/[aula]/page.tsx
import { getClassroom } from '@/api/courses';
import Link from 'next/link';

export default async function ClassRoomPAge({
  params,
}: {
  params: { course: string; classroom: string };
}) {
  const classroom = await getClassroom(params.course, params.classroom);
  return (
    <main>
      <Link href={`/courses/${params.course}`}>{params.course}</Link>
      <h1>{classroom.nome}</h1>
      <p>{classroom.descricao}</p>
      <p>Duration: {classroom.tempo}</p>
    </main>
  );
}
