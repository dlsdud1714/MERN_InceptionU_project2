import React from 'react';
import Split from 'react-split';
import BusinessSidebar from './BusinessSidebar';
import { Editor } from './Editor';

const BusinessAdNote = (props) => {
    const {business} = props;
    console.log(business)

  return (
    <div className='businessAdNote'>
        <Split sizes={[30,70]} direction="horizontal" className='split'>
        <BusinessSidebar business={business}/>
        <Editor/>
        </Split>
        </div>
  )
}

export default BusinessAdNote