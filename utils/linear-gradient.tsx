import { typeDataLines } from "../type/type";

// Нарезает линии графика на отрезки и окрашивает их в цвет,
// который преедается в функцию
export function linearGradient(lines: typeDataLines, zIndex: number) {
  const countLineSegments = lines.param.length - 1;
  const listStops: any = [];

  for (let i = 1; i <= countLineSegments; i++) {
    const colorSegment = lines.param[i].zScore > zIndex ? "red" : lines.color;
    const percStart = (100 / countLineSegments) * (i - 1);
    const percEnd = (100 / countLineSegments) * i;

    listStops.push(
      <stop
        key={`start-${i - 1}`}
        offset={`${percStart}%`}
        stopColor={colorSegment}
      />
    );
    listStops.push(
      <stop key={`end-${i}`} offset={`${percEnd}%`} stopColor={colorSegment} />
    );
  }

  return (
    <defs key={"color" + lines.name}>
      <linearGradient id={"color" + lines.name} x1="0%" y1="0" x2="100%" y2="0">
        {listStops}
      </linearGradient>
    </defs>
  );
}
