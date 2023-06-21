import React from 'react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
// import { useQuery } from "";

const Main = () => {
  async function getBoardList() {
    const { data } = await axios.get(`https://64927c19428c3d2035d02a9d.mockapi.io/api/todo`);
    return data;
  }

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['getTodo'],
    queryFn: getBoardList,
  });

  console.log('dd1', data);

  return (
    <div>
      메인
      <button>post</button>
    </div>
  )
}

export default Main