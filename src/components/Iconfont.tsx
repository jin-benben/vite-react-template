import { FC } from 'react'
import classNames from 'classnames'
interface IconfontProps {
  type:string;
  className?:string
}

const Iconfont:FC<IconfontProps> = ({type,className}) => {
  return (
    
    <svg className={classNames("icon",className)} aria-hidden="true">
      <use xlinkHref={`#${type}`}></use>
    </svg>
  )
}

export default Iconfont