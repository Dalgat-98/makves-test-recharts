import { typeDataLines } from "../type/type";
import { data, ListLine } from "../data/data";
import { linearGradient, newDataResult } from "@/utils";
import { useStore } from "@/store/store";

export const dataAddFirstElem = [{ ...data[0], name: "" }, ...data];
export const dataLines: typeDataLines[] = [];

export const arrayLineGradient = ListLine.map((item, index) => {
  const lines = newDataResult(item.name, item.color);
  dataLines.push(lines);

  return linearGradient(lines, useStore.getState().zIndex);
});

export function LineGradient(zIndex: number) {
  const arrayLineGradient = ListLine.map((item, index) => {
    const lines = newDataResult(item.name, item.color);
    dataLines.push(lines);

    return linearGradient(lines, zIndex);
  });

  return arrayLineGradient;
}
