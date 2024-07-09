import React from 'react';
import styled, { css } from 'styled-components';
import s from './button.module.scss';
import './button.scss';
import classNames from 'classnames';

type StyledButtonType = {
  size?: 'small' | "medium";
  children: any;
  theme?: 'primary' | 'secondry',
  className?: string;
}

const Button = styled.button<StyledButtonType>`
  ${props => props.size == 'small'
    && css`
      font-size: 14px;
      height: 60px;
    `
  }
  ${props => props.size == 'medium'
    && css`
      font-size: 16px;
      height: 80px;
    `
  }
`

const StyledButton = ({ size = 'medium', children, theme = 'primary', className }: StyledButtonType) => {
  return (
    <Button size={size} className={`${className} ${s.button} button`}>
      {children}
    </Button>
  );
};

export default StyledButton;