import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Experience from "./pages/experience.jsx";
import Projects from "./pages/projects.jsx";
import Home from "./pages/home.jsx";
import Skills from "./pages/skills.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/skills",
    element: <Skills/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/experience",
    element: <Experience/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/projects",
    element: <Projects/>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>{/* <App /> */}</RouterProvider>
  </StrictMode>
);
