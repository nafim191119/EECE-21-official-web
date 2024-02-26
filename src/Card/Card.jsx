import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ item }) => {
    const { name, image, ID, section, level, off, msg } = item;
    return (
        <div className="cardbox mx-auto">
            <div className="imgBox">
                <img src={image} alt="" />
            </div>
            <div className="content">
                <div className="details">
                    <h2>{name} <br />  </h2>
                    <div className="data">
                        <h3>Roll <br /> <span>{ID}</span> </h3>
                        <h3>Section <br /> <span>{section}</span> </h3>
                        {
                            level ? <h3>Role: <br /> <span>{level}</span> </h3> : null
                        }
                        
                    </div>
                    <div className="actionBtn">
                        {
                            off ? null : <button><Link to={msg}>Message</Link></button>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;