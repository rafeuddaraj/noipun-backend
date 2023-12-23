import sofa from '../../../assets/images/product-sofa.png'
import chair from '../../../assets/images/product-table.png'
import table from '../../../assets/images/product-chair.png'
import bigsofa from '../../../assets/images/product-bigsofa.png'
import Image from './Image'
// import bage from '../../../assets/images/sale-bage'
import { useState } from "react";

export default function ImageGalley(){
  const [changeImage,setChangeImage] = useState(sofa)

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
           <Image img={chair} handleChangeImage={handleChangeImage}/>
           <Image img={table} handleChangeImage={handleChangeImage}/>
           {/* <Image img={bage} handleChangeImage={handleChangeImage}/> */}
           <Image img={bigsofa} handleChangeImage={handleChangeImage}/>
           <Image img={sofa} handleChangeImage={handleChangeImage}/>
          </div>
          {/* <!-- /image gallery  --> */}
        </div>
    </>
  );
}