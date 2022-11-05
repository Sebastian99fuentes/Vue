import ContactList from '../components/ContactList';
import AddContact from '../components/AddContact'; 


import { createRouter,createWebHistory } from 'vue-router/dist/vue-router';



const routes =[

    {
        name:'ContacList',
        path:'/',
        component: ContactList
    }
,
    {
        name:'AddContact',
        path:'/add_contact',
        component: AddContact
    },
];

    


  const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;