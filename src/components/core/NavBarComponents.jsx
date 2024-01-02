import About from './navbaritems/About';
import Home from './navbaritems/Home';

let Components = [{
        name: 'home',
        path: '/',
        component : Home,
        displayName: 'Home'
    },{
        name: 'about',
        path: '/about',
        component : About,
        displayName: 'About'
    }
]

export default Components