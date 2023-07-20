import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { Link } from 'react-router-dom';
import UserImages from './UserImages';

const UserAlbums = ({ userId }) => {
    const [albums, setAlbums] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const getAlbums = async () => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
        setAlbums(data)
    }
    useEffect(() => {
        getAlbums()
    }, []);

    const toggleExpand = () => {
        setExpanded((prevState) => !prevState);
    };

    return (
        <div className='flex items-center justify-center flex-col w-[80vw] shadow-xl rounded-xl mt-10 pt-10 mx-12'>
            <div className='flex items-baseline justify-around w-[80vw]'>
                <h2 className='text-3xl pb-5'>User Albums</h2>
                {expanded ? (<AiFillCaretUp onClick={toggleExpand} className='cursor-pointer' />)
                    : (<AiFillCaretDown onClick={toggleExpand} className='cursor-pointer' />)}

            </div>
            {expanded ? (
                <div>
                    {albums.length === 0 ? (
                        <p>No albums available for this user.</p>
                    ) : (
                        <>
                            <div className='grid grid-cols-4 gap-2 px-12 py-10' >
                                {
                                    albums.map((album) => (
                                        <div className='p-2 m-1' key={album.id}>
                                            <Link to={`/user/albums/${album.id}`}>
                                                <p>{album.title}</p>
                                            </Link>
                                            <UserImages />

                                        </div>))
                                }
                            </div>
                        </>
                    )}
                </div>
            ) : null}
        </div>
    );
}

export default UserAlbums;
