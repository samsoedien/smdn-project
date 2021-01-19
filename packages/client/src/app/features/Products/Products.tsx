import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { IProduct } from '@smdn-project/common'
import { RootState } from '../../../store/store'
import ProductList from './ProductList'
import styled from './Products.module.scss'

export interface IProductsProps {}

const Products: React.FC<IProductsProps> = () => {
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.products.products)
  return (
    <div className="smdn-products" data-test="products-component">
      <ProductList products={products} />
    </div>
  )
}

Products.propTypes = {}

export default Products
