"use client";

import React from "react";
import { useStore } from "@/store/store";

export function SetZIndex() {
  const { zIndex, changeZIndex } = useStore();

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <label>Задайте Z-Index</label>
        <input
          style={{ border: "1px solid black" }}
          type="number"
          value={zIndex}
          step={0.1}
          onChange={changeZIndex}
        ></input>
      </div>
    </>
  );
}
