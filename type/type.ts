export interface typeDataLines {
  name: string;
  param: LineValueAndZScore[];
  color: string;
}

type LineValueAndZScore = {
  value: number;
  zScore: number;
};
