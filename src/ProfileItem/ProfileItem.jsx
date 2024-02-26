import { useEffect, useState } from "react";
import Card from "../Card/Card";


const ProfileItem = () => {
    const [studentInfo, setStudentInfo] = useState([]);
    useEffect(() => {
        fetch('studentsInfo.json')
            .then(res => res.json())
            .then(data => setStudentInfo(data))
    }, [])
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 mt-40">
            {
                studentInfo.map(item => <Card
                    key={item._id}
                    item={item}
                ></Card>)
            }
        </div>
    );
};

export default ProfileItem;