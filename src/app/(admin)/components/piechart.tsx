"use client";

import { Pie, Cell, PieChart } from "recharts";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const dataPie = [
  { name: "Group A", value: 1200000 },
  { name: "Group B", value: 550000 },
  { name: "Group C", value: 120000 },
  { name: "Group D", value: 200000 },
];
const Piechart = () => {
  return (
    <PieChart width={190} height={120} className="mt-2 outline-0 ">
      <Pie
        data={dataPie}
        cx="50%"
        cy="50%"
        innerRadius={40}
        outerRadius={60}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {dataPie.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Piechart;
