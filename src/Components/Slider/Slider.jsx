import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="/src/assets/banner1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/src/assets/banner2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;