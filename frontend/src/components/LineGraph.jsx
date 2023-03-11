import React from 'react';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';


    const pdata = [
        {
            name: 'Day 1',
            plastic: 11,
            metal: 20,
            trash: 50,
            glass: 60,
            paper: 65,
            cardboard: 70
        },
        {
            name: 'Day 2',
            plastic: 5,
            metal: 11,
            trash: 44,
            glass: 61,
            paper: 50,
            cardboard: 42
        },
        {
            name: 'Day 3',
            plastic: 7,
            metal: 11,
            trash: 47,
            glass: 71,
            paper: 60,
            cardboard: 56

        },
        {
            name: 'Day 4',
            plastic: 6,
            metal: 15,
            trash: 11,
            glass: 30,
            paper: 40,
            cardboard: 44
        },
        {
            name: 'Day 5',
            plastic: 12,
            metal: 25,
            trash: 20,
            glass: 31,
            paper: 25,
            cardboard: 20
        },
        {
            name: 'Day 6',
            plastic: 5,
            metal: 5,
            trash: 24,
            glass: 35,
            paper: 30,
            cardboard: 25
        },
        {
            name: 'Day 7',
            plastic: 11,
            metal: 27,
            trash: 22,
            glass: 11,
            paper: 20,
            cardboard: 25
        },
    ];
      
    function LineGraph() {
        return (
            <>
                <h1 className="text-heading">
                    Weekly Analytics
                </h1>
                <ResponsiveContainer width="100%" aspect={3}>
                    <LineChart data={pdata} margin={{ right: 300 }}>
                        <CartesianGrid />
                        <XAxis dataKey="name" 
                            interval={'preserveStartEnd'} />
                        <YAxis></YAxis>
                        <Legend />
                        <Tooltip />
                        <Line dataKey="plastic"
                            stroke="black" activeDot={{ r: 8 }} />
                        <Line dataKey="metal"
                            stroke="red" activeDot={{ r: 8 }} />
                         <Line dataKey="trash"
                            stroke="grey" activeDot={{ r: 8 }} />
                        <Line dataKey="glass"
                            stroke="blue" activeDot={{ r: 8 }} />
                        <Line dataKey="paper"
                            stroke="green" activeDot={{ r: 8 }} />
                        <Line dataKey="cardboard"
                            stroke="yellow" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </>
        );
    }

      
    export default LineGraph
