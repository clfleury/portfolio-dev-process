import React from "react";
import data from './data.json';

export default class About extends React.Component {
  render(){
    return (
      <div className="content fade-in">
        <h2 className="page-title">Who am <strong>I?</strong></h2>
        {data.about.map(function(data, key) {
          return( <p key={key}>{data}</p> )
        }, this)}
      </div>
    )
  }
}
