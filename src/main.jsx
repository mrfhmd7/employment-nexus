import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'

import Main from './components/layout/Main.jsx'
import Home from './components/Home/Home.jsx'
import Error from './components/Error/Error.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import JobDetails from './components/JobDetails/JobDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs />,
        loader: () => fetch('/jobs.json'),
      },
      {
        path: 'blogs',
        element: <Blogs />
      },
      {
        path: 'details/:detailsId',
        element: <JobDetails />,
        loader: () => fetch("/jobs.json")
      },
      {
        path: '*',
        element: <Error/>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
