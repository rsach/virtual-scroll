import React, { useMemo, useCallback, useState, memo } from 'react';



 const VirtualScroll = ({items: itemsObj, itemHeight = 200, itemWidth = 200, numColumns =5 , numRows = 4, windowHeight, Component}) => {
  const buffer = Math.ceil(windowHeight / itemHeight) * numColumns;

  const [scrollTop, setScrollTop] = useState(0);


  const allItems = useMemo(() => {
    return itemsObj.map((item, i) => {
      const row = Math.floor(i / numColumns);
      const column = i % numColumns;
      const style = {
        height: `${itemHeight}px`,
        width: `${itemWidth}px`,
        position: "absolute",
        top: `${row * itemHeight}px`,
        left: `${column * itemWidth}px`,
        border: '1px solid'
      };

      return (
        <div key={i} style={style}>
          <Component {...item} />
        </div>
      );
    });
  }, [itemHeight, itemsObj]);


  const onScrollHandler = useCallback((event) => {
    setScrollTop(event.currentTarget.scrollTop);
  }, [allItems, setScrollTop]);

  const fullHeight = (itemsObj.length / numColumns) * itemHeight;
  const start = Math.max(0, Math.floor((scrollTop / itemHeight) * numColumns) - buffer);
  const end = Math.min(
    allItems.length - 1,
    Math.floor(((scrollTop + windowHeight) / itemHeight) * numColumns) + buffer);

  const itemsToBeRender = allItems.slice(start, end + 1);

  return (
    <div
      style={{ overflowY: "scroll", height: `${windowHeight}px`, background: 'white' }}
      onScroll={onScrollHandler}>
      <div
        style={{ height: `${fullHeight}px`, position: "relative" }}
      >
        {itemsToBeRender}
      </div>
    </div>
  );
};

export default memo(VirtualScroll)