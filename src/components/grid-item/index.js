
const GridItem = props => {
    const { id } = props
    const src = `https://source.unsplash.com/random/200x200?sig=${id}`
    return <div style={{position: 'relative', height: '200px', width: '200px'}}>
        <img src={src}></img>
        <span style={{position: 'absolute', left: 0, bottom: 10, color: 'white'}} > PhotoId:  {id + 1}</span>
    </div>

    
}
export default GridItem