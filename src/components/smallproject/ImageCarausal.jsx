import React from "react";
import {useState} from "react";
const image =["https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
"https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
"https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
"https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

 function ImageCarausal (){

    const  [currentIMG,setcurrentIMG ] =  useState(0);


    function NextSlide (){
        setcurrentIMG(currentIMG ===image.length -1?0:currentIMG+1);
    }

    function PreviseSlide (){
        setcurrentIMG(currentIMG === 0 ?image.length -1 :currentIMG -1 );
    }
    return(

        <div>
            <h1>Carausal Project</h1>
            <div className="slider">
                <div className="left-arrow" style={{float :"right",marginRight:"22%",fontSize:"80px" ,marginTop:"20%"}} onClick={PreviseSlide}> -</div>
                <div className="right-arrow" style={{float :"left",marginLeft:"5%",fontSize:"80px",marginTop:"20%"}}onClick={NextSlide}> + </div>
                {image.map(
          (image, index) =>
          currentIMG === index && (
              <div key={image} className="slide">
                <img src={image} alt="images" />
              </div>
            )
        )}
        </div>
        </div>
    );

 }
 export default ImageCarausal;