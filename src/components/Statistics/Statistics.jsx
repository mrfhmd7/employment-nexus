import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
     {
          name: "assignment1",
          mark: 55
     },
     {
          name: "assignment2",
          mark: 50
     },
     {
          name: "assignment3",
          mark: 52
     },
     {
          name: "assignment4",
          mark: 57
     },
     {
          name: "assignment5",
          mark: 54
     },
     {
          name: "assignment6",
          mark: 60
     },
     {
          name: "assignment7",
          mark: 45
     },
     {
          name: "assignment8",
          mark: 58
     },
     {
          name: "assignment9",
          mark: 53
     },
     {
          name: "assignment10",
          mark: 50
     }
]


const Statistics = () => {

     return (
          <>
               <h2 className='font-bold text-4xl mt-6 text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Assignment Mark</h2>
               <ResponsiveContainer className="mt-16 mb-20" width="100%" height={400}>
                    <AreaChart data={data}>
                         <CartesianGrid strokeDasharray="3 3" />
                         <XAxis dataKey="name" />
                         <YAxis />
                         <Tooltip />
                         <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
               </ResponsiveContainer>
          </>

     );
};

export default Statistics;