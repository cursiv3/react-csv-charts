import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Bar,
  BarChart,
  Legend,
  Tooltip,
  Cell,
  Label,
  LabelList,
  XAxis,
  YAxis
} from "recharts";

const Piegraph = props => {
  return (
    <div>
      <PieChart
        width={450}
        height={250}
        margin={{ right: 30, top: 55, bottom: 20, left: 10 }}
      >
        <Tooltip />
        <Pie
          data={props.data}
          dataKey="value"
          cx={160}
          cy={60}
          outerRadius={80}
          animationBegin={0}
          animationDuration={600}
        />
      </PieChart>
    </div>
  );
};

export default Piegraph;
