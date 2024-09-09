import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import SingleStudent from './pages/SingleStudent.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

// protected route
// dynamic route
// nested route

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "",
            element: <h1>Person 1</h1>
          },
          {
            path: "person2",
            element: <h1>Person 2</h1>
          },
          {
            path: "person3",
            element: <h1>Person 3</h1>
          },
        ]
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "service",
        element: <Services />
      },
      {
        path: "singleStudent/:id",
        element: <SingleStudent/>
      },
      {
        path: "*",
        element: <h1>Not found!</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)






// layout ki file root banaka outlet ka componenet render krwana haa
// router ka variable banayaa jiska undar createBroweserRouter ka function call krka aik array of object dedi
// router provider ka component call krwaka uska undar poori app pass krdi.