import React, {useState} from "react";
import nextId from "react-id-generator";
import PhotoModel from "../models/PhotoModel";
import PhotoLoader from "./PhotoLoader";
import PhotoList from "./PhotoList";

const PhotoManager = () => {

    const [photos, setPhotos] = useState([]);

    const handleSelected = (dataUrls) => {
        setPhotos((prevPhotos) => [
            ...prevPhotos,
            ...dataUrls.map((url) => new PhotoModel(nextId(), url))
        ]);
    };

    const handleRemove = (id) => {
        setPhotos((prevPhotos) => prevPhotos.filter((item) => item.id !== id));
    };

    return (
        <div className="photo-manager">
            <PhotoLoader onSelected={handleSelected}/>
            <PhotoList onRemove={handleRemove} photos={photos}/>
        </div>
    );
};

export default PhotoManager;