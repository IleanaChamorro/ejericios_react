import React, {useState, useEffect} from 'react';

const initialForm = {
    name: "",
    country: "",
    id: null
};

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    const [form, setForm] = useState(initialForm);


    //Cuando detecte que la variable "dataToEdit" cambie 
    useEffect(() => {
      //si trae algo, editar con valor nuevo
      if(dataToEdit){
        setForm(dataToEdit);
      }else{
        setForm(initialForm);
      }
    }, [dataToEdit]);
    {/* Controlar cambios */}
    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };

    {/* Envio del formulario */}
    const handleSubmit = (e) => {
      e.preventDefault();

      if(!form.name || !form.country){
        alert("Datos incompletos");
        return;
      }

      if(form.id === null){
        createData(form);
      }else{
        updateData(form);
      }

      handleReset();
    };

    {/* Borrar datos form */}
    const handleReset = (e) => {
      setForm(initialForm);
      setDataToEdit(null);
    };
  return (
      <div>
        <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="name" 
            placeholder="Nombre" 
            onChange={handleChange} 
            value={form.name}/>
            <input 
            type="text" 
            name="country" 
            placeholder="País" 
            onChange={handleChange} 
            value={form.country}/>
            <input type="submit" value="Enviar" onClick={handleSubmit}/>
            <input type="reset" value="Limpiar" onClick={handleReset}/>
        </form>
      </div>
  )
}

export default CrudForm