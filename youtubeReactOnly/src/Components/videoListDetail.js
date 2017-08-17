import React, { Component } from 'react';

const VideoListDetail = ({video, onVideoSelect}) => {

    const imgUrl = video.snippet.thumbnails.default.url;

    return (
        // Cette fonction vient de videoList qui vient de l'index. Elle change le state de "selectedVideo"
        <li onClick={()=> onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imgUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>

        </li>
    )

};

export default VideoListDetail;