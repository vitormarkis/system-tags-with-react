import { TImportance } from "./data";

interface Props {
  importance: TImportance,
  color: string
}

export const importance_colors: Props[] = [
  {
    importance: 'important',
    color: '#8338EC',
  },
  {
    importance: 'crucial',
    color: '#922D50',
  },
  {
    importance: 'basic',
    color: '#FF006E',
  },
  {
    importance: 'casual',
    color: '#0bb',
  },
  {
    importance: 'junior',
    color: '#2b6',
  },
  {
    importance: 'pleno',
    color: '#F1D302',
  },
];

// export const importance_colors = [
//   {
//     importance: 'important',
//     color: '#F21B3F',
//   },
//   {
//     importance: 'crucial',
//     color: '#0bb',
//   },
//   {
//     importance: 'basic',
//     color: '#2b6',
//   },
// ];
