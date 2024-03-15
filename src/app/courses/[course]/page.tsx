import { getCourse } from "@/api/courses";
import Link from "next/link";

export default async function CoursePage({
  params,
}: {
  params: { course: string };
}) {
  const course = await getCourse(params.course);
  return (
    <main>
      <h1>{course.nome}</h1>
      <p>{course.descricao}</p>
      <p>Hours Total: {course.total_horas}</p>
      <p>Classroom Total: {course.total_aulas}</p>
      <h2>Classroom</h2>
      <ul>
        {course.aulas && course.aulas.map((classroom) => (
          <li key={classroom.id}>
            <Link href={`/courses/${course.slug}/${classroom.slug}`}>{classroom.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
