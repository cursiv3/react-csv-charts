import React from "react";
import {
  Bar,
  BarChart,
  Cell,
  Label,
  LabelList,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from "recharts";

const Bargraph = props => {
  return (
    <div>
      <BarChart width={900} height={275} data={props.data["Grand Total"]}>
        <Bar dataKey="value" />
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </BarChart>
    </div>
  );
};

export default Bargraph;
