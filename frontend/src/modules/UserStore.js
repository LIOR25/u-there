import UserService from '../services/user.service.js';

export default {
  state: {
    users: [],
    loggedUser: null
  },
  getters: {
    users(state) {
      return state.users;
    },
    userById: state => id => {
      return state.users.find(user => user._id === id);
    },
    loggedUser(state) {
      return state.loggedUser;
    }
  },
  mutations: {
    setUsers(state, { users }) {
      state.users = users;
    },

    addUser(state, { addedUser }) {
      state.users.unshift(addedUser);
    },
    updateLoggedInUser(state, { loggedInUser }) {
      state.loggedUser = loggedInUser;

      UserService.setLoggedUserSessionStorage(loggedInUser);
    },
    updateLoggedInUserId(state, { loggedInUser }) {
      state.loggedInUserId = loggedInUser._id;
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

    async loadUsersByActivity(context, { filterBy }) {
      let users = await UserService.query(filterBy);

      context.commit({ type: 'setUsers', users });
    },

    async updateUser(context, { user }) {
      const updatedUser = await UserService.update(user);
      console.log('store', user.newImg);

      return updatedUser;
    },
    async login(context, { userCred }) {
      const loggedInUser = await UserService.login(userCred);

      context.commit({ type: 'updateLoggedInUser', loggedInUser });

      context.commit({ type: 'updateLoggedInUserId', loggedInUser });

      return loggedInUser;
    },
    async signup(context, { userCred }) {
      const addedUser = await UserService.signup(userCred);

      context.commit({ type: 'addUser', addedUser });

      context.commit({ type: 'updateLoggedInUser', loggedInUser: addedUser });

      context.commit({ type: 'updateLoggedInUserId', loggedInUser: addedUser });

      return addedUser;
    },
    logout(context) {
      UserService.logout();

      context.commit({ type: 'updateLoggedInUser', loggedInUser: null });
    },
    async checkLoggedUser(context) {
      const loggedInUser = await UserService.getLoggedUser();
      if (loggedInUser) {
        context.commit({ type: 'updateLoggedInUser', loggedInUser });
        return loggedInUser;
      } else {
        context.commit({ type: 'updateLoggedInUser', loggedInUser: null });
        return loggedInUser;
      }
    },
    async addReview(context, { theReview }) {
      const addedReview = await UserService.addReview(theReview);
      console.log('addedreview', addedReview);

      return addedReview;
    }
  }
};
