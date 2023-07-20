import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Comments = ({ post,getPosts }) => {
    const [comments, setComments] = useState([]);
    const [comment,setComment]=useState();
    const getComments = async () => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);

        setComments(data)
    }
    useEffect(() => {
        getComments()
    }, [])
    const deletePost=async()=>{
        const {data} = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
        console.log(data);
        getPosts();
    }
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const {data} = await axios.post(`https://my-json-server.typicode.com/tsriharsha07/tripfriday/comments`,{
            postId: post.id,
            body:comment
        });
        console.log(data);
    }
    return (
        <div className='border-2 p-3 border-black rounded-lg'>
            <h1 className='text-3xl text-center mb-4'>Post</h1>
            <div key={post.id} className='grid grid-cols-2 gap-8'>
                <h3><span className='font-semibold'>Title:</span> {post.title}</h3>
                <p><span className='font-semibold'>Body:</span> {post.body}</p>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-center text-xl m-3'>Comments:</h1>
                {
                    comments.length === 0 ? (
                        <p>No posts available for this user.</p>
                    ) : (
                        <div className='grid grid-cols-4'>
                            {
                                comments.map(comment => (
                                    <div key={comment.id} >
                                        <p>
                                            <span className='font-semibold'>Name</span>: {comment.name}
                                        </p>
                                        <p> <span className='font-semibold'>Body</span>: {comment.body}</p>
                                    </div>
                                ))
                            }
                        </div>
                    )}
            </div>
            <div className='flex flex-row justify-evenly'>
                <form className='mx-4' onSubmit={handleSubmit}>
                    <input type="text" name='comment' placeholder='Add Comments' className='mx-4 p-2 border-2 rounded-lg border-black' value={comment} onChange={(e)=>setComment(e.target.value)}/>
                    <button type='submit'>Submit</button>
                </form>
                <button onClick={deletePost}>Delete Post</button>
            </div>
        </div>
    );
}

export default Comments;
