import React, { Component } from 'react';
import './Metronome.css';

class Metronome extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            count: 0,
            bpm: 150,
            beatsPerMeasure: 4
        };
    }

    handleBpmChange = event => {
        const bpm = event.target.value;
        this.setState({ bpm });
    }

    render() {
        const { playing, bpm } = this.state;

        return (
            <div className='metronome'>
                <div className='bpm-slider'>
                    <div>{bpm} BPM</div>
                    <input
                        type='range'
                        min='10'
                        max='300'
                        value={bpm}
                        onChange={this.handleBpmChange} />
                </div>
                <button>
                    {playing ? 'Stop' : 'Start'}
                </button>
            </div>
        )
    }
}

export default Metronome;