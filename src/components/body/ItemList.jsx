import Items from './Items'
import './item.css'
const ItemList = () => {
  return (
    <>
      <div className="back-wrapper">
        <div className="p-wrap">
          <p className="prod">Our Products</p>
          <p className="results"> Showing 1-12 results in 36 result</p>
        </div>
        <Items />
      </div>
    </>
  )
}

export default ItemList
