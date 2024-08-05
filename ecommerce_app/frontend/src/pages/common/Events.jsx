import React from 'react'
import { EventCard, Header } from '../../components';

const Events = () => {
  return (
    <div>
      <Header activeHeading={4} />
      <EventCard active={true} />
      <EventCard active={true} />
    </div>
  );
}

export default Events