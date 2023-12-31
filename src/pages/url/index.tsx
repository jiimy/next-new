import Button from '@/components/button/Button';
import Head from 'next/head';
import Link from 'next/link'

const Url = () => {

  return (
    <>
      <Head>
        <title>메인 페이지</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        <li >
          <Link href="/todo" className='hover:text-red'>
            투두 샘플
          </Link>
        </li>
        <li>
          <Link href="/weather" className='hover:text-red'>
            날씨 api
          </Link>
        </li>
        <li>
          <Link href="/recoil" className='hover:text-red'>
            recoil test
          </Link>
        </li>
        <li>
          <Link href="/redux" className='hover:text-red'>
            redux test
          </Link>
        </li>
      </ul>
      {/* <Button theme='blue'>버튼</Button> */}
    </>
  )
}

export default Url