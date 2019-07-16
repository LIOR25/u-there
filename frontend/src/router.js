import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signin from './views/Signin.vue';
import CityView from './views/CityView.vue';
import Inbox from './views/Inbox.vue';
import InboxList from './components/inbox/InboxList.vue';
// import meetingList from './components/meetingList.vue'
import Chat from './components/inbox/Chat.vue';
import UserDetails from './views/UserDetails.vue';
import EditUser from './views/EditUser.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/city/:cityName',
      name: 'city-view',
      component: CityView
    },
    {
      path: '/user/edit/:userId?',
      // path: '/user/edit/:u1',

      name: 'edit-user',
      component: EditUser
    },
    {
      path: '/user/:userId',
      name: 'user-details',
      component: UserDetails
    },
    {
      path: '/inbox/:userId',
      name: 'user-inbox',
      component: Inbox,
      children: [
        { path: 'chats', component: InboxList /* props: {filter: 'inbox'} */ },
        // { path: 'upcoming', component: meetingList, /*props: {filter: 'meetings'}*/}, preparation for meeting object.
        { path: ':chatRoomId', component: Chat }
      ]
    }
  ]
});
