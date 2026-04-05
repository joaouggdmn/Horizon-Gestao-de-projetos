import Message from "../layout/Message";
import Container from "../layout/Container";
import { useLocation } from "react-router-dom";
import LinkButton from "../layout/LinkButton";

function Projects() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className="w-full p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-slate-900">Meus Projetos</h1>
        <LinkButton
          to="/newproject"
          text="Criar Projeto"
          style="inline-flex items-center justify-center px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow hover:shadow-lg hover:scale-105"
        />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="flex-start">
        <p>Lista de projetos...</p>
      </Container>
    </div>
  );
}

export default Projects;
