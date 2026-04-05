import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-slate-900">Meus Projetos</h1>
        <LinkButton
          to="/new-project"
          text="Criar Projeto"
          style="inline-flex items-center justify-center px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow hover:shadow-lg hover:scale-105"
        />
      </div>
      {message && <Message type="success" msg={message} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project?.name}
              budget={project?.budget}
              category={project?.category?.name}
              key={project?.id}
            />
          ))}
      </div>
    </div>
  );
}

export default Projects;
