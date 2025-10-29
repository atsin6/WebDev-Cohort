import { useState } from 'react'

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }

export function PostComponent({title, subtitle, time, image, description}){
  return <div className="post">

    <div className='postHeader'>
      <img src={image} className="profileImage"/>
      <div className='profileDetails'>
        <div className='postTitle'>{title}</div>
        <div className='postSubtitle'>{subtitle}</div>
        { (time !== undefined) ? <div className='postTime'>
          <div>{time}</div>
          <img className='clockImage' src={'https://media.istockphoto.com/id/1031786258/vector/watch.jpg?s=612x612&w=0&k=20&c=U_7Euy34YQwrg2zgJw_VutYLUjDHYyKUr483e-w29RE='} />
        </div> : null}
        </div>
    </div>
    <div className='postDescription'>
      {description}
    </div>
    
  </div>
}