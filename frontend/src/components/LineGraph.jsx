import React, { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
	LineChart,
	ResponsiveContainer,
	Legend,
	Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
} from "recharts";
//function getdata

function LineGraph() {
	const [pdata, setData] = useState([]);
	const navigate = useNavigate();
	function getData() {
		let res = [];
		const temp = localStorage.getItem("userid");
		console.log(temp);
		axios
			.post("http://127.0.0.1:8000/userWaste/results", {
				user_id: temp,
				interval: "weekly-daily",
			})
			.then((response) => {
				console.log(response.data);
				setData(response.data);
			});
	}

	useEffect(() => {
		if (localStorage.getItem("userid") == null) {
			let path = "/Login";
			navigate(path);
		}
		getData();
		return () => {
			null;
		};
	}, []);
	return (
		<div>
			<h1 className="text-heading" style={{ marginTop: 125 }}>
				Weekly Analytics
			</h1>
			<div style={{ marginLeft: "320px", marginTop: "25px" }}>
				<ResponsiveContainer width="90%" aspect={3}>
					<LineChart data={pdata} margin={{ right: 300 }}>
						<CartesianGrid />
						<XAxis dataKey="name" interval={"preserveStartEnd"} />
						<YAxis></YAxis>
						<Legend />
						<Tooltip />
						<Line
							dataKey="plastic"
							stroke="black"
							activeDot={{ r: 8 }}
						/>
						<Line
							dataKey="metal"
							stroke="red"
							activeDot={{ r: 8 }}
						/>
						<Line
							dataKey="trash"
							stroke="grey"
							activeDot={{ r: 8 }}
						/>
						<Line
							dataKey="glass"
							stroke="blue"
							activeDot={{ r: 8 }}
						/>
						<Line
							dataKey="paper"
							stroke="green"
							activeDot={{ r: 8 }}
						/>
						<Line
							dataKey="cardboard"
							stroke="yellow"
							activeDot={{ r: 8 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export default LineGraph;
