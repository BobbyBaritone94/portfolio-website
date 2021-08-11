import React from 'react';
import WorkEntry from './WorkEntry';
import c2dImage from '../assets/c2d.png'
import musionImage from '../assets/Musion.png'
import flowImage from '../assets/Flow1.png'

function Work(props) {
    return (
        <div className="portfolio">
            <h2>Vanilla JavaScript</h2>
                <WorkEntry 
                    name='Cuddle 2 Death'
                    description='Two player game where adorable characters fight to the death in an arena.
                    As the battle progresses the adorable aesthetic quickly turns grim.'
                    image={c2dImage}
                        />
            <h2>React JS</h2>
                <WorkEntry
                    name='Musion'
                    description='Search up your favorite song previews and 
                    combine them into a DJ mix. 
                    A creativity booster that allows users 
                    to experiment with song combinations.'
                    image={musionImage}
                        />
            <h2>Full Stack</h2>
                <WorkEntry
                    name='Flow'
                    description='Allows users to create rap 
                    songs with rhyme suggestions in real time. 
                    Users make profiles and like or comment 
                    on songs from other profiles.'
                    image={flowImage}/>
        </div>
    );
}

export default Work;