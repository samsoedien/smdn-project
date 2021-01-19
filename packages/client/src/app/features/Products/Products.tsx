import React from 'react'
import PropTypes from 'prop-types'
import styled from './Products.module.scss'

import { IProduct } from '@smdn-project/common'
import ProductList from './ProductList'

export interface IProductsProps {}

const products: IProduct[] = [
  { id: '1', name: 'product1' },
  { id: '2', name: 'product2', description: 'a sample description for product2' },
]

const Products: React.FC<IProductsProps> = () => {
  return (
    <div className="smdn-products" data-test="products-component">
      <ProductList products={products} />
    </div>
  )
}

Products.propTypes = {}

export default Products
