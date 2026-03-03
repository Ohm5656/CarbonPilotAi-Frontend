import { createBrowserRouter } from 'react-router';
import Dashboard from './pages/Dashboard';
import ESGReport from './pages/ESGReport';
import Pricing from './pages/Pricing';
import Auth from './pages/Auth';
import Onboarding from './pages/Onboarding';
import DataInput from './pages/DataInput';
import Root from './Root';

export const router = createBrowserRouter([
  {
    path: '/auth',
    Component: Auth,
  },
  {
    path: '/onboarding',
    Component: Onboarding,
  },
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: 'esg-report', Component: ESGReport },
      { path: 'pricing', Component: Pricing },
      { path: 'data-input', Component: DataInput },
    ],
  },
]);