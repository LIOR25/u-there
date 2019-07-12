import CityService from '../services/city.service.js';

export default {
  state: {
    cities: []
    // filterBy: {
    //     name: "",
    //     inStockOnly: false,
    //     types: [],
    //     sortBy: "name",
    //     currPage: 1,
    //     pageCount: 7
    // },
  },
  getters: {
    cities(state) {
      return state.cities;
    }
    // filterBy(state) {
    //     return state.filterBy
    // },
  },
  mutations: {
    setCities(state, { cities }) {
      state.cities = cities;
    }
    //   removeToy(state, { toyId }) {
    //       let idx = state.toys.findIndex(toy => toy._id === toyId)
    //       state.toys.splice(idx, 1)
    //   },
    //   setFilterBy(state, { filterBy }) {
    //       state.filterBy = { ...filterBy }
    //       // console.log('state.filterBy',state.filterBy);
    //   },
    //   changePage(state, {diff}) {
    //       state.filterBy.currPage = state.filterBy.currPage + diff
    //       console.log(state.filterBy.currPage);
    //   },
  },
  actions: {
    loadCities(context) {
      CityService.query().then(cities =>
        context.commit({ type: 'setCities', cities })
      );
    }
    // removeToy(context, { toyId }) {
    //     context.commit({ type: 'removeToy', toyId })
    // },
    // setFilterAndSearch(context, { filterBy }) {
    //     context.commit({ type: 'setFilterBy', filterBy })
    //     ToyService.query(context.state.filterBy)
    //         .then(toys => context.commit({ type: 'setToys', toys }))
    // },
    // changePage(context, { diff }) {
    //     context.commit({ type: 'changePage', diff })
    //     ToyService.query(context.state.filterBy)
    //         .then(toys => context.commit({ type: 'setToys', toys }))
    // }
  }
};
