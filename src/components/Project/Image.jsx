
import React from "react";

export default function Image(props){
    src = props.src
    alt = props.alt
    url = props.url
    key  = props.id
    return(
        <img 
            src={src} 
            alt={alt} 
            url={url} 
            // key={key}
            onClick={()=>setCurrentId(key)}
            onKeyDown={()=>spaceKeySelector()}>
            </img>
    )
}
