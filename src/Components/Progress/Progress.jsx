import Question from "./Question";

const Progress = () => {
    return (
        <div>
            <h1 className="text-center text-2xl md:text-4xl text-white uppercase font-bold">FAQ and Progress</h1>
            <div className="mx-8 my-10 md:flex justify-evenly items-center gap-10 space-y-12">
                <div>
                    <Question></Question>
                </div>
                <div>
                    <div className="radial-progress bg-primary text-primary-content font-bold text-xl" style={{ "--value": "25", "--size": "16rem", "--thickness": "0.8rem" }} role="progressbar">25% Completed</div>
                </div>
            </div>
        </div>
    );
};

export default Progress;