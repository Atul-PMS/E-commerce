import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';



const HomeSectionCarosel = ({data,sectionName}) => {

    const [activeIndex,setActiveIndex]=useState(0);

    const responsive = {
        320: { items: 1 },
        580: { items: 2 },
        820: { items: 3 },
        1024: { items: 4},
    };


   const sliderPrev=()=>setActiveIndex(activeIndex-1);
   const sliderNext=()=>setActiveIndex(activeIndex+1);

   const syncActiveIndex=({item})=>setActiveIndex(item)

    const items = data.slice(0,8).map((item) => <HomeSectionCard product={item}/>)

    return (
        <div className=" border">
            <h2 className="text-2xl font-extrabold text-gray-800 py-5 font-serif">{sectionName}</h2>
            <div className=" relative p-5">
                <AliceCarousel

                    items={items}
                    responsive={responsive}
                    // disableButtonsControls
                    justfiyCenter
                    // autoPlay
                    // autoPlayInterval={1000}
                    // infinite
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {/* {activeIndex !== items.length -5 && <Button variant="contained" className=" z-50" onClick={sliderNext} sx={{
                    position: "absolute", top: "8rem",
                    right: "0rem", transform: "translateX(50%)  rotate(90deg)", background: "white"
                }} aria-label="next">
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>}

               {activeIndex !== 0 &&  <Button variant="contained" className=" z-50" onClick={sliderPrev} sx={{
                    position: "absolute", top: "8rem",
                    left: "0rem",
                     transform: "translateX(-50%)  rotate(-90deg)", background: "white", ":hover": "gray"
                }} aria-label="next">
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>} */}
            </div>

        </div>
    )
}
export default HomeSectionCarosel