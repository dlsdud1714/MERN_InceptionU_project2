import React from "react";
import { CateFilterPanel } from "./CateFilterPanel";

const ControlPanel = (props) => {
  const {
    onSelectedStore,
    businessData,
    categoryString,
    setPopupInfo,
    onChange,
    category
  } = props;

  return (
    <div className="control-panel">
      {/* <CateFilterPanel settings={category} onChange={onChange} /> */}
      {categoryString &&
        businessData &&
        categoryString.map((cate, index) => {
          const categoriedArray = businessData.filter(
            (bus, key) => bus.headCategory === cate.headCategory
          );

          return (
            <div
              className={`${cate.headCategory}--container`}
              key={`category${index}`}
            >
              <ul className={cate.headCategory} key={`category${index}`}>
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
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default ControlPanel;
