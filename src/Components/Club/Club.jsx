import { useEffect, useState } from "react";
import ClubCard from "./ClubCard";

const Club = () => {
    const [clubInfo, setclubInfo] = useState([]);
    useEffect(() => {
        fetch('clubInfo.json')
            .then(res => res.json())
            .then(data => setclubInfo(data))
    }, [])
    return (

        <div className="mx-10">
            <div className="bg-blue-600 p-6 rounded-0 rounded-t-lg text-white font-bold">
                <h1 className="text-3xl md:text-4xl uppercase text-center mb-2 underline">Clubs and Activites</h1>
                <p className="text-xl md:text-2xl text-center">Unlock the Power of Engineering Networks and Rewards</p>
            </div>
            <div className="mx-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mt-8 gap-6">
                {
                    clubInfo.map(item => <ClubCard key={item._id} items={item}> </ClubCard>)
                }
            </div>
        </div>
    );
};

export default Club;