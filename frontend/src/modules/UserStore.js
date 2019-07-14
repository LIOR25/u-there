import UserService from '../services/user.service.js';

export default {
  state: {
    users: []
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
    users(state) {
      return state.users;
    },
    userById: state => id => {
      return state.users.find(user => user._id === id);
    }
    // filterBy(state) {
    //     return state.filterBy
    // },
  },
  mutations: {
    setUsers(state, { users }) {
      state.users = users;
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
    loadUsers(context) {
      UserService.query().then(users =>
        context.commit({ type: 'setUsers', users })
      );
    },
    async loadUsersByCity(context, { filterBy }) {
      let users = await UserService.query(filterBy);
      context.commit({ type: 'setUsers', users });
    }

    // async loadUsersByFilters(context, { filterBy }) {
    //   let users = await UserService.query(filterBy);
    //   context.commit({ type: 'setUsers', users });
    // }
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
