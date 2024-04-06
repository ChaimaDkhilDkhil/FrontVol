import { Pilote } from './pilote';
import { Avion } from './avion';

export interface Vol {
  numvol: string;
  pilote: Pilote;
  numpilote: number;
  avion: Avion;
  numavion: number;
  villedep: string;
  villearr: string;
  heuredep: string;
  heurearr: string;
}
