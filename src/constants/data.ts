export type TAsset = {
  active: boolean;
  name: string;
  tags: TTag[];
};

export type TTag = {
  importance: TImportance;
  name: string;
  color?: string;
};

export type TImportance = '' | 'crucial' | 'basic' | 'important';

export const ImportanceStrings = ['crucial', 'basic', 'important'];

export const theAssets: TAsset[] = [
  {
    active: true,
    name: 'Vídeo 001 - Como criar um CRUD usando React',
    tags: [
      { importance: 'important', name: 'filter() method' },
      {
        importance: 'important',
        name: 'Injeção de dependência',
      },
      { importance: 'crucial', name: 'useState Hook' },
      { importance: 'basic', name: 'find() method' },
    ],
  },
  {
    active: false,
    name: 'Vídeo 002 - Criando uma aplicação de ponta a ponta',
    tags: [
      { importance: 'crucial', name: 'array methods' },
      { importance: 'crucial', name: 'Desgin Pattern' },
      { importance: 'basic', name: 'Prisma' },
      { importance: 'basic', name: 'Dayjs' },
    ],
  },
];
