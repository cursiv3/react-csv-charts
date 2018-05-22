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
  console.log(props.data);
  let totalData;
  if (props.data.length > 0) {
    let len = props.data[0].length - 1;
    totalData = props.data.map(arr => {
      return { name: arr[len].header, value: arr[len].total };
    });
  }
  return (
    <div>
      <BarChart width={900} height={275} data={totalData}>
        <Tooltip />
        <Bar dataKey="value" />
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    </div>
  );
};

export default Bargraph;
