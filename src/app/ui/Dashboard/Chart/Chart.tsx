"use client"
import React from 'react'
import styles from './chart.module.css';
import { LineChart, Line, BarChart, Bar, Rectangle,  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


type DataItem = {
  name: string;
  Visit: number;
  click: number;
};

const data: DataItem[] = [
  { name: 'Sun', Visit: 4000, click: 2400 },
  { name: 'Mon', Visit: 3000, click: 1398 },
  { name: 'Tue', Visit: 2000, click: 9800 },
  { name: 'Wed', Visit: 2780, click: 3908 },
  { name: 'Thur', Visit: 1890, click: 4800 },
  { name: 'Fri', Visit: 2390, click: 3800 },
  { name: 'Sat', Visit: 3490, click: 4300 },
];

export default function Chart() {

  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Recap Week</h2>
          <ResponsiveContainer width="100%" height="90%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip contentStyle={{background: '#f1ecec', border:'none'}} />
              <Legend />
              <Line type="monotone" dataKey="click" stroke="#8884d8" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="Visit" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
          </LineChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="48%" height="90%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip contentStyle={{ background: '#f1ecec', border: 'none' }} />
              <Legend />
              <Bar dataKey="Visit" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
              <Bar dataKey="click" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>
          </ResponsiveContainer>
    </div>
  )
}