
const Progress = () => {
    return (
        <div className="my-20 flex justify-center item-center">
            <div className="radial-progress bg-primary text-primary-content font-bold text-xl" style={{ "--value": "25", "--size": "16rem", "--thickness": "0.8rem" }} role="progressbar">25% Completed</div>
        </div>
    );
};

export default Progress;