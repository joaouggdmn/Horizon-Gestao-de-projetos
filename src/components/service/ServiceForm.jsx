import SubmitButton from "../form/Button";
import Input from "../form/Input";
import { useState } from "react";

function ServiceForm({ handleSubmit, textBtn, projectData}) {

    const [service, setService] = useState({});

  function submit(e) {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit}>
      <Input
        type="text"
        text="Nome do Serviço"
        name="name"
        placeholder="Digite o nome do serviço"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Custo do Serviço"
        name="cost"
        placeholder="Digite o valor total do serviço"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Descrição do Serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={handleChange}
      />
      <SubmitButton text={textBtn}/> 
    </form>
  );
}

export default ServiceForm;
