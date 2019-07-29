import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
// import Signin from './views/Signin.vue';
import CityView from './views/CityView.vue';
import Inbox from './views/Inbox.vue';
import MeetingView from './views/MeetingView.vue'
import InboxList from './components/inbox/InboxList.vue';
// import meetingList from './components/meetingList.vue'
import Chat from './components/inbox/Chat.vue';
import UserDetails from './views/UserDetails.vue';
import EditUser from './views/EditUser.vue';
import LoginOrSign from './views/LoginOrSign.vue';

import ActivityView from './views/ActivityView.vue';




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
    // {
    //   path: '/signin',
    //   name: 'signin',
    //   // component: Signin
    //   component: Test
    // },
    {
      path: '/signin',
      name: 'login-or-sign',
      component: LoginOrSign
    },
    {
      path: '/city/:cityName',
      name: 'city-view',
      component: CityView
    },
    {
      path: '/activity/:activityName',
      name: 'activity-view',
      component: ActivityView
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
    },
    {
      path: '/meetings/:userId',
      name: 'user-meetings',
      component: MeetingView
    }
  ]
});
