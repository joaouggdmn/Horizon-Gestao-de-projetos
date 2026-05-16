import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import Container from "../layout/Container";
import ProjectForm from "../project/ProjectForm";
import Message from "../layout/Message";
import ServiceForm from "../service/ServiceForm";
import ServiceCard from "../service/ServiceCard";
import formatCurrency from "../../utils/formatCurrency";

import { v4 as uuidv4 } from "uuid";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [services, setServices] = useState([]);
  const [showPf, setShowPf] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();
  const [showSf, setShowSf] = useState(false);

  const toNumber = (value) => {
    const normalized = String(value ?? "")
      .replace(/\./g, "")
      .replace(",", ".");
    const parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : 0;
  };

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
          setServices(data.services || []);
        })
        .catch((err) => {
          console.error("Erro ao buscar projeto:", err);
        });
    }, 2000);
  }, [id]);

  function editPost(project) {
    setMessage(""); // Limpa mensagens anteriores

    // budget validation
    if (project.budget < project.cost) {
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

  function toggleProjectForm() {
    // Lógica para mostrar/ocultar o formulário de edição do projeto
    setShowPf(!showPf);
  }
  function toggleServiceForm() {
    // Lógica para mostrar/ocultar o formulário de adição de serviço
    setShowSf(!showSf);
  }

  function createService() {
    setMessage(""); // Limpa mensagens anteriores
    if (!project.services || project.services.length === 0) {
      setMessage("Adicione os dados do servico antes de salvar.");
      setType("error");
      return false;
    }
    //last service
    const lastService = project.services[project.services.length - 1];
    lastService.id = uuidv4();

    const LastServiceCost = lastService.cost;
    const newCost = toNumber(project.cost) + toNumber(LastServiceCost);
    // maximum value validation
    if (newCost > toNumber(project.budget)) {
      setMessage("Orçamento ultrapassado, verifique o valor do serviço!");
      setType("error");
      project.services.pop();
      return false;
    }

    //add service cost to project total cost
    project.cost = newCost;

    // update project
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // exibir os serviços
        setProject(data);
        setServices(data.services || []);
        setShowSf(false);
        setMessage("Serviço adicionado com sucesso!");
        setType("success");
      })
      .catch((err) => {
        console.error("Erro ao adicionar serviço:", err);
      });
  }

  function removeService(id, cost) {
    const servicesUpdated = project.services.filter(
      (service) => service.id !== id,
    );

    const projectUpdated = {
      ...project,
      services: servicesUpdated,
      cost: toNumber(project.cost) - toNumber(cost),
    };

    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectUpdated),
    })
      .then((resp) => resp.json())
      .then(() => {
        setProject(projectUpdated);
        setServices(servicesUpdated);
        setMessage("Serviço removido com sucesso!");
        setType("success");
      });
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
                      {formatCurrency(project.budget)}
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Total utilizado
                    </p>
                    <p className="text-lg font-semibold text-slate-900">
                      {formatCurrency(project.cost)}
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
            <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Serviços
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Adicione um serviço
                  </h2>
                  <p className="text-sm text-slate-500">
                    Cadastre novos serviços para atualizar o custo do projeto.
                  </p>
                </div>
                <button
                  onClick={toggleServiceForm}
                  className="inline-flex items-center justify-center px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow hover:shadow-lg"
                >
                  {!showSf ? "Adicionar Serviço" : "Fechar"}
                </button>
              </div>
              {showSf && (
                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-6">
                  <ServiceForm
                    handleSubmit={createService}
                    textBtn="Adicionar"
                    projectData={project}
                  />
                </div>
              )}
              <div className="mt-10">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    Serviços cadastrados
                  </h3>
                  <span className="text-sm font-semibold text-slate-500">
                    {services.length} item(s)
                  </span>
                </div>
                <div className="mt-6">
                  {services.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                      {services.map((service) => (
                        <ServiceCard
                          id={service.id}
                          name={service.name}
                          cost={service.cost}
                          description={service.description}
                          key={service.id}
                          handleRemove={removeService}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                      <p className="text-sm text-slate-600">
                        Nao ha servicos cadastrados.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;
