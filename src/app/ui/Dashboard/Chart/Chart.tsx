// "use client"
// import React from 'react'
// import styles from './chart.module.css';
// import { LineChart, Line, BarChart, Bar, Rectangle,  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// type DataItem = {
//   name: string;
//   Visit: number;
//   click: number;
// };

// const data: DataItem[] = [
//   { name: 'Sun', Visit: 4000, click: 2400 },
//   { name: 'Mon', Visit: 3000, click: 1398 },
//   { name: 'Tue', Visit: 2000, click: 9800 },
//   { name: 'Wed', Visit: 2780, click: 3908 },
//   { name: 'Thur', Visit: 1890, click: 4800 },
//   { name: 'Fri', Visit: 2390, click: 3800 },
//   { name: 'Sat', Visit: 3490, click: 4300 },
// ];

// export default function Chart() {

//   return (
//     <div className={styles.container}>
//         <h2 className={styles.title}>Recap Week</h2>
//           <ResponsiveContainer width="100%" height="90%">
//             <LineChart
//               width={500}
//               height={300}
//               data={data}
//               margin={{
//                 top: 5,
//                 right: 30,
//                 left: 20,
//                 bottom: 5,
//               }}
//             >
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip contentStyle={{background: '#f1ecec', border:'none'}} />
//               <Legend />
//               <Line type="monotone" dataKey="click" stroke="#8884d8" strokeDasharray="5 5" />
//               <Line type="monotone" dataKey="Visit" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
//           </LineChart>
//           </ResponsiveContainer>
//           <ResponsiveContainer width="48%" height="90%">
//             <BarChart
//               data={data}
//               margin={{
//                 top: 5,
//                 right: 30,
//                 left: 20,
//                 bottom: 5,
//               }}
//             >
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip contentStyle={{ background: '#f1ecec', border: 'none' }} />
//               <Legend />
//               <Bar dataKey="Visit" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
//               <Bar dataKey="click" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
//             </BarChart>
//           </ResponsiveContainer>
//     </div>
//   )
// }

"use client";
import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

ChartJS.register(LineElement, PointElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Line chart data and options
const lineChartData = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "Visits",
      data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
      borderColor: "#82ca9d",
      backgroundColor: "rgba(130, 202, 157, 0.2)",
      tension: 0.4,
    },
    {
      label: "Clicks",
      data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
      borderColor: "#8884d8",
      backgroundColor: "rgba(136, 132, 216, 0.2)",
      borderDash: [5, 5],
      tension: 0.4,
    },
  ],
};

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top" as const,
    },
    tooltip: {
      backgroundColor: "#f1ecec",
      titleColor: "#000",
      bodyColor: "#000",
      borderColor: "#ddd",
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      grid: { display: false },
    },
    y: {
      grid: { display: true, color: "#f0f0f0" },
    },
  },
};

// Bar chart data and options
const barChartData = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "Revenue",
      data: [2000, 4500, 3000, 5000, 7000, 8000, 6000],
      backgroundColor: "#ffa726",
      borderColor: "#fb8c00",
      borderWidth: 1,
    },
  ],
};

const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top" as const,
    },
    tooltip: {
      backgroundColor: "#f1ecec",
      titleColor: "#000",
      bodyColor: "#000",
      borderColor: "#ddd",
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      grid: { display: false },
    },
    y: {
      grid: { display: true, color: "#f0f0f0" },
    },
  },
};

export default function Chart() {
  return (
    <Card className="w-full p-4">
      <CardHeader>
        <CardTitle>Recap Week</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-96">
          <Line data={lineChartData} options={lineChartOptions} />
        </div>
        <div className="h-96 mt-8">
          <Bar data={barChartData} options={barChartOptions} />
        </div>
      </CardContent>
    </Card>
  );
}

