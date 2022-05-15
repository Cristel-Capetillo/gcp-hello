import Customers from './routes/Customers.svelte'
import Customer from './routes/Customer.svelte'
import DefaultPage from './routes/DefaultPage.svelte'

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