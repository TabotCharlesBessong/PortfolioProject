import React from "react";
import {
  BestDeals,
  Categories,
  Events,
  FeaturedProduct,
  Footer,
  Header,
  Hero,
  Sponsored,
} from "../../components";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default HomePage;
