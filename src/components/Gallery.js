// import React, { useState, useEffect } from 'react';
// import Flickr from 'flickr-sdk';

// const Gallery = () => {
//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
//     const apiKey = '5c68ba79a73ce7bd211ba8a0c7f0dae5';
//     const flickr = new Flickr(apiKey);

//     flickr.photos.search({
//       text: 'flowers',
//       per_page: 10,
//     })
//       .then(res => setPhotos(res.body.photos.photo))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="gallery">
//       {photos.map(photo => (
//         <img
//           key={photo.id}
//           src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`}
//           alt={photo.title}
//         />
//       ))}
//     </div>
//   );
// };

// export default Gallery;
