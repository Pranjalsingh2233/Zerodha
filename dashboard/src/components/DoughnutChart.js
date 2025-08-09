import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Stocks",
    },
  },
};

export function DoughnutChart({ data }) {
  return (
    <div id="display-none" style={{ marginBottom: "2rem" }}>
      <Doughnut options={options} data={data} />
    </div>
  );
}
