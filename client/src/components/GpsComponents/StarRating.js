import React from 'react'
import {ImStarFull, ImStarHalf} from "react-icons/im";
const StarRating = (props) => {
    const{popupInfo} = props;
    const findStar =(rate) =>{
        if(rate*1===5){
            return <div className='rate'><ImStarFull/><ImStarFull/><ImStarFull/><ImStarFull/><ImStarFull/></div>
        }if(rate*1>=4.5&&rate*1<5){
            return <div className='rate'><ImStarFull/><ImStarFull/><ImStarFull/><ImStarFull/><ImStarHalf/></div>
        }if(rate*1>=4&&rate*1<4.5){
            return <div className='rate'><ImStarFull/><ImStarFull/><ImStarFull/><ImStarFull/></div>
        }if(rate*1>=3.5&&rate*1<4){
            return <div className='rate'><ImStarFull/><ImStarFull/><ImStarFull/><ImStarHalf/></div>
        }if(rate*1>=3&&rate*1<3.5){
            return <div className='rate'><ImStarFull/><ImStarFull/><ImStarFull/></div>
        }if(rate*1>=2.5&&rate*1<3){
            return <div className='rate'><ImStarFull/><ImStarFull/><ImStarHalf/></div>
        }if(rate*1>=2&&rate*1<2.5){
            return <div className='rate'><ImStarFull/><ImStarFull/></div>
        }if(rate*1>=1.5&&rate*1<2){
            return <div className='rate'><ImStarFull/><ImStarHalf/></div>
        }if(rate*1<1.5){
            return <div className='rate'><ImStarFull/></div>
        }
       
    }
  return (
    <div className='place--rate'>
        {findStar(popupInfo.rating)}
    </div>
  )
}

export default StarRating