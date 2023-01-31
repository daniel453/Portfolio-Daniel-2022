import React from 'react'
import { icon } from './menu'


export const Close = ({ fill,onClick }:icon) => {
  return <svg style={{cursor:'pointer'}} onClick={onClick} xmlns="http://www.w3.org/2000/svg" height="48" width="48">
    <path fill={fill} d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/>
    </svg>
}