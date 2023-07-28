'use cloent';

import { ReactNode, useEffect, useRef, useState } from "react";
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import ReactPlayer from 'react-player';


const Video = () => {
    const videoRef = useRef(null);
    const [autoplayEnabled, setAutoplayEnabled] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
        setAutoplayEnabled(true); // Enable autoplay when a video starts playing
    };

    const handlePause = () => {
        setIsPlaying(false);
        setAutoplayEnabled(false); // Disable autoplay when a video is paused
    };

    const handleEnded = () => {
        setIsPlaying(false);
        setAutoplayEnabled(false); // Disable autoplay when the video ends
    };

    const handleAutoplayEnd = () => {
        setAutoplayEnabled(false); // Disable autoplay when the component is out of view
    };


    // const videoRef = useRef<HTMLVideoElement>(null);

    // useEffect(() => {
    //     // Create the video.js player when the component mounts
    //     const player = videojs(videoRef?.current!);

    //     // Optionally, you can set up any custom configurations for the player
    //     // player.volume(0.5); // Example: set the initial volume to 50%

    //     return () => {
    //         // Cleanup and destroy the player when the component unmounts
    //         if (player) {
    //             player.dispose();
    //         }
    //     };
    // }, []);


    return (
        <div>
            <h2>Video Playe</h2>
            <ReactPlayer
                ref={videoRef}
                url="https://www.youtube.com/watch?v=anva9_txlro" // Update this with the correct video file path
                playing={autoplayEnabled} // Control video playing state with autoplay
                controls={true} // Display video controls (play, pause, etc.)
                width="640" // Set the desired width of the video player
                height="360" // Set the desired height of the video player
                onPlay={handlePlay} // Event handler when the video starts playing
                onPause={handlePause} // Event handler when the video is paused
                onEnded={handleEnded} // Event handler when the video ends
                // onEnded={() => handleEnded} // Event handler when the component is out of view
            />
            {/* <ReactPlayer
                url="https://www.youtube.com/watch?v=anva9_txlro" // Update this with the correct video file path
                controls={true} // Display video controls (play, pause, etc.)
                width="640" // Set the desired width of the video player
                height="360" // Set the desired height of the video player
            /> */}
        </div >
    )

}
export default Video;