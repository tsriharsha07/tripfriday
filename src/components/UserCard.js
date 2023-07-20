import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({username,email,id}) => {
    
    const [popup, setPopup] = useState(false);
    const handleMouseEnter = () => {
        setPopup(true);
    };

    const handleMouseLeave = () => {
        setPopup(false);
    };
    return (
        <div className='relative m-4 border-b-2 border-black'>
            <Link to={`/user/${id}`}><p className='cursor-pointer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{username}</p>
            </Link>
            {
                popup && (
                    <div className='absolute w-72 top-0 left-48 border-2 pl-6 rounded-lg shadow-md'>
                        <p>Username: {username}</p>
                        <p>Email: {email}</p>
                    </div>
                )
            }
        </div>
    );
}

export default UserCard;
