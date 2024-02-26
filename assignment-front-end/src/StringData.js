import React, { useState } from 'react';

const StringData = (props) => {


  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>Data</h1>
      {
        props?.data?.generatedStrings.map(string => {
          return <h3>{string}</h3>
        })
      }
      <button onClick={()=>props.goBack()}  type="button" style={{ marginTop: '10px', marginRight: '10px', padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Again</button>
      <button onClick={()=>props.goBack()}  type="button" style={{ marginTop: '10px', padding: '5px 10px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Go BacK</button> 
    </div>
  );
}

export default StringData;