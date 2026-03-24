function ProjectForm() {
  return (
    <form>

      <div>
        <input type="text" placeholder="Nome do Projeto" />
      </div>

      <div>
        <input type="number" placeholder="Orçamento total do Projeto" />
      </div>

      <div>
        <select name="category_id">
          <option disabled selected>
            Selecione a categoria
          </option>
          <option value="1">Infraestrutura</option>
          <option value="2">Desenvolvimento</option>
        </select>
      </div>

      <div>
        <input type="submit" value="Criar Projeto"/>
      </div>

    </form>
  );
}

export default ProjectForm;
