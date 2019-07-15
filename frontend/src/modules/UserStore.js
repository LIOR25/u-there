import UserService from '../services/user.service.js';

export default {
  state: {
    users: [],
    loggedInUser: 'u1'

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
    },
    // updateUser(state, { updatedUser }) {
    //   const idx = state.users.findIndex(user => user._id === updatedUser._id);
    //   state.users.splice(idx, 1, updatedUser);
    // },

    updateUser(state, { updatedUser }) {
      const idx = state.users.findIndex(
        user => loggedInUser === updatedUser._id
      );
      state.users.splice(idx, 1, updatedUser);
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
  },

  updateUser(context, { user }) {
    return UserService.update(user).then(updatedUser => {
      context.commit({ type: 'updateUser', updatedUser });
      return updatedUser;
    });
  } // removeToy(context, { toyId }) {
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
};
