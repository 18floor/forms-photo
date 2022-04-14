import React, {useState} from "react";
import PropTypes from "prop-types";
import PhotoModel from "../models/PhotoModel";

const PhotoList = ({photos, onRemove}) => {

    const handleRemove = (evt, id) => {
        evt.preventDefault();
        onRemove(id);
    };

    return (
        <div className="photo-list">
            {photos.map((item) => (
                <div className="photo" key={item.id}>
                    <img className="photo-pic" src={item.dataUrl} alt=""/>
                    <a href="#/" className="photo-close" onClick={(evt) => handleRemove(evt, item.id)}>
                        X
                    </a>
                </div>
            ))}
        </div>
    );

};

PhotoList.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.instanceOf(PhotoModel)).isRequired,
    onRemove: PropTypes.func.isRequired
}

export default PhotoList;