import { ROOT_API } from '@/constants/api';
import React, { useEffect, useState } from 'react'

const Csr = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${ROOT_API}/todos`);
      const datas = await res.json();
      setData(datas);
    };

    fetchData();
  }, [])
  return (
    <div>
      <h1>csr 페이지</h1>
      <div>
        {data.map((item: any, i:any) => (
          <div key={i}>{item.id} {item.title}</div>
        ))}
      </div>
    </div>
  )
}

export default Csr