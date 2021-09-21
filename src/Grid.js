import React from 'react';

const Grid = ({ config, data }) => (
  <table>
    <thead>
    <tr>
      {config.map((obj)=> <th key={obj.title}>{obj.title}</th>)}
    </tr>
    </thead>
    <tbody>
     {data.map((obj)=><tr key={obj.imdbID}> {config.map((con)=><td key={con.title}> {con.field === "Trailer" ? <con.component data={obj[con.field]}/> : obj[con.field]} </td>)}</tr>)}
    </tbody>
  </table>
);

export default Grid;