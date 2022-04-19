import React, { useEffect, useState } from "react";
import Header from "../Header";
import { useParams } from "react-router-dom";

const List = (props) => {
  const [dataInCategory, setDataInCategory] = useState();
  const { allData } = props;
  const { name } = useParams();
  
  const filterData = () => {
    const filtered = allData.filter((data) => data.headCategory === name);
    setDataInCategory(()=>filtered);
  }
  useEffect(()=>{
    filterData();
  }, [allData])// eslint-disable-line react-hooks/exhaustive-deps
  

  return (
    <div>
      <Header />
      <p>List</p>
      {dataInCategory && dataInCategory.map((data)=><p key={data.title}>{data.title + data.address}</p>)}
    </div>
  );
};

export default List;
