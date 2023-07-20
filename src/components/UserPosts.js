
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AiOutlineSearch, AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Comments from './Comments';

const UserPosts = ({ userId }) => {
    const [posts, setPosts] = useState([]);
   const [filteredData,setFilteredData]=useState([])
    const [expanded, setExpanded] = useState(false);
    const getPosts = async () => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        setPosts(data);
        setFilteredData(data)   
    }

    useEffect(() => {
        getPosts()
        
    }, []);
    const toggleExpand = () => {
        setExpanded((prevState) => !prevState);
    };
    const filter=(e)=>{
        const keyword=e.target.value;
        console.log(keyword);
        if (keyword !== '') {
            const results = posts.filter((post) => {
              return post.title.toLowerCase().includes(keyword.toLowerCase());
            });
            setFilteredData(results);
          } else {
            setFilteredData(posts);
          } 
    }
    
    return (
        <div className='flex items-center justify-center flex-col w-[80vw] shadow-xl rounded-xl mt-10 pt-10 mx-12'>
            <div className='flex items-baseline justify-around w-[80vw]'>
                <h2 className='text-3xl pb-5'>User Posts</h2>
                {expanded ? (<AiFillCaretUp onClick={toggleExpand} className='cursor-pointer' />)
                    : (<AiFillCaretDown onClick={toggleExpand} className='cursor-pointer' />)}

            </div>
            {expanded ? (
                <div>
                    {posts.length === 0 ? (
                        <p>No posts available for this user.</p>
                    ) : (
                        <>
                            <div className='flex  justify-center relative '>
                                <input type='text' name='searchText' placeholder='Search for posts' className='w-80 px-2 pl-8 py-1 border-2 border-black rounded-lg' onChange={filter}/>
                                <AiOutlineSearch className='absolute top-2 left-[24.5rem] w-5 h-5' />
                            </div>
                            <div className='grid  gap-8 px-12 py-10 '>
                                {filteredData.map((post) => {
                                    return(
                                        <Comments post={post} getPosts={getPosts} key={post.id}/>
                                    )})
                                }
                            </div >
                        </>
                    )}
                </div>
            ) : null}
        </div>
    );
}

export default UserPosts;
