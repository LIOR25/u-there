// import httpService from './http.service.js'

export default {
  query
  // getById,
};

const citiesDB = [
  {
    _id: 'c1',
    name: 'Tel Aviv',
    img_url:
      'https://lonelyplanetimages.imgix.net/a/g/hi/t/8ec64b64e1d0805b1101f6c70c7f5b31-tel-aviv.jpg?sharp=10&vib=20&w=1200'
  },
  {
    _id: 'c2',
    name: 'Paris',
    img_url:
      'https://www.riotgames.com/darkroom/1440/b2b587d91d3c5d2922953ac62fbb2cb8:dfd0d5c2d07f981fb8cda29623b5e54e/paris.jpg'
  },
  {
    _id: 'c3',
    name: 'Barcelona',
    img_url:
      'https://lonelyplanetimages.imgix.net/a/g/hi/t/c81f09d36451a030f40f459726f31a96-barcelona.jpeg?sharp=10&vib=20&w=1200'
  },
  {
    _id: 'c4',
    name: 'Milano',
    img_url:
      'https://www.hotelfenice.it/wp-content/uploads/2017/08/milano-duomo.jpg'
  },
  {
    _id: 'c5',
    name: 'Rome',
    img_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU5j9uG4rUHxSN9fC6KqSOQyjS_qjFxvclRQdOdSOTjVSzu1bm'
  }
];

// const citiesDB = ['Tel Aviv', 'Paris', 'Barcelona', 'Milano', 'Rome'];

// orignal
// async function query(filterBy = {}) {
// return Promise.resolve(citiesDB);
//   return await httpService.get('city');
// }

// async function getById(toyId) {
//   return await httpService.get(`toy/${toyId}`);
// }

// new
async function query(filterBy = {}) {
  if (filterBy['cityName']) {
    return Promise.resolve(
      citiesDB.filter(city => {
        return city.name === filterBy.cityName;
      })
    );
  } else return Promise.resolve(citiesDB);
  //   return await httpService.get('city');
}
