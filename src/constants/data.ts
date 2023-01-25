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

export type TImportance = '' | 'crucial' | 'basic' | 'important'

export const theAssets: TAsset[] = [
  {
    active: true,
    name: 'Vídeo 001 - Como criar um CRUD usando React',
    tags: [
      { importance: 'important', name: 'filter() method', color: '#248' },
      {
        importance: 'important',
        name: 'Injeção de dependência',
        color: '#26f',
      },
      { importance: 'crucial', name: 'useState Hook', color: '#248' },
      { importance: 'basic', name: 'find() method', color: '#265' },
    ],
  },
  {
    active: false,
    name: 'Vídeo 002 - Criando uma aplicação de ponta a ponta',
    tags: [
      { importance: 'crucial', name: 'array methods', color: '#f55' },
      { importance: 'crucial', name: 'Desgin Pattern', color: '#26f' },
      { importance: 'basic', name: 'Prisma', color: '#f55' },
      { importance: 'basic', name: 'Dayjs', color: '#265' },
    ],
  },
];
