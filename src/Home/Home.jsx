import Achivement from "../Components/Achivement/Achivement";
import Club from "../Components/Club/Club";
import EECE21 from "../Components/EECE-21/EECE21";
import Progress from "../Components/Progress/Progress";
import Project from "../Components/Project/Project";
import Slider from "../Components/Slider/Slider";
import Sponsored from "../Components/Sponsored/Sponsored";
import Count from "./Count";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="divider"></div>
            <EECE21></EECE21>
            <div className="divider"></div>
            <Project></Project>
            <div className="divider"></div>
            <Club></Club>
            <div className="divider"></div>
            <Achivement></Achivement>
            <div className="divider"></div>
            <Progress></Progress>
            <div className="divider"></div>
            <Count></Count>
            <div className="divider"></div>
            <Sponsored></Sponsored>
        </div>
    );
};

export default Home;