import image from '../../assets/images/kitchen.png'
export default function Category() {
    return (
        <>
            {/* <!-- 1 --> */}

            <a href="#">
                <div className="relative cursor-pointer offer-card rounded-lg">
                    <img
                        className="img mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
                        src={image}
                        alt="bedroom cathegory image"
                    />

                    <p className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl">
                        Bedroom
                    </p>
                </div>
            </a>
        </>
    );
}
