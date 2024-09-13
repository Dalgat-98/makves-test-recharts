// Z = (X - μ)/σ

// где:
// - Z — z-score,
// - X — значение, для которого рассчитывается z-score,
// - μ — среднее значение выборки,
// - σ — стандартное отклонение выборки.

// Найдем среднее значение выборрки(массива)
function averageValue(array: number[]): number {
  const sum = array.reduce((acc, num) => acc + num, 0);

  return sum / array.length;
}

// Найдем стандартное отклонение выборки(массива)
function standardDeviation(array: number[], avverage: number): number {
  const variance = array.reduce((acc, num) => acc + (num - avverage) ** 2, 0);

  return Math.sqrt(variance / array.length);
}

// Расчитываем z-score по формуле Z = (X - μ)/σ
export function zScoreCalculations(array: number[], x: number): number {
  const u = averageValue(array);
  const q = standardDeviation(array, u);

  return (x - u) / q;
}
