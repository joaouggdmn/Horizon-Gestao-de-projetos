import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import Container from "../layout/Container";
import ProjectForm from "../project/ProjectForm";
import Message from "../layout/Message";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showPf, setShowPf] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
        })
        .catch((err) => {
          console.error("Erro ao buscar projeto:", err);
        });
    }, 2000);
  }, [id]);

  function toggleProjectForm() {
    // Lógica para mostrar/ocultar o formulário de edição do projeto
    setShowPf(!showPf);
  }

  function editPost(project){
    setMessage(''); // Limpa mensagens anteriores

    // budget validation
    if(project.budget < project.cost){
        setMessage("O orçamento não pode ser menor que o custo do projeto!");
        setType("error");
        return false;
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
    })
    .then((resp) => resp.json())
    .then((data) => {
        setProject(data);
        setShowPf(false);

        setMessage("Projeto atualizado com sucesso!");
        setType("success");
    })
    .catch((err) => console.error("Erro ao atualizar projeto:", err));
  }

  return (
    <>
      {project.name ? (
        <div className="w-full p-8">
          <Container>
            {message && <Message type={type} msg={message} />}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-slate-200">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-slate-200 pb-6">
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Projeto
                  </p>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                    {project.name}
                  </h1>
                </div>
                <button
                  onClick={toggleProjectForm}
                  className="inline-flex items-center justify-center px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow hover:shadow-lg hover:scale-105"
                >
                  {!showPf ? "Editar Projeto" : "Fechar Formulario"}
                </button>
              </div>

              {!showPf ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Categoria
                    </p>
                    <p className="text-lg font-semibold text-slate-900">
                      {project?.category?.name}
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Orcamento total
                    </p>
                    <p className="text-lg font-semibold text-blue-600">
                      R$ {project.budget}
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Total utilizado
                    </p>
                    <p className="text-lg font-semibold text-slate-900">
                      R$ {project.cost}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mt-6 bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <ProjectForm
                    onSubmit={editPost}
                    btnText="Concluir Edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;
