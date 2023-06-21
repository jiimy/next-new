import { ROOT_API } from '@/constants/api';
import React from 'react'

type SsgType = {
  data?: any
}

const Isr = ({ data }: SsgType) => {
  return (
    <div>
      <h1>isr 페이지</h1>
      <div>
        {data.map((item: any, i: any) => (
          <div key={i}>{item.id} {item.title}</div>
        ))}
      </div>
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
    revalidate: 60,
  }
}

export default Isr