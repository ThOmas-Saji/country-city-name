import React from 'react'

export const Sort = ({handlesort}) => {

  return (
    <div className='sortButn'>
        <label> Sort country By name</label>
        <button onClick={()=>handlesort("title", 1)}>Asc</button>
        <button onClick={()=>handlesort("title", -1)}>Dsc</button>

        <label> Sort population</label>
        <button onClick={()=>handlesort("pop", 1)}>Low - High </button>
        <button onClick={()=>handlesort("pop", -1)}>High - Low</button>
    </div>
  )
}
