import React from "react";
import '../style/section/videosection.css'
import {ReactComponent as Playlogo} from '../asset/playlogo.svg'
import videofile from '../asset/brandvideo.mp4'

export default function Videosection(){

    const playvideo = (e) => {
        e.preventDefault();
        let videoplayer = document.getElementById('vidplayer');
        let heading = document.querySelector('.video-heading .h2');
        let playbutton = document.querySelector('.video-heading .play')
        heading.style.display = "none";
        if(videoplayer.paused === true){
            // console.log("play");
            videoplayer.play();
            // console.log(videoplayer)
            playbutton.style.display = "none";
        }
        else{
            // console.log("pause");
            videoplayer.pause();
            playbutton.style.display = "inline-block";
        }
    }

    const videoend = () => {
        let heading = document.querySelector('.video-heading .h2');
        heading.style.display = "block";
        let playbutton = document.querySelector('.video-heading .play');
        playbutton.style.display = "inline-block";
    }

    return(
        <>
        <div className="videosection-main">
            <div className="video-main page-width">
                <div className="video-heading">
                    <h3 className="h2">Explore the craftsmanship behind every garment</h3>
                    <div className="button play" onClick={playvideo}>
                    <a href="#name" className="p-heading button-contain"><span><Playlogo/></span></a>
                    </div>
                </div>
                <div className="video-container" onClick={playvideo}>
                    <video id="vidplayer" width="100%" height="auto" onEnded={videoend} >
                        <source src={videofile} type="video/mp4"></source>
                        your browser does not support video tag
                    </video>
                </div>
            </div>
        </div>
        </>
    )
}