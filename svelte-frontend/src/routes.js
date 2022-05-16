import Customers from './components/Customers.svelte'
import Customer from './components/Customer.svelte'
import DefaultPage from './components/DefaultPage.svelte'

export default [{
        path: '/customers',
        component: Customers
    },
    {
        path: '/customers/:id',
        component: Customer
    },
    {
        path: '*',
        component: DefaultPage
    }
]