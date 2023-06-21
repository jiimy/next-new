import { ROOT_API } from '@/constants/api';
import React from 'react'

type SsrType = {
  data?: any
}

const Ssr = ({ data }: SsrType) => {
  return (
    <div>
      <h1>ssr 페이지</h1>
      <div>
        {data.map((item: any, i:any) => (
          <div key={i}>{item.id} {item.title}</div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${ROOT_API}/todos`);
  const data = await res.json();

  return {
    props: {
      data,
    }
  }
}

export default Ssr