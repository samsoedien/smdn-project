import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.scss'

export interface IButtonProps {
  children: React.ReactNode
}

const Button: React.FC<IButtonProps> = ({ children }) => {
  return (
    <button className="smdn-button btn btn-primary" data-test="button-component">
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button
