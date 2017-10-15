import React, { Component } from 'react';
require('./ProductBlock.scss');

class ProductBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0
    }
  }

  updateProductPosition = (val) => {
    const { state: { currentPosition }, props: { products } } = this;
    const newPosition = (currentPosition + val) % (products.length);
    this.setState({
      currentPosition: newPosition !== -1 ? newPosition : (products.length - 1)
    })
  }

  render() {
    const { 
      updateProductPosition,
      props: { products, select, position, block },
      state: { currentPosition }
    } = this;
    const currentProduct = products[currentPosition]

    return (
      <div className='ProductBlock'>
        {
          block.products.map((productId, i) => {
            const block = products.find(({ id }) => id === productId)
            return (
              <div key={ i } className='ProductBlock-product'>
                <img className='ProductBlock-image' src={block.image}/> 
                <p>{block.price} </p>
                <p>{block.retailer}</p>
              </div>
            )
          })
        }
        <div className='ProductBlock-product ProductBlock-product--select'>
          <h3>{currentProduct.title}</h3>
          <div onClick={() => updateProductPosition(-1)} className='ProductBlock-arrow'>{'<'}</div>
          <div onClick={() => updateProductPosition(+1) }className='ProductBlock-arrow'>{'>'}</div>
          <img className='ProductBlock-image' src={currentProduct.image}/> 
          <p>{currentProduct.price} </p>
          <p>{currentProduct.retailer}</p>
          <button onClick={() => select(position, currentProduct.id)} className="button-edit">Select</button>
        </div>
     </div>
    )
  }
}

export default ProductBlock;