// import httpService from './http.service.js'

export default {
  query
  // getById,
};

// const CitiesDB = [
//   {
//     _id: 'c1',
//     name: 'Tel Aviv',
//     img_url:
//       'https://ewscripps.brightspotcdn.com/dims4/default/fe9396a/2147483647/strip/true/crop/640x360+0+60/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.abc2news.com%2Fphoto%2F2015%2F10%2F14%2FBaltimore_City_Hallp_1444876165874_25244874_ver1.0_640_480.jpg'
//   },
//   {
//     _id: 'c2',
//     name: 'Paris',
//     img_url:
//       'https://media-cdn.tripadvisor.com/media/photo-s/01/78/91/73/city-hall-baltimore-md.jpg'
//   },
//   {
//     _id: 'c3',
//     name: 'Shanghai',
//     img_url:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Battle_Monument_MD1.jpg/1200px-Battle_Monument_MD1.jpg'
//   },
//   {
//     _id: 'c4',
//     name: 'Bangkok',
//     img_url:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Cylburn_Mansion_Front.JPG/1200px-Cylburn_Mansion_Front.JPG'
//   },
//   {
//     _id: 'c5',
//     name: 'Italy',
//     img_url:
//       'https://previews.123rf.com/images/booblgum/booblgum1804/booblgum180400178/99387995-baltimore-maryland-city-skyline-with-gray-buildings-on-white-vector-illustration-business-travel-and.jpg'
//   }
// ];

const citiesDB = ['Tel Aviv', 'Paris', 'Barcelona', 'Milano', 'Italy'];

async function query(filterBy = {}) {
  return Promise.resolve(citiesDB);
  //   return await httpService.get('city');
}

// async function getById(toyId) {
//   return await httpService.get(`toy/${toyId}`);
// }
