import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import DownloadIcon from "@mui/icons-material/Download";
import CircularProgress from "@mui/material/CircularProgress";

import axios from "axios";
import "./ImageUpload.css";
import { auto } from "@popperjs/core";
import Box from "@mui/material/Box";

const thumbsContainer = {
	marginTop: 135,
	paddingLeft: auto,
	paddingRight: auto,
	height: "400px",
	width: "400px",
};

const thumb = {
	borderRadius: 2,
	border: "1px solid #eaeaea",
	padding: 4,
	boxSizing: "border-box",
};

const img = {
	display: "block",
	width: "640px",
	marginLeft: "470px",
	height: "500px",
};

const data = {
	width: "auto",
	marginLeft: "500px",
	height: "500px",
};

function ImageUpload(props) {
	const [files, setFiles] = useState([]);
	const [image, setImage] = useState("");
	const [fetch, setFetch] = useState(false);
	const { getRootProps, getInputProps } = useDropzone({
		accept: {
			"image/*": [],
		},
		onDrop: (acceptedFiles) => {
			setFetch(true);
			setFiles(
				acceptedFiles.map((file) => {
					let data = new FormData();
					data.append("file", file);

					axios
						.post("http://127.0.0.1:8800/yolo", data)
						.then((res) => {
							console.log(res);
							setImage(res.data);
							setFetch(false);
						});
				})
			);
		},
	});

	const dropboxStyle = {
		marginTop: 135,
		marginLeft: 25,
		marginRight: 25,
		width: "auto",
		height: 300,
		backgroundColor: "#eaeaea",
	};

	const thumbs = files.map((file) => (
		<div key={file}>
			{image !== "" ? (
				<img src={`data:image/jpeg;base64,${image}`} style={img} />
			) : null}
		</div>
	));

	useEffect(() => {
		return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
	}, []);

	return image === "" ? (
		<section className="container" style={dropboxStyle}>
			<div {...getRootProps({ className: "dropzone" })}>
				<input {...getInputProps()} />
				<div
					className="dragNDropbox"
					style={{ marginTop: "50px", margin: "50px" }}
				>
					<p style={{ paddingTop: "8%", fontSize: "25px" }}>
						<b>Choose files</b> or drag it here
					</p>
					{fetch ? <CircularProgress /> : <DownloadIcon />}
				</div>
			</div>
		</section>
	) : (
		<div style={thumbsContainer}>{thumbs}</div>
	);
}

export default ImageUpload;
