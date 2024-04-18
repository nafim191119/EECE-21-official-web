

const Progress = () => {
    return (
        <div>
            <h1 className="text-center text-2xl md:text-4xl text-white uppercase font-bold">And Last but NOT The Least....</h1>
            <div className="my-4 flex justify-center items-center gap-10">
                <div>
                    <div className="radial-progress bg-primary text-primary-content font-bold text-xl" style={{ "--value": "25", "--size": "16rem", "--thickness": "0.8rem" }} role="progressbar">25% Completed</div>
                </div>
            </div>
        </div>
    );
};

export default Progress;