import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Button} from 'sezy-design'

const Home: NextPage = () => {
  return (
    <div>
      <Button label='Button size m' round={true} />
    </div>
  )
} 

export default Home
