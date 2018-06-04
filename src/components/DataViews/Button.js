import React from 'react'
import propTypes from 'prop-types'

const Button = props => {
  const {disabled, subtitle, title, updateInput, value} = props

  const handleClick = () => {
    disabled || updateInput(value)
  }

  return (
    <div
      className={`dial-button ${disabled && ' dial-button--disabled'}`}
      onClick={handleClick}
    >
      <span className="dial-button__title">{title}</span>
      <span className="dial-button__subtitle">{subtitle}</span>
    </div>
  )
}

Button.propTypes = {
  disabled: propTypes.bool.isRequired,
  subtitle: propTypes.string,
  title: propTypes.string.isRequired,
  updateInput: propTypes.func.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
}

export default Button
