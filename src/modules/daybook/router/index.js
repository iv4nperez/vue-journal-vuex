export default {

    name:'daybook',
    component: () => import(/* webpackChunkName: "Daybook" */ '@/modules/daybook/layouts/DaybookLayout.vue'),
    children:[
        {
            path:'',
            name:'no-entry',
            component: () => import(/* webpackChunkName: "Daybook=no-entry" */ '@/modules/daybook/views/NoEntrySelected.vue'),
        },
        {
            path:':id',
            name:'entry',
            component: () => import(/* webpackChunkName: "Daybook=entry" */ '@/modules/daybook/views/EntryView.vue'),
        }
    ]

}