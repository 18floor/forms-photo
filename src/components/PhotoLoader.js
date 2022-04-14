import React from "react";
import PropTypes from "prop-types";

const PhotoLoader = ({onSelected}) => {
    const fileToDataUrl = file => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.addEventListener('load', evt => {
                resolve(evt.currentTarget.result);
            });

            fileReader.addEventListener('error', evt => {
                reject(new Error(evt.currentTarget.error));
            });

            fileReader.readAsDataURL(file);
        });
    }

    const handleSelect = async (evt) => {
        const files = [...evt.target.files];
        const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
        onSelected(urls);
    }

    return (
        <div className="photo-loader">
            <input className="photo-loader-input" type="file" accept="image/*" multiple onChange={handleSelect}/>
            <div className="photo-loader-click-area">Click to select</div>
        </div>
    )
};

PhotoLoader.propTypes = {
    onSelected: PropTypes.func.isRequired
};

export default PhotoLoader;