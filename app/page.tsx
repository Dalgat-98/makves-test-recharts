import { SetZIndex } from "@/components/shared/set-z-index";
import { Example } from "@/components/shared/simple-line-chart";

export default function Home() {
  return (
    <div style={{ width: "1000px", height: "500px" }}>
      <Example />
      <SetZIndex />
    </div>
  );
}
