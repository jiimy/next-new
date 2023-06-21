import { ROOT_API } from '@/constants/api';
import { useQuery, QueryClient, dehydrate } from '@tanstack/react-query';
import axios from 'axios';


type SsgType = {
  data?: any
}

const Isr = () => {
  const { data } = useQuery(['posts'], getBoardList)
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

export async function getBoardList() {
  const { data } = await axios.get(`${ROOT_API}/todos`);
  return data;
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['todos'], getBoardList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 30,
  };
}

export default Isr