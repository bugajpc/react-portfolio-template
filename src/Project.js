import React from "react";
function Project({item}) {
    return (
        <div className="project">
            <img src={item.image}></img>
            <h2>{item.name}</h2>
        </div>
    )
}
export default Project