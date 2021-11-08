import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProductList.module.scss'

import { IProduct } from '@smdn-project/common'
import ProductItem from '../product-item'

export interface IProductListProps {
  products: IProduct[]
}

const ProductList: React.FC<IProductListProps> = ({ products }) => {
  return (
    <ul className="smdn-product-list" data-test="product-list-component">
      {products.map((product: IProduct, index: number) => (
        <ProductItem key={index} product={product} />
      ))}
    </ul>
  )
}

ProductList.propTypes = {
  products: PropTypes.any.isRequired,
}

export default ProductList
