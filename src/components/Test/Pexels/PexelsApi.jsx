
import "./PexelsApi.css"
import React from "react";

export default function PexelsApi() {

    return (
        <div className="pexelsLogos">
            {/* <a href="https://www.pexels.com">Photos provided by Pexels</a> */}
            
            // -- or show our white logo --
            
            {/* <a href="https://www.pexels.com"> */}
            <img src="https://images.pexels.com/lib/api/pexels-white.png" />
            {/* </a> */}
            
            // -- or show our black logo --
            
            {/* // <a href="https://www.pexels.com"> */}
            <img src="https://images.pexels.com/lib/api/pexels.png" />
            {/* // </a> */}

            This <a href="https://www.pexels.com/photo/food-dinner-lunch-meal-4147875">Photo</a> was taken by <a href="https://www.pexels.com/@daria">Daria</a> on Pexels.

        </div>
    );
}


