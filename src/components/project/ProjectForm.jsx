import Input from "../form/Input";

function ProjectForm() {
  return (
    <form className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
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
        />

        {/* Budget */}
        <div className="flex flex-col space-y-2 w-full">
          <label
            htmlFor="budget"
            className="text-slate-700 font-semibold text-sm uppercase tracking-wide"
          >
            Orçamento Total
          </label>
          <div className="relative">
            <span className="absolute left-4 top-3 text-slate-700 font-semibold">
              R$
            </span>
            <input
              type="number"
              name="budget"
              placeholder="0.00"
              className="w-full pl-10 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 placeholder-slate-400"
            />
          </div>
        </div>

        {/* Category */}
        <div className="flex flex-col space-y-2 w-full">
          <label
            htmlFor="category_id"
            className="text-slate-700 font-semibold text-sm uppercase tracking-wide"
          >
            Categoria do Projeto
          </label>
          <select
            name="category_id"
            className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-slate-900 bg-white cursor-pointer appearance-none pr-10"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3e%3cpolyline points=%226 9 12 15 18 9%22%3e%3c/polyline%3e%3c/svg%3e')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
              backgroundSize: "20px",
              paddingRight: "40px",
            }}
          >
            <option disabled selected>
              Selecione uma categoria
            </option>
            <option value="1">Infraestrutura</option>
            <option value="2">Desenvolvimento</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <div className="border-t border-slate-200 pt-8 flex gap-4">
        <button
          type="submit"
          className="flex-1 px-8 py-4 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 uppercase tracking-wide"
        >
          Criar Projeto
        </button>
        <button
          type="reset"
          className="px-8 py-4 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-all duration-300 uppercase tracking-wide"
        >
          Limpar
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;
