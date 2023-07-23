import { Withdraw, dashboard, history, profile, transactions } from "./icons"
export const Menus=[
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/details'
    },
    {
        id: 2,
        title: "Budget",
        icon: transactions,
        link: "/budget",
    },
    {
        id: 3,
        title: "Withdraw",
        icon: Withdraw,
        link: "/withdraw",
    },
    {
        id: 4,
        title: "Subscription",
        icon: history,
        link: "/subscription",
    },
    {
        id: 5,
        title: "Transaction history",
        icon: history,
        link: "/transaction",
    },
    {
        id: 6,
        title: "Profile",
        icon: profile,
        link: "/Profile",
    }

]