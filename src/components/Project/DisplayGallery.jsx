
import React, { useEffect, useState } from "react";
import "./DisplayGallery.css"

export default function DisplayGallery() {

    const [Gallery, setGallery] = useState([]);
    const [currentImageId, setCurrentImageId] = useState(0);

    function spaceKeySelector(event) {
        if (event.key == 'Enter') {
            console.log(event.key)
            console.log(currentImageId)
            setGallery(currentImageId);
        }
    }


    // When is useEffect called? is it on render?
    useEffect(()=> {
        try {
        async function fetchData() {
            const response = await fetch(
                "https://week-6-api.vercel.app/api/images"
            );
            const data = await response.json();
            setGallery(data);
            console.log("hello this is the gallery")
            console.log(Gallery);
        }
        fetchData();
        } catch {
            console.log("sorry no frogs today")
        }
    }, []);

    return(
        <div className="ProjectItem">
            <h3>Project Item</h3>
            <div className="ImageDiv">
            {Gallery.map((image, index) => (
                <img 
                    onClick={()=>setCurrentImageId(index)} 
                    key={image.id} src={image.url} 
                    id={index}
                    alt={image.alt} tabIndex={0}
                    // onKeydown={()=>spaceKeySelector()}
                    onKeyDown={spaceKeySelector}
                />))}
            </div>
            <img 
                src={Gallery[currentImageId]?.url}
                alt="test" />
        </div>
    );
    
}