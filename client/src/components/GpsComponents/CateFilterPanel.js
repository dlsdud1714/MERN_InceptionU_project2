import React from 'react'

export const CateFilterPanel = (props) => {
    const {settings, onChange} = props

  return (
    <div className='categoryPanel'>
        
        {settings&&Object.keys(settings).map((cate, index)=>(
            <div key={`container--${cate}${index}`} className={`category--${cate}`}>
            <input type="checkbox" key={`${cate}${index}`} name={`${cate}`} checked={settings[cate]} onChange={(event)=>onChange(cate,event.target.checked)}/> 
            <label key={`label--${cate}${index}`} htmlFor={`${cate}`}>{cate}</label>
            </div>
             )
        )}
    </div>
  )
}
