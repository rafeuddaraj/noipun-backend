
<<<<<<< HEAD
export default function ImageGalley() {
  const [changeImage, setChangeImage] = useState(sofa)
=======
import { useState } from "react";
import Image from "./Image";

export default function ImageGalley({images}){
  const [changeImage,setChangeImage] = useState(images[0]?.image || 'https://img.freepik.com/premium-photo/no-entry-sign_698953-2427.jpg')
>>>>>>> origin/front-end

  const handleChangeImage = (image) => {
    setChangeImage(image)
  }
  return (
    <>
      <div className="container mx-auto px-4">
        <div className='w-full h-[350px]'>
          <img
            className="w-full h-full"
            src={changeImage}
            alt="Sofa image"
          />
<<<<<<< HEAD
=======

          <div className="mt-3 grid grid-cols-4 gap-4">
           {images && images?.length > 0 && images.map(({image_id,image})=><Image key={image_id} img={image} handleChangeImage={handleChangeImage}/>) }
          </div>
          {/* <!-- /image gallery  --> */}
>>>>>>> origin/front-end
        </div>

        <div className="mt-3 grid grid-cols-4 gap-4">
          <Image img={chair} handleChangeImage={handleChangeImage} />
          <Image img={table} handleChangeImage={handleChangeImage} />
          {/* <Image img={bage} handleChangeImage={handleChangeImage}/> */}
          <Image img={bigsofa} handleChangeImage={handleChangeImage} />
          <Image img={sofa} handleChangeImage={handleChangeImage} />
        </div>
        {/* <!-- /image gallery  --> */}
      </div>
    </>
  );
}