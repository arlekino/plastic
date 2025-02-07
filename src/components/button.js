import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, variant = 'primary', disabled = false, as: Tag = 'button', type = 'button', href }) => {
  const buttonClass = `button ${variant} ${disabled ? 'disabled' : ''}`;

  // Пропсы, которые будут переданы в зависимости от тега
  const commonProps = {
    className: buttonClass,
    onClick,
    disabled: disabled && Tag === 'button', // disabled только для тега button
  };

  // Дополнительные пропсы для тега <a>
  if (Tag === 'a') {
    commonProps.href = href;
    commonProps.role = 'button'; // Для семантики
  }

  // Дополнительные пропсы для тега <input>
  if (Tag === 'input') {
    commonProps.type = type;
    commonProps.value = children;
  }

  return React.createElement(Tag, commonProps, Tag === 'input' ? null : children);
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  disabled: PropTypes.bool,
  as: PropTypes.oneOf(['button', 'a', 'input']),
  type: PropTypes.string, // Для тега <input>
  href: PropTypes.string, // Для тега <a>
};

Button.defaultProps = {
  as: 'button',
  type: 'button',
};

export default Button;