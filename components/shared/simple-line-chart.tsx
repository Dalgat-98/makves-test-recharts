"use client";

import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { dataAddFirstElem, LineGradient } from "@/utils/main";
import { CustomizedDot } from "./customized-dot";
import { useStore } from "@/store/store";

export function Example() {
  const { zIndex } = useStore();
  const [lineGradient, setlineGradient] = useState(LineGradient(zIndex));

  useEffect(() => {
    console.log(zIndex);
    setlineGradient(LineGradient(zIndex));
  }, [zIndex]);

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={dataAddFirstElem}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {lineGradient}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="url(#coloruv)"
            dot={<CustomizedDot />}
            activeDot={false}
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="url(#colorpv)"
            dot={<CustomizedDot />}
            activeDot={false}
          />
          <Line
            type="monotone"
            dataKey="amt"
            stroke="url(#coloramt)"
            dot={<CustomizedDot />}
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
