import Input from "../form/Input";
import Select from "../form/Select";
import Button from "../form/Button";

import { useEffect, useState } from "react";

function ProjectForm({ onSubmit, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8"
    >
      {/* Form Header */}
      <div className="border-b border-slate-200 pb-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Novo Projeto</h2>
        <p className="text-slate-600 text-base">
          Preencha os detalhes abaixo para criar um novo projeto
        </p>
      </div>

      {/* Form Fields Container */}
      <div className="space-y-6">
        {/* Project Name */}
        <Input
          type="text"
          text="Nome do Projeto"
          name="name"
          placeholder="Digite o nome do seu projeto"
          handleOnChange={handleChange}
          value={project.name ? project.name : '' }
        />

        {/* Budget */}
        <Input
          type="number"
          text="Orçamento Total"
          name="budget"
          placeholder="0.00"
          handleOnChange={handleChange}
          value={project.budget ? project.budget : '' }
        />

        {/* Category */}
        <Select
          text="Categoria do Projeto"
          name="category_id"
          options={categories}
          handleOnChange={handleCategory}
          value={project.category ? project.category.id : ''}
        />
      </div>

      {/* Submit Button */}
      <div className="border-t border-slate-200 pt-8 flex gap-4">
        <Button
          text="Criar Projeto"
          type="submit"
          className="flex-1 px-8 py-4 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 uppercase tracking-wide"
        />
        <Button
          text="Limpar"
          type="reset"
          className="px-8 py-4 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-all duration-300 uppercase tracking-wide"
        />
      </div>
    </form>
  );
}

export default ProjectForm;
