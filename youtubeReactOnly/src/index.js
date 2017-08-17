import _ from 'lodash';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';

import SearchBar from './Components/searchBar';
import VideoList from './Components/videoList';
import VideoDetail from './Components/videoDetail';

//Youtube API
const API_KEY = 'AIzaSyDbUWdt8iltIE20OHjYCAzzG3FTvLBHV9c';



class App extends Component {
    constructor(props){
        super(props);

        this.defaultTerm = 'Lomepal';

        this.state={
            videos:[],
            selectedVideo: null,
        };

        this.videoSearch(this.defaultTerm);
    }
    videoSearch(term){
        YTsearch({key: API_KEY, term : term},
            (videos) => {
                this.setState({
                    videos: videos,
                    selectedVideo : videos[0]
                });
            });
    }

    render() {
        const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);
        return (
            <div>
                <SearchBar
                    defaultTerm = {this.defaultTerm}
                    onInputChange = {videoSearch}
                />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));