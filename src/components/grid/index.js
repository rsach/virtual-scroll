import GridItem from "../grid-item"
import VirtualScroll from "../virtual-scroll"

const Grid = props => {
    const {images} = props
    return <div style={{height: '90vh'}}>

     <VirtualScroll items={images} itemHeight={200} itemWidth={200} windowHeight={900} Component={GridItem}>

    </VirtualScroll>
    </div>
}
export default Grid