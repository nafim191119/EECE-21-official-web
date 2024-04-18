import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from ".//../../assets/mist_campus_3.png";
import img2 from ".//../../assets/mist_campus_2.jpg";
import img3 from ".//../../assets/mist_campus_1.jpg";
import img4 from "../../assets/mist_campus_5.jpg";




const Slider = () => {
    return (
        <div className="min-h-80">
            <Carousel>
                <div>
                    <img src={img1} />
                    <p className="legend">Military Institute of Science and Technology</p>
                </div>
                <div>
                    <img src={img4} />
                    <p className="legend">Military Institute of Science and Technology</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Military Institute of Science and Technology</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Military Institute of Science and Technology</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;