import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserPosts from './UserPosts';
import UserAlbums from './UserAlbums';
import axios from 'axios';

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState();
    const getUserDetails = async()=>{
        const {data}=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log(data);
        setUser(data);
    }
    console.log(user);
    useEffect(() => {
       getUserDetails();
    }, []);
    return (
        <div className='flex items-center justify-center pt-10 flex-col'>
            <h1 className='text-5xl'>User Details</h1>
            {
                user && (
                    <>
                        <div className='flex justify-center items-center flex-col py-10 w-[80vw] mx-20 shadow-xl mt-5 rounded-3xl '>
                            <h1 className='text-xl m-4'>User Profile</h1>
                            <div className='flex flex-row'>
                                <div className='mx-10'>
                                    <p>Name: {user.name}</p>
                                    <p>Email: {user.email}</p>
                                    <p>Username: {user.username}</p>
                                </div>
                                <div className='mx-10'>
                                    <p>Address: {user.address.street}, {user.address.city}</p>
                                    <p>Phone No: {user.phone}</p>
                                    <p>Company:  {user.company.name}</p>
                                </div>
                            </div>
                        </div>
                        <UserPosts userId={user.id} />
                        <UserAlbums userId={user.id} />
                    </>
                )
            }
        </div>
    );
}

export default UserDetails;
