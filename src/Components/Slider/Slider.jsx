import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="/src/assets/banner1.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/src/assets/banner2.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/src/assets/banner3.png" />
                    <p className="legend">Legend 1</p>
                </div>
                
            </Carousel>
        </div>
    );
};

export default Slider;