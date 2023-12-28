
import { useState } from "react";
import Image from "./Image";

export default function ImageGalley({images}){
  const [changeImage,setChangeImage] = useState(images[0]?.image || 'https://img.freepik.com/premium-photo/no-entry-sign_698953-2427.jpg')

  const handleChangeImage = (image)=>{
    setChangeImage(image)
  }
  return (
    <>
          <div className="container mx-auto px-4">
          <img
            className="w-full"
            src={changeImage}
            alt="Sofa image"
          />

          <div className="mt-3 grid grid-cols-4 gap-4">
           {images && images?.length > 0 && images.map(({image_id,image})=><Image key={image_id} img={image} handleChangeImage={handleChangeImage}/>) }
          </div>
          {/* <!-- /image gallery  --> */}
        </div>
    </>
  );
}