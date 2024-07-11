import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RecoilRoot } from 'recoil';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import Listing from './components/Listing.jsx';
import Thankyou from './components/Thankyou.jsx';
import PreviewPage from './components/PreviewPage.jsx';
import PropertyOverview from './components/PropertyOverview.jsx';

const router = createBrowserRouter([
  {
    path: '/DylanEstate/',
    element: <App />,
    children: [
      {
        path: '/DylanEstate/',
        element: <Dashboard />
      },
      {
        path: '/DylanEstate/list',
        element: <Listing />
      },
      {
        path: '/DylanEstate/thankyou',
        element: <Thankyou />
      },
      {
        path: '/DylanEstate/preview',
        element: <PreviewPage />
      },
      {
        path: '/DylanEstate/a',
        element: <PropertyOverview />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>,
)