import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserImages = () => {
    const { id } = useParams();
    const [photos,setPhotos]=useState([])
    const getPhotos=async()=>{
        const {data}=await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
        setPhotos(data)
    }
    useEffect(()=>{
        getPhotos()
    },[])
    console.log(photos);
  return (
    <div className='flex items-center justify-center'>
        <div className='grid grid-cols-8 gap-4 mt-4'>
            {
                photos.map(photo =>(
                    
                    <div className='flex flex-col'>
                        <img src={photo.url} alt='Thumbnail' />
                    </div>
                ))
            }
        </div>
    </div>
  );
}

export default UserImages;
