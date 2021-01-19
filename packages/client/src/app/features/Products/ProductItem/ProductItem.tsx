import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProductItem.module.scss'

import { IProduct } from '@smdn-project/common'

export interface IProductItemProps {
  product: IProduct
}

const ProductItem: React.FC<IProductItemProps> = ({ product }) => {
  return (
    <div className="smdn-product-item card" data-test="product-item-component">
      <h6>{product.name}</h6>
      <br />
      <span>{product.description}</span>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.any.isRequired,
}

export default ProductItem
