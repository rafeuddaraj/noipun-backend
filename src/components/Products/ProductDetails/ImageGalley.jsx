
export default function ImageGalley() {
  const [changeImage, setChangeImage] = useState(sofa)

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