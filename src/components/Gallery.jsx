import React from 'react';
import GalleryItem from './GalleryItem';
import faker from 'faker';

const data = []


function Gallery() {
    for(let x = 1; x <= 6; x++) {
        data.push({
            image: `image/pic${x}.jpg`,
            name: faker.name.firstName(),
            desc: faker.lorem.sentence()
        })
    } 
    return (
        <>
            {data.map((item, id) => <GalleryItem key={id} image={item.image} name={item.name} desc={item.desc}/>)}
        </>
    )
}
export default Gallery;