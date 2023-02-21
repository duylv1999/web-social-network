import routesConfig from '~/config/routes';
import Home from '~/pages/Home';

// private routes
const privateRoutes = [
    { path: routesConfig.home, component: Home, layout: true },
];

export {  privateRoutes };
