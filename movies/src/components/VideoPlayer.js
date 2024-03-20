import { useEffect, useRef } from "react";//allows use of 'side-effects' for app components

function VideoPlayer() {
    const cloudinaryRef = useRef();
    const videoRef = useRef();
    useEffect ( () => {
        if ( cloudinaryRef.current ) return;
    cloudinaryRef.current = window.cloudinary;
    cloudinaryRef.current.videoPlayer(videoRef.current, {
        cloud_name: 'chelseaquigley.examples'
    })
   }, []);
    return (
        <video
        ref={videoRef} 
        data-cld-public-id="videos/waterfall"
    />
    );
}

export default VideoPlayer;