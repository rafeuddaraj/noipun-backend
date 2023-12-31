import { useEffect, useState } from "react";
import Image from "./Image";

export default function ImageGalley({ product, isSuccess }) {
    const { image } = product || {};
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

    return (
        <>
            <div className="container mx-auto px-4">
                <div className="w-full h-[350px]">
                    <img
                        className="w-full h-full"
                        src={changeImage}
                        alt="Sofa image"
                    />
                </div>

                <div className="mt-3 grid grid-cols-4 gap-4">
                    {imagesContent}
                </div>
                {/* <!-- /image gallery  --> */}
            </div>
        </>
    );
}
