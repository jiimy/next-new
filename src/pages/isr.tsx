import { ROOT_API } from '@/constants/api';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import TutorialService from './api';


// type SsgType = {
//   data?: any
// }

const Isr = () => {
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: TutorialService.get,
  });
  
  return (
    <div>
      <h1>isr 페이지</h1>
      <div>
        {
          data && data.map((item: any, i: any) => (
            <div key={i}>{item.id} {item.title}</div>
          ))
        }
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