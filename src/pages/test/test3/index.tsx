import React from 'react';
import { Toast2, ToastProvider } from './toast';

const index = () => {
  return (
    <div>
      <ToastProvider>
        <button
          onClick={() => Toast2.error('에러')}
        >토스트 열기</button>
      </ToastProvider>
    </div>
  );
};

export default index;