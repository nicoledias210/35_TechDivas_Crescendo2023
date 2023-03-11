import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import DownloadIcon from "@mui/icons-material/Download";
import axios from "axios";

const thumbsContainer = {
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	marginTop: 20,
};

const thumb = {
	display: "inline-flex",
	borderRadius: 2,
	border: "1px solid #eaeaea",
	padding: 4,
	boxSizing: "border-box",
};

const thumbInner = {
	display: "flex",
	minWidth: 0,
	overflow: "hidden",
};

const img = {
	display: "block",
	width: "auto",
	height: "100%",
};

function ImageUpload(props) {
	const [files, setFiles] = useState([]);
	const [image, setImage] = useState("");
	const { getRootProps, getInputProps } = useDropzone({
		accept: {
			"image/*": [],
		},
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) => {
					let data = new FormData();
					data.append("file", file);

					axios
						.post("http://127.0.0.1:8800/yolo", data)
						.then((res) => {
							console.log(res);
							setImage(res.data);
						});
				})
			);
		},
	});

	const dropboxStyle = {
		marginTop: 50,
		width: "auto",
		height: 300,
		backgroundColor: "Grey",
	};

	const thumbs = files.map((file) => (
		<div style={thumb} key={file}>
			<div style={thumbInner}></div>
			{image !== "" ? (
				<img src={`data:image/jpeg;base64,${image}`} style={img} />
			) : null}

			{/* <img src={image} alt="Random" /> */}
		</div>
	));

	useEffect(() => {
		return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
	}, []);

	return (
		<section className="container" style={dropboxStyle}>
			<div {...getRootProps({ className: "dropzone" })}>
				<input {...getInputProps()} />
				<div className="dragNDropbox" style={{ marginTop: "50" }}>
					<p>
						<b>Choose files</b> or drag it here
					</p>
					<DownloadIcon />
				</div>
			</div>
			<aside style={thumbsContainer}>{thumbs}</aside>
		</section>
	);
}

export default ImageUpload;
