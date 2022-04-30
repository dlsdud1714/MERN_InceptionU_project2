import React from "react";

const ControlPanel = (props) => {
  const { onSelectedStore, businessData, categoryString, setPopupInfo,setCatagory } =
    props;

  return (
    <div className="control-panel">
      {categoryString &&
        businessData &&
        categoryString.map((cate, index) => {
          const categoriedArray = businessData.filter(
            (bus, key) => bus.headCategory === cate.headCategory
          );
      
          return (
            <div className={`${cate.headCategory}--container`} key={`category${index}`}>
              <ul className={cate.headCategory} key={`category${index}`} 
              >
                {cate.name}
              </ul>
              {categoriedArray.map((store, index) => {
                return (
                  <li
                    key={`${cate.headCategory} ${index}`}
                    onClick={() => {
                      onSelectedStore(store);
                      setPopupInfo(store);
                    }}
                  >
                    {store.title}
                  </li>
                );
              })}
            </div>
          );
        })
      }
    </div>
  );
};

export default ControlPanel;
