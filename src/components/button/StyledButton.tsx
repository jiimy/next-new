import React from 'react';
import styled, { css } from 'styled-components';
import s from './button.module.scss';

type StyledButtonType = {
  size?: 'small' | "medium";
  children: any;
  theme?: 'primary' | 'secondry'
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

const StyledButton = ({ size = 'medium', children, theme = 'primary' }: StyledButtonType) => {
  return (
    <Button size={size} className={s.button}>
      {children}
    </Button>
  );
};

export default StyledButton;