import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import DownloadIcon from '@mui/icons-material/Download';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 20
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


function ImageUpload(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const dropboxStyle = {
    marginTop: 50,
    width: "auto",
    height:300,
    backgroundColor: "Grey"
  }
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
   
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className="container" style = {dropboxStyle}>
      <div {...getRootProps({className: 'dropzone' })}>
        <input {...getInputProps()} />
        <div className = 'dragNDropbox' style = {{marginTop : '50'}}>
        <p><b>Choose files</b> or drag it here</p>
        <DownloadIcon/>

        </div>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
      
     
    </section>
  );
}

export default ImageUpload;