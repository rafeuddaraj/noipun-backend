import { Carousel } from "keep-react";

export default function Hero() {
    return (
        <div className="relative"> 
            <Carousel className="h-screen carousel-custom-css" slideInterval={5000} showControls={true} indicators={true}>
            <img
                src="https://i.ibb.co/j6HrBgW/In-Shot-20231231-233228185.jpg"
                alt="slider-1"
                height={400}
                width={910}
            />
            <img
                src="https://i.ibb.co/g6PYDKL/IMG-20231125-WA0036.jpg"
                alt="slider-2"
                height={400}
                width={910}
            />
            <img
                src="https://i.ibb.co/GvDzBtf/Whats-App-Image-2023-12-31-at-11-39-03-PM.jpg"
                alt="slider-3"
                height={400}
                width={910}
            />
            <img
                src="https://i.ibb.co/ZY197bB/orca-image-964297579.jpg"
                alt="slider-4"
                height={400}
                width={910}
            />
            <img
                src="https://i.ibb.co/TmWH8dr/orca-image-1713589519.jpg"
                alt="slider-4"
                height={400}
                width={910}
            />
            <img
                src="https://i.ibb.co/tc8bRCz/orca-image-113747057.jpg"
                alt="slider-4"
                height={400}
                width={910}
            />
        </Carousel>
        </div>
    );
}
