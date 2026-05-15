import SubmitButton from "../form/Button";
import Input from "../form/Input";
import MoneyInput from "../form/MoneyInput";
import { useState } from "react";

function ServiceForm({ handleSubmit, textBtn, projectData }) {
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
    <form
      onSubmit={submit}
      className="mt-4 grid grid-cols-1 gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg"
    >
      <Input
        type="text"
        text="Nome do Serviço"
        name="name"
        placeholder="Digite o nome do serviço"
        handleOnChange={handleChange}
      />
      <MoneyInput
        text="Custo do Serviço"
        name="cost"
        placeholder="0.00"
        handleOnChange={handleChange}
        value={service.cost ? service.cost : ""}
      />
      <Input
        type="text"
        text="Descrição do Serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={handleChange}
      />
      <div className="flex justify-end">
        <SubmitButton
          text={textBtn}
          className="inline-flex items-center justify-center rounded-lg bg-linear-to-r from-blue-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:from-blue-600 hover:to-cyan-600 hover:shadow-lg"
        />
      </div>
    </form>
  );
}

export default ServiceForm;
