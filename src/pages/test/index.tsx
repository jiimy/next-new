'use client';
import StyledButton from '@/components/button/StyledButton';
import React from 'react';
import s from './test.module.scss';

const index = () => {
  return (
    <div>
      <StyledButton size='small'>버튼</StyledButton>
      <StyledButton className={s.test_btn}>버튼</StyledButton>
      <StyledButton>버튼</StyledButton>
    </div>
  );
};

export default index;