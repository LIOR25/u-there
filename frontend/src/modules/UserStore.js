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
    addUser(state, { addedUser }) {
      state.users.unshift(addedUser);
      console.log(state.users);
    },
    updateUser(state, { updatedUser }) {
      const idx = state.users.findIndex(
        user => loggedInUser === updatedUser._id
      );
      state.users.splice(idx, 1, updatedUser);
    }
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
    },
    // async addUser(context, { user }) {
    //   let addedUser = await UserService.add(user);
    //   context.commit({ type: 'addUser', addedUser });
    //   console.log(addedUser);
    //   console.log(state.users);
    // },
    addUser(context, { user }) {
      //test
      // UserService.query
      //

      UserService.add(user).then(addedUser => {
        context.commit({ type: 'addUser', addedUser });
      });
    },
    updateUser(context, { user }) {
      return UserService.update(user).then(updatedUser => {
        context.commit({ type: 'updateUser', updatedUser });
        return updatedUser;
      });
    }
  }
};
