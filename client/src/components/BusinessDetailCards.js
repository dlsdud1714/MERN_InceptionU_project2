import React from 'react'

export const BusinessDetailCards = (props) => {
 console.log("props",props)
 const data = props.businessdata
 console.log("what is data?", data )
  


  return (
    <div>
      <div>{data&&data.title}</div>
    </div>
  )
}
