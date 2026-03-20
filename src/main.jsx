import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Company from "./components/pages/Company.jsx";
import Contact from "./components/pages/Contact.jsx";
import NewProject from "./components/pages/NewProject.jsx";
import Container from "./components/layout/Container.jsx";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <Container>
          <nav className="flex gap-4 p-4">
            <Link to="/home">Home</Link>
            <Link to="/company">Company</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/new-project">New Project</Link>
          </nav>
        </Container>
      </header>

      <main className="flex-1">
        <Container>
          <Outlet />
        </Container>
      </main>

      <footer className="border-t bg-slate-50 p-4">
        <Container>
          <p className="text-sm text-slate-600">
            Footer fixo em todas as páginas
          </p>
        </Container>
      </footer>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "home", element: <Home /> },
      { path: "company", element: <Company /> },
      { path: "contact", element: <Contact /> },
      { path: "new-project", element: <NewProject /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
