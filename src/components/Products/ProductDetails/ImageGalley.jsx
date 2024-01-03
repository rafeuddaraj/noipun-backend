import { useEffect, useState } from "react";
import Image from "./Image";

export default function ImageGalley({ product, isSuccess }) {
    const { image, product_title } = product || {};
    const [changeImage, setChangeImage] = useState(null);

    useEffect(() => {
        if (isSuccess) {
            setChangeImage(image[0].image);
        }
    }, [image, isSuccess]);

    const handleChangeImage = (image) => {
        setChangeImage(image);
    };

    let imagesContent = null;

    if (isSuccess && image?.length > 0) {
        imagesContent = image?.map((image) => (
            <Image
                key={image.image_id}
                img={image.image}
                handleChangeImage={handleChangeImage}
            />
        ));
    }

    const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setBackgroundPosition(`${x}% ${y}%`);
    };

    return (
        <>
            <div className="container mx-auto px-4">
                <div className="w-full h-[350px]">
                    {/* <img
                        className="w-full h-full"
                        src={changeImage}
                        alt={product_title}
                    /> */}

                    <figure
                        className="w-full h-full cursor-move"
                        onMouseMove={handleMouseMove}
                        style={{
                            backgroundImage: `url(${changeImage})`,
                            backgroundPosition,
                        }}>
                        <img className="w-full h-full" src={changeImage} alt="Zoomable Image" />
                    </figure>
                </div>

                <div className="mt-3 grid grid-cols-4 gap-4">
                    {imagesContent}
                </div>
                {/* <!-- /image gallery  --> */}
            </div>
        </>
    );
}
