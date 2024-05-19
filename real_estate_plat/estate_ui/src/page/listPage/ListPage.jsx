import React from 'react'
import { listData } from '../../constant/data'
import { Card, Map } from '../../components'
import "./listPage.scss"

const ListPage = () => {
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          {listData.map(item =>  (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={listData} />
      </div>
    </div>
  )
}

export default ListPage