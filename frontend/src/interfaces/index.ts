export type ListTypes = 'ToDo' | 'Doing' | 'Done';

export interface Card {
  id: string;
  titulo: string;
  conteudo: string;
  lista: ListTypes;
}

export interface CardHandlers {
  handleListChange: (id: string, list: ListTypes) => Promise<void>;
  handleDeleteCard: (id: string) => Promise<void>;
  handleUpdateCard: (id: string, title: string, content: string) => Promise<void>;
}
