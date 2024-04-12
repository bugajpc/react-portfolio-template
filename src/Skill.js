import React from "react";
function Skill({item}) {
    const getStars = (n) => {
        let stars = ""
        for(let i = 0; i < n; i++) {
            stars += "*"
        }
        return stars
    }
    return (
        <div className="skill">
            <h1>{item.name}</h1>
            <h2>{getStars(item.level)}</h2>
        </div>
    )
}
export default Skill