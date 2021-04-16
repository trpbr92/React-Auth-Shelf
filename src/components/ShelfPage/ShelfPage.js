import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ShelfPage() {
  const dispatch = useDispatch();
  const items = useSelector(store => store.items);

  useEffect(()=>{
    dispatch({type: 'FETCH_ITEMS'})
  }, []);

  
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>{JSON.stringify(items)}</p>
    </div>
  );
}

export default ShelfPage;
