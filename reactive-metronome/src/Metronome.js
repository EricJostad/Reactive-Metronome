import React, { Component } from 'react';
import './Metronome.css';

class Metronome extends Component {
    render() {
        const bpm = 100;
        const playing = false;

        return (
            <div className='metronome'>
                <div className='bpm=slider'>
                    <div>{bpm} BPM</div>
                    <input type='range' min='10' max='300' value={bpm} />
                </div>
                <button>{playing ? 'Stop' : 'Start'}</button>
            </div>
        )
    }
}

export default Metronome;