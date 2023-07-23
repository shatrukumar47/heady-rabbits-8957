import { Withdraw, dashboard, history, profile, transactions,subscribe } from "./icons"
export const Menus=[
    {
        id: 1,
        title: "Profile",
        icon: profile,
        link: "/Profile",
    },
    {
        id: 2,
        title: 'Dashboard',
        icon: dashboard,
        link: '/details'
    },
    {
        id: 3,
        title: "Budget",
        icon: transactions,
        link: "/budget",
    },
    {
        id: 4,
        title: "Withdraw",
        icon: Withdraw,
        link: "/withdraw",
    },
    {
        id: 5,
        title: "Subscription",
        icon: subscribe,
        link: "/subscription",
    },
    {
        id: 6,
        title: "Transaction history",
        icon: history,
        link: "/transaction",
    },
    

]