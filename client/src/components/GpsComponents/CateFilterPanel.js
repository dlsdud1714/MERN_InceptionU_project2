
import React from 'react'

export const CateFilterPanel = (props) => {
    const {settings, onChange} = props
    console.log("settings", settings)
  return (
    <div className='categoryPanel'>
        
        {settings&&Object.keys(settings).map((cate, index)=>(
            <div className={`category--${cate}`}>
            <input type="checkbox" key={`${cate}${index}`} name={`${cate}`} checked={settings[cate]} onChange={(event)=>onChange(cate,event.target.checked)}/> 
            <label htmlFor={`${cate}`}>{cate}</label>
            </div>
             )
        )}
    </div>
  )
}
