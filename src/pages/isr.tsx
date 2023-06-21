import { ROOT_API } from '@/constants/api';
import React from 'react'

type SsgType = {
  data?: any
}

const Isr = ({ data }: SsgType) => {
  return (
    <div>
      <h1>isr 페이지</h1>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${ROOT_API}/todos`);
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}

export default Isr