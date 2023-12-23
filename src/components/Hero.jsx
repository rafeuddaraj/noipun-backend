import { Carousel } from "keep-react";

export default function Hero() {
    return (
        <div className="relative"> 
            <Carousel className="h-screen carousel-custom-css" slideInterval={5000} showControls={true} indicators={true}>
            <img
                src="https://images.prismic.io/staticmania/ecd45179-4b86-4a34-b245-0078e022db5a_1.png?auto=compress,format"
                alt="slider-1"
                height={400}
                width={910}
            />
            <img
                src="https://images.prismic.io/staticmania/dee3ff09-3ddc-4340-bc8f-ea0028bb4a61_2.png?auto=compress,format"
                alt="slider-2"
                height={400}
                width={910}
            />
            <img
                src="https://images.prismic.io/staticmania/a5c7143d-24dd-4531-9f00-243f4eb27e28_3.png?auto=compress,format"
                alt="slider-3"
                height={400}
                width={910}
            />
            <img
                src="https://images.prismic.io/staticmania/c5cf46a8-b10c-43c8-a60e-6692838cdee1_4.png?auto=compress,format"
                alt="slider-4"
                height={400}
                width={910}
            />
        </Carousel>
        </div>
    );
}
