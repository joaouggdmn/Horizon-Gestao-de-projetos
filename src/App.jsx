import { Link } from "react-router-dom";

function App() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-1126px flex-col border-x border-gray-200 text-center">
      <h1 className="my-8 font-['Open_Sans'] text-5xl font-medium tracking-tight text-blue-500 md:my-5 md:text-4xl">
        <div>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/company">Company</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/new-project">New Project</Link>
          </nav>
        </div>
      </h1>
    </main>
  );
}

export default App;
