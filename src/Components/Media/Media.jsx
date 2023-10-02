import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createNewVideo, getAllVideos } from '../../Redux/Media/MediaAction';

const Media = () => {
    const { videos } = useSelector((state) => state.media);
    const dispatch = useDispatch();
    const [newVideo, setNewVideo] = useState({
      title: '',
      description: '',
      videoUrl: '',
    });
  
    useEffect(() => {
      dispatch(getAllVideos());
    }, [dispatch]);
  
    const handleAddVideo = () => {
      dispatch(createNewVideo(newVideo)); // Dispatch the action to add a new video
      setNewVideo({ title: '', description: '', videoUrl: '' }); // Clear the input fields
    };
  
    const handleDeleteVideo = (videoId) => {
    //   dispatch(deleteVideo(videoId)); 
    };
  
    return (
      <div>
        <h2>Media</h2>
        {/* Add Video Form */}
        <div>
          <h3>Add New Video</h3>
          <input
            type="text"
            placeholder="Title"
            value={newVideo.title}
            onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={newVideo.description}
            onChange={(e) =>
              setNewVideo({ ...newVideo, description: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Video URL"
            value={newVideo.videoUrl}
            onChange={(e) =>
              setNewVideo({ ...newVideo, videoUrl: e.target.value })
            }
          />
          <button onClick={handleAddVideo}>Add Video</button>
        </div>
  
        {/* List of Videos */}
        {videos && videos.length > 0 ? (
          <div>
            {videos.map((video) => (
              <div key={video._id}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <video controls width="300" height="200">
                  <source src={video.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button onClick={() => handleDeleteVideo(video._id)}>
                  Delete Video
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No videos available</p>
        )}
      </div>
    );
  };

export default Media