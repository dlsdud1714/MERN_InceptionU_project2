import React from "react";

const ControlPanel = (props) => {
  const { onSelectedStores, businessData, categoryString, setPopupInfo } =
    props;

  return (
    <div className="control-panel">
      {categoryString &&
        businessData &&
        categoryString.map((cate, index) => {
          const categoriedArray = businessData.filter(
            (bus, key) => bus.headCategory === cate.headCategory
          );
        //   console.log("categorixed", categoriedArray);
          return (
            <div className={`${cate.headCategory}--container`} key={`category${index}`}>
              <ul className={cate.headCategory} key={`category${index}`}>
                {cate.headCategory}
              </ul>
              {categoriedArray.map((store, index) => {
                return (
                  <li
                    key={`${cate.headCategory} ${index}`}
                    onClick={() => {
                      onSelectedStores(store);
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
