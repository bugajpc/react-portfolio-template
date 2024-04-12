import React, { useEffect, useState } from "react";
import Project from "./Project";
function Projects() {
    const [list, setList] = useState([])

    useEffect(() => {
        const tempList = []
        tempList.push({
            name: "C++ Project",
            image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        })
        tempList.push({
            name: "Project Portfolio",
            image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
        })
        tempList.push({
            name: "C++ Project",
            image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        })
        setList(tempList)
    }, [])

    return (
        <div className="projects">
            {list.map((item) => (
                <Project item={item}/>
            ))}
        </div>
    )
}
export default Projects