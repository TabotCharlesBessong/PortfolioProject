import React from 'react'
import "./list.scss"
import Card from '../card/Card';
import { listData } from '../../constant/data';

const List = () => {
  return (
    <div className="list">
      {listData.slice(1,5).map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List