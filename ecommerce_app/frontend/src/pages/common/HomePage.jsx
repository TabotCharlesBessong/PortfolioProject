import React from 'react'
import { BestDeals, Categories, Events, Header, Hero } from '../../components'

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
    </div>
  )
}

export default HomePage