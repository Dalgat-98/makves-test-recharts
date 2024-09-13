import { typeDataLines } from "../type/type";
import { data } from "../data/data";
import { zScoreCalculations } from "./z-score-calculation";

// Данная функция меняет данные ../data/data в тип,
// который нужен для дальнейшего отображения графика
// Новый тип находится ../type/type
// Также необходимо добавить новый элемент в начало массива данных
// Чтобы у первого значения был свой сектор слева от точки на графике

function dataConvert(data: any[], lineName: string, color: string) {
  const dataXLine: number[] = [];
  data.forEach((item) => {
    dataXLine.push(item[lineName]);
  });

  const lines: typeDataLines = {
    name: lineName,
    param: [],
    color: color,
  };

  lines.param.push({
    value: data[0][lineName],
    zScore: zScoreCalculations(dataXLine, dataXLine[0]),
  });

  for (let i = 0; i < data.length; i++) {
    lines.param.push({
      value: data[i][lineName],
      zScore: zScoreCalculations(dataXLine, dataXLine[i]),
    });
  }

  return lines;
}

export function newDataResult(lineName: string, color: string) {
  return dataConvert(data, lineName, color);
}
