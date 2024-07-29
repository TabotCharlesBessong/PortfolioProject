import React from 'react'
import { BestDeals, Categories, Header, Hero } from '../../components'

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
    </div>
  )
}

export default HomePage