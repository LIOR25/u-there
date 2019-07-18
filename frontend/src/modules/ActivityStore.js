import ActivityService from '../services/ActivityService.js';


export default {
    state: {
        activities: []
    },
    getters: {
        activities(state) {
            console.log('state.activities',state.activities);
            
            return state.activities;
        }
    },
    mutations: {
        setActivities(state, { activities }) {
            state.activities = activities;
        }
    },
    actions: {
        async loadActivities(context) {
            let activities = await ActivityService.query()
            console.log('activitystore',activities);
            
            context.commit({ type: 'setActivities', activities })
        },
        // async loadCitiesByFilters(context, { filterBy }) {
        //     let cities = await CityService.query(filterBy);
        //     context.commit({ type: 'setCities', cities });
        // },
    }
};


