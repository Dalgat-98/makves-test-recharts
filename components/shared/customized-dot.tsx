import { useStore } from "@/store/store";
import { dataLines } from "@/utils/main";

export const CustomizedDot = (props: any) => {
  const { cx, cy, stroke, payload, value } = props;
  let color = "";

  dataLines.forEach((line, i) => {
    if (stroke.includes(line.name)) {
      color = line.color;
    }
    dataLines[i].param.forEach((item) => {
      if (item.value == value && item.zScore > useStore.getState().zIndex) {
        color = "red";
      }
    });
  });

  return (
    <svg x={cx - 3} y={cy - 3}>
      <circle cx="3" cy="3" r="3" fill={color} />
    </svg>
  );
};
