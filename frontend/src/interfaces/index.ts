export type ListTypes = 'ToDo' | 'Doing' | 'Done';

export interface Card {
  id: string;
  titulo: string;
  conteudo: string;
  lista: ListTypes;
}
