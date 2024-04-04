import './item.css'
import maximize from '../../assets/maximize.svg'
import cart from '../../assets/cart.svg'

const firstProduct = {
  title: 'Shoes From Nepal',
  description: 'this is the first shoes that offers you the most...',
}

const Items = () => {
  const Image = () => {
    return (
      <img
        className="feature-image"
        src="https://bechaubikau.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fs1.a64939ab.png&w=640&q=75"
        alt="footware"
      />
    )
  }

  const Title = () => {
    return (
      <div className="top-section">
        <h2 className="title">Classic Zebra Shoes</h2>
        <p className="description">
          This is the brand new collection of this shoes you ever got in the
          market
        </p>
      </div>
    )
  }

  const Price = () => {
    return (
      <div className="price">
        <h3 className="previous-price"> Rs. 2500 </h3>
        <h3 className="current-price">Rs. 200</h3>
      </div>
    )
  }

  const Item = () => {
    return (
      <section className="product">
        <div className="product-icon-head">
          <img
            className="circle-icon"
            style={{ height: '15px', cursor: 'pointer' }}
            src={cart}
            alt=""
          />
          <img
            className="circle-icon"
            style={{ height: '15px', cursor: 'pointer' }}
            src={maximize}
            alt=""
          />
        </div>
        <Image />
        <Title />
        <Price />
      </section>
    )
  }
  const ListItems = () => {
    return (
      <section className="item-list">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </section>
    )
  }

  return (
    <div className="bottom-section">
      <ListItems />
    </div>
  )
}

export default Items
