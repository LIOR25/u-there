import UserService from '../services/user.service.js';

export default {
  state: {
    users: [],
    loggedUser: UserService.getLoggedUser()

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
    },
    loggedUser(state) {
      // console.log(state.loggedUser);

      return state.loggedUser;
    }
    // filterBy(state) {
    //     return state.filterBy
    // },
  },
  mutations: {
    setUsers(state, { users }) {
      state.users = users;
      // console.log(state.users);
    },
    // updateUser(state, { updatedUser }) {
    //   const idx = state.users.findIndex(user => user._id === updatedUser._id);
    //   state.users.splice(idx, 1, updatedUser);
    // },
    addUser(state, { addedUser }) {
      state.users.unshift(addedUser);
      // console.log(state.users);
    },
    updateLoggedInUser(state, { loggedInUser }) {
      state.loggedUser = loggedInUser;

      UserService.setLoggedUserSessionStorage(loggedInUser);
    },
    updateLoggedInUserId(state, { loggedInUser }) {
      state.loggedInUserId = loggedInUser._id;
      // console.log(state.loggedInUserId);
    }
    // updateUser(state, { updatedUser }) {
    //   const idx = state.users.findIndex(
    //     user => loggedInUser === updatedUser._id
    //   );
    //   state.users.splice(idx, 1, updatedUser);
    // }
  },
  actions: {
    loadUsers(context) {
      UserService.query().then(users =>
        context.commit({ type: 'setUsers', users })
      );
    },
    async loadUsersByCity(context, { filterBy }) {
      let users = await UserService.query(filterBy);
      // console.log(users);

      context.commit({ type: 'setUsers', users });
    },

    // async loadActivitiesByCity(context, {city}) {
    //   console.log('cityyyyy', city)
    //   let activities = await UserService.queryActivities(city);
    //   // console.log(users);

    //   context.commit({ type: 'setActivities', activities });
    // },

    // async  loadActivitiesByCity(context, { filterBy }) {
    //   let users = await UserService.query(filterBy);
    //   // console.log(users);

    //   context.commit({ type: 'setUsers', users });
    // },

    async loadUsersByActivity(context, { filterBy }) {
      let users = await UserService.query(filterBy);
      // console.log(users);

      context.commit({ type: 'setUsers', users });
    },

    // async  loadActivityByUsers(context, { filterBy }) {
    //   let users = await UserService.queryBy(filterBy);
    //   // console.log(users);

    //   context.commit({ type: 'setUsers', users });
    // },

    // async addUser(context, { user }) {
    //   let addedUser = await UserService.add(user);
    //   context.commit({ type: 'addUser', addedUser });
    //   console.log(addedUser);
    //   console.log(state.users);
    // },
    // addUser(context, { user }) {
    //   UserService.signup(user).then(addedUser => {
    //     context.commit({ type: 'addUser', addedUser });
    //     //login user right here after signup
    //     // context.commit({ type: 'updateLoggedInUser', addedUser });
    //   });
    // },
    async updateUser(context, { user }) {
      const updatedUser = await UserService.update(user);
      console.log('store', user.newImg);

      // console.log(updatedUser);
      // this.loadUsers;
      // console.log(context.state);
      return updatedUser;
    },
    async login(context, { userCred }) {
      const loggedInUser = await UserService.login(userCred);
      // console.log(loggedInUser);

      context.commit({ type: 'updateLoggedInUser', loggedInUser });

      context.commit({ type: 'updateLoggedInUserId', loggedInUser });

      return loggedInUser;
    },
    async signup(context, { userCred }) {
      const addedUser = await UserService.signup(userCred);
      // console.log(addedUser);

      //added commit to store and logged in user.
      //and id to the chat store

      context.commit({ type: 'addUser', addedUser });

      //login user right here after signup
      context.commit({ type: 'updateLoggedInUser', loggedInUser: addedUser });

      //here update for chat loged user id
      context.commit({ type: 'updateLoggedInUserId', loggedInUser: addedUser });

      return addedUser;
    },
    logout(context) {
      UserService.logout();

      context.commit({ type: 'updateLoggedInUser', loggedInUser: null });
    },
    async addReview(context, { theReview }) {
      const addedReview = await UserService.addReview(theReview);
      console.log('addedreview', addedReview);

      // console.log(updatedUser);
      // this.loadUsers;
      // console.log(context.state);
      return addedReview;
    }
  }
};
