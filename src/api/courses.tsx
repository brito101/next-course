type Course = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
  aulas: Classroom[];
};

type Classroom = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
};

export async function getCourses() {
  const response = await fetch("https://api.origamid.online/cursos");
  return (await response.json()) as Course[];
}

export async function getCourse(course: string) {
  const response = await fetch(`https://api.origamid.online/cursos/${course}`);
  return (await response.json()) as Course & {
    classes: Classroom[];
  };
}

export async function getClassroom(course: string, classroom: string) {
  const response = await fetch(
    `https://api.origamid.online/cursos/${course}/${classroom}`
  );
  return (await response.json()) as Classroom;
}
