import React from 'react';

function WorkEntry(props) {
    return (
        <div className="preview">
            <img className="previewImage" src={props.image} alt={props.imageDescription}/>
            <h4>{props.name}</h4>
            <h6>{props.tech}</h6>
            <p>{props.description}</p>
        </div>
    );
}

export default WorkEntry;