export interface Skill {
  id: string;
  name: string;
  level: 'Aprendiz' | 'Intermedio' | 'Avanzado' | 'Experto';
  category: 'Frontend' | 'Backend' | 'DevOps' | 'UI/UX' | 'Data';
  description: string;
  icon?: string;
}
