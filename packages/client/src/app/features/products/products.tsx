import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { IProduct } from '@smdn-project/common'

import { RootState } from '../../../store/store'
import { useAppSelector, useAppDispatch } from '../../../hooks'

import ProductList from './product-list'
import styled from './products.module.scss'

export interface IProductsProps {}

const Products: React.FC<IProductsProps> = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state: RootState) => state.products.products)
  return (
    <div className="smdn-products" data-test="products-component">
      <ProductList products={products} />
    </div>
  )
}

Products.propTypes = {}

export default Products
