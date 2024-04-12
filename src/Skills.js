import React, { useEffect, useState } from "react";
import Skill from "./Skill";
function Skills() {
    const [list, setList] = useState([])
    useEffect(() => {
        const tempList = []
        tempList.push({
            name: "C++",
            level: 3
        })
        tempList.push({
            name: "Python",
            level: 2
        })
        tempList.push({
            name: "HTML",
            level: 10
        })
        setList(tempList)
    }, [])
    return (
        <section className="skills">
            {list.map((item)=>(
                <Skill item={item}/>
            ))}
        </section>
    )
}
export default Skills