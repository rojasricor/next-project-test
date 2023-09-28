// import { useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'

function About({ data }) {
  // useEffect(() => {
  //   alert("about");
  // }, []);

  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="my primer sitio next" />
      </Head>

      <h1>About Page</h1>
      {JSON.stringify(data)}

      <Image
        src="/bg.jpg"
        alt=""
        width={630}
        height={360}
        layout="responsive"
      />

      <p>This is a about page</p>

      <button onClick={() => alert('clicked')}>Click me</button>

      {/* {data.map((item) => {
        console.log(item)
        return (
          <div>
            <p>{item.title}</p>

            <Image
              src={item.url}
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
        )
      })} */}
    </div>
  )
}

export async function getStaticProps(context) {
  // fetch
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)

  return {
    props: {
      data,
    },
  }
}

export default About
