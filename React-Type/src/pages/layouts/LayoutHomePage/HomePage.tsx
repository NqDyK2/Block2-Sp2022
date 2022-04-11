import React from 'react'
import Banner from './Banner'
import FastNews from './FastNews'
import Highlights from './Highlights'
import NewsLetter from './NewsLetter'
import QuickShop from './QuickShop'
import Social from './Social'
type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className='max-w-7xl m-auto'>
      <Banner />
      <Highlights />
      <FastNews />
      <QuickShop />
      <Social />
      <NewsLetter />
    </div>
  )
}

export default HomePage