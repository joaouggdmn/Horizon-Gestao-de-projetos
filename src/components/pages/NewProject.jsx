import ProjectForm from "../project/ProjectForm";

function NewProject() {
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
        <ProjectForm/>
      </div>
    </div>
  );
}

export default NewProject;
