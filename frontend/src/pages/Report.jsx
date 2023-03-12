import React from 'react'
import Piechart from '../components/Piechart'
import ImageUpload from '../components/ImageUpload/ImageUpload'

import { Box } from '@mui/system';


function Report() {
  return (
    <Box>
    <ImageUpload/>
    
    <Piechart/>
   
    </Box>


  )
}

export default Report