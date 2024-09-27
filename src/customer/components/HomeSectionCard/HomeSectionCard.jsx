import React from "react";


const HomeSectionCard = ({ product }) => {
    return (
        <div className="cursor-pointer flex flex-col items-center justify-center
    bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border mr-2 ">

            <div className=" h-[14rem] w-[10rem]">

                <img className=" object-cover object-top w-full h-full item-center" 
                src={product.imageUrl} alt="" />

            </div>
            <div className=" p-4">
                <h3 className=" text-lg font-medium text-gray-900">{product.brand}</h3>
                <p className=" text-gray-600">{product.title}</p>
            </div>




        </div>
    )
}
export default HomeSectionCard