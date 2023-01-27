export type TAsset = {
  id: number;
  active: boolean;
  name: string;
  tags: TTag[];
};

export type TTag = {
  id: number;
  importance: TImportance;
  name: string;
  color?: string;
};

export type TImportance = '' | 'crucial' | 'basic' | 'important';

export const ImportanceStrings = ['crucial', 'basic', 'important'];

export const theAssets: TAsset[] = [
  {
    id: 0,
    active: true,
    name: 'Vídeo 001 - Como criar um CRUD usando React',
    tags: [
      { id: 1, importance: 'important', name: 'filter() method' },
      {
        id: 2, importance: 'important',
        name: 'Injeção de dependência',
      },
      { id: 3, importance: 'crucial', name: 'useState Hook' },
      { id: 4, importance: 'basic', name: 'find() method' },
      { id: 5, importance: 'basic', name: 'reduce() method' },
      { id: 6, importance: 'important', name: 'map() method' },
    ],
  },
  {
    id: 1,
    active: false,
    name: 'Vídeo 002 - Criando uma aplicação de ponta a ponta',
    tags: [
      { id: 1, importance: 'crucial', name: 'array methods' },
      { id: 2, importance: 'crucial', name: 'Design Pattern' },
      { id: 3, importance: 'basic', name: 'Prisma' },
      { id: 4, importance: 'basic', name: 'Dayjs' },
    ],
  },
];
