import React from "react";

export default function Toolbar(props) {
  const { filters, selected } = props;
  
  console.log('props = ' + props);
  console.log(props);

  return (
    <div className="filter">
      {filters.map(o => {
        return (
          <div 
            key={o} 
            onClick={() => props.onSelectFilter(o)} 
            className={(o === selected && "active").toString()}
          >
            {o}
          </div>
        );
      })}
    </div>
  );
}
