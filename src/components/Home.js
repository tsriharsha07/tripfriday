import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const Home = () => {
    const [users, setUsers] = useState();
    const getData = async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(data);
        setUsers(data)

    }
    useEffect(() => {
        getData();
    }, []);
   
    return (
        <div className='flex justify-center items-center m-5 flex-col'>
            <h1 className='text-4xl'>UsersList</h1>
            <div className='px-80 py-10 mt-5 rounded-lg shadow-2xl'>
            {
                users?.map((user) => (
                    <UserCard username={user.name} email={user.email} id={user.id}/>
                ))
            }
            </div>
        </div>
    );
}

export default Home;
