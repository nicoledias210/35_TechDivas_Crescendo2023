import React, {useState} from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Box } from '@mui/system';



function CustomTooltip({ active, payload, label }) {
 
  
    if (active) {
       return (
       <div
          className="custom-tooltip"
          style={{
             backgroundColor: "#ffff",
             padding: "5px",
             border: "1px solid #cccc"
          }}
       >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
       </div>
    );
 }}

function Report() {
  
  
    const colours = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
   const pieData = [
      {
         name: "Plastic",
         value: 54.85
      },
      {
         name: "Metal",
         value: 47.91
      },
      {
         name: "Trash",
         value: 16.85
      },
      {
         name: "Glass",
         value: 16.14
      },
      {
         name: "Cardboard",
         value: 10.25
      }
   ];
   
   

  return (
   <Box sx={{ flexDirection: 'row' }}>
    
   
    <div className = "piechart-weekly"> <PieChart width={730} height={300}>
    <Pie
       data={pieData}
       color="#000000"
       dataKey="value"
       nameKey="name"
       cx="50%"
       cy="50%"
       outerRadius={120}
       fill="#8884d8"
    >
       {pieData.map((entry, index) => (
          <Cell
             key={`cell-${index}`}
             fill={colours[index % colours.length]}
          />
       ))}
    </Pie>
    <Tooltip content={<CustomTooltip />} />
    <Legend />
    </PieChart></div>
    
    
    </Box>
  )
}

export default Report;

