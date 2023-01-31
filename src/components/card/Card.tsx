import React from 'react'
import './card.css'

export interface card {
  src:string,
  alt:string,
  title:string,
  desc:string,
  a_title:string,
  a_link:string,
  a2_title:string,
  a2_link:string
}

export const Card = ({src,alt,title,desc,a2_title,a2_link,a_link,a_title}:card) => {
  return (
    <div className="cont__card">
      <div className="card">
        <div className="card__front" style={{backgroundImage: `url(${src})`}}>
          <div className='bg'></div>
          <div className="body__card__front">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="card__back">
          <div className="body__card__back">
            <p>{desc}</p>
            <div className="card__back__anchors">
              <a href={a_link} target="_blank">{a_title}</a>
              <a href={a2_link} target="_blank">{a2_title}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
