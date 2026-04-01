import ProjectForm from "../project/ProjectForm";
import { useNavigate } from "react-router-dom";

function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Project created:", data);
        // Redirect to the projects page after successful creation
        navigate("/projects", { message: "Projeto criado com sucesso!" });
      })
      .catch((error) => {
        console.error("Error creating project:", error);
      });
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-slate-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-3">
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Criar Projeto
            </span>
          </h1>
          <p className="text-xl text-slate-600">
            Crie seu projeto para depois adicionar os serviços.
          </p>
        </div>

        {/* Form Section */}
        <ProjectForm onSubmit={createPost} />
      </div>
    </div>
  );
}

export default NewProject;
