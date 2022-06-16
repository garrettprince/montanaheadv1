import Head from 'next/head'
import Image from 'next/image'
import Song from '../components/Song'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Montanahead</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex">
        <section className='flex-col m-auto'>
          <p>Montanahead Demos</p>
          <Song 
            className='' 
          />
        </section>
      </main>
    </div>
  );
}
