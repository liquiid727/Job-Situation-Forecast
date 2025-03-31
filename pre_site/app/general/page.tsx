"use client"
import React from 'react'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, Line, LineChart } from "recharts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
const data = [
  { name: "前端", value: 400 },
  { name: "后端", value: 300 },
  { name: "算法", value: 200 },
  { name: "运维", value: 100 },
];

const lineData = [
  { name: "1月", 前端: 4000, 后端: 2400 },
  { name: "2月", 前端: 3000, 后端: 1398 },
  { name: "3月", 前端: 2000, 后端: 9800 },
  { name: "4月", 前端: 2780, 后端: 3908 },
];

const areaData = [
  { name: "Q1", 薪资: 4000 },
  { name: "Q2", 薪资: 3000 },
  { name: "Q3", 薪资: 5000 },
  { name: "Q4", 薪资: 2780 },
];


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Page() {
  return (
    <>
          <Card>
      <CardHeader>
        <CardTitle>IT岗位分布</CardTitle>
        <CardDescription>各岗位占比分析</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>岗位需求趋势</CardTitle>
        <CardDescription>2023年各岗位需求变化</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="前端" stroke="#8884d8" />
              <Line type="monotone" dataKey="后端" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>薪资变化曲线</CardTitle>
        <CardDescription>2023年各季度平均薪资</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={areaData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="薪资" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
    </>

  );
}