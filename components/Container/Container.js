import React, { Component } from 'react';
import { products } from '../../data';
import Modal from '../Modal/Modal.js';
import TextBlock from '../TextBlock/TextBlock.js';
import ProductBlock from '../ProductBlock/ProductBlock.js';
require('./Container.scss');

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products,
      modalIsOpen: false,
      blocks: []
    }
  }
  toggleModal = () => {
    this.setState((state) => {
      return { ...state, modalIsOpen: !state.modalIsOpen }
    })
  }
  createTextBlock = () => {
    const block = {
      type: 'text',
      title: 'This is a title',
      body: 'This is body text'
    }
    this.setState((state) => {
      return { ...state, modalIsOpen: false, blocks: [...state.blocks, block] }
    })
  }
  createProductBlock = () => {
    const block = {
      type: 'product',
      products: []
    }
    this.setState((state) => {
      return { ...state, modalIsOpen: false, blocks: [...state.blocks, block] }
    })
  }

  editTextBlock = (index, block) => {
    this.setState((state) => {
      const blocks = state.blocks;
      blocks[index] = block;
      return { ...state, blocks }
    })
  }

  updateProductBlock = (index, productId) => {
    this.setState((state) => {
      const blocks = state.blocks;
      blocks[index].products.push(productId);
      return { ...state, blocks }
    }) 
  }

  render() {
    const { 
      toggleModal, 
      createTextBlock, 
      updateProductBlock, 
      createProductBlock, 
      editTextBlock, 
      state 
    } = this;
    return (
      <div className="Container">
        <div className='Container-contents'>
          <h1 className="Container-title">Mobula Fashion</h1>
          <button onClick={toggleModal} className="Container-addButton">+</button>
            {
              state.blocks.map((block, i) => {
                return block.type === 'text' ? 
                <TextBlock key={i} position={i} edit={ editTextBlock } block={ block }/> : 
                <ProductBlock key={i} position={i} select={ updateProductBlock } products={ state.products } block={ block }/>
              })
            }
        </div>
        {
          state.modalIsOpen ? 
            (<Modal>
              <button onClick={createTextBlock} className="Container-button">Text Block</button>
              <button onClick={createProductBlock} className="Container-button">Product Block</button>
            </Modal>) : 
          ''
        }
      </div>
    )
  }
}
export default Container;