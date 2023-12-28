
export default function Image({handleChangeImage,img}){

  return (
    <>
       <div>
              <img
              onClick={()=>{handleChangeImage(img)}}
                className="cursor-pointer"
                src={img}
                alt="kitchen image"
              />
            </div>
    </>
  );
}