import SimpleImageSlider from "react-simple-image-slider";

import { banner } from "../assets";

const images = [
    { url: banner },
    { url: banner },
    { url: banner },
    { url: banner },
    { url: banner },
    { url: banner },
    { url: banner },
];

const ImageSlider = () => {
    return (
        <div>
            <SimpleImageSlider
                width={1579}
                height={400}
                images={images}
                showBullets={true}
                showNavs={false}
                autoPlay
                autoPlayDelay={4}
            />
        </div>
    );
};

export default ImageSlider;
