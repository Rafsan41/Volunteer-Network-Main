
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddEvent from './Page/AdminPage/AddEvent/AddEvent';
import Admin from './Page/AdminPage/Admin/Admin';
import UpdateVolunteer from './Page/AdminPage/UpdateVolunteer/UpdateVolunteer';

import Blog from './Page/BlogPage/Blog/Blog';
import Donation from './Page/DonationPage/Donation/Donation';
import Event from './Page/EventsPage/Event/Event';



import Home from './Page/HomePage/Home/Home';
import LogInFrom from './Page/RegisterPage/LogInFrom/LogInFrom';
import Register from './Page/RegisterPage/Register/Register';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/donation',
      element: <Donation />
    },
    {
      path: '/event',
      element: <Event />
    },
    {
      path: '/blog',
      element: <Blog />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/login',
      element: <LogInFrom />
    },
    {
      path: '/admin',
      element: <Admin />
    },
    {
      path: '/admin/volunteerRegisterList',
      element: <Admin />
    },
    {
      path: '/admin/addEvent',
      element: <AddEvent />
    },
    {
      path: '/admin/updateVolunteer/:id',
      element: <UpdateVolunteer></UpdateVolunteer>
    },
  ])

  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
