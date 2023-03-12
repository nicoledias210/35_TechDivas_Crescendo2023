import {useEffect,React} from 'react';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import moment from 'moment';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

    const pdata=[]
   function getData(){
        let res=[]
        const temp= localStorage.getItem('userid')
        //console.log(temp)
        axios.post('http://127.0.0.1:8000/userWaste/results', {
            user_id: temp,
            interval:"weekly-daily"
        })
        .then( (response) =>{
             console.log(response.data);
        
       
        return res.data;
        })
    };
    
    //function getdata
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
