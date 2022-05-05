import React from "react";

const ControlPanel = (props) => {
  const {
    onSelectedStore,
    businessData,
    categoryString,
    setPopupInfo,
  } = props;

  const checkPlaceIsNew = (business, index) => {
    const userTimeStamp = new Date();
    const businessCreatedAt = new Date(business.jobCreated);
    const timeDif = userTimeStamp.getTime() - businessCreatedAt.getTime();
    const difInMon = timeDif / (1000 * 3600 * 24 * 30);
    if (difInMon < 12) {
      return (
        <div key={`isNew${index}`} className={`isNew new`}>
          New
        </div>
      );
    }
    if (difInMon > 180) {
      return (
        <div key={`isNew${index}`} className={`isNew old`}>
          Established
        </div>
      );
    }
  };
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
                      {checkPlaceIsNew(store, index)}
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
