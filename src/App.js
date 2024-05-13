import './App.css';
import { memo, useEffect, useState } from 'react';
import Grid from './components/grid'

function App() {
  const [images, setImages] = useState([])
  useEffect(() => {
    const prefix = process.env.NODE_ENV === 'development' ? '' : '/virtual-scroll'
    fetch(`${prefix}/static/json/images.json`).then(res => res.json()).then(res => {
      setImages(res)
    })
  },[])

  return (
     
    <Grid images={images}>

    </Grid>
  );
}

export default memo(App);
