import React, {useState, useEffect} from 'react';

const initialForm = {
    name: "",
    country: "",
    id: null
};

const CrudForm = () => {
    const [form, setForm] = useState(initialForm);


    {/* Controlar cambios */}
    const handleChange = (e) => {}

    {/* Envio del formulario */}
    const handleSubmit = (e) => {}

    {/* Borrar datos form */}
    const handleReset = (e) => {}
  return (
      <>
        <h3>Agregar</h3>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="name" 
            placeholder="Nombre" 
            onChange={handleChange} 
            value={form.name}/>
            <input 
            type="text" 
            name="contellation" 
            placeholder="País" 
            onChange={handleChange} 
            value={form.country}/>
            <input type="submit" value="Enviar" onClick={handleSubmit}/>
            <input type="reset" value="Limpiar" onClick={handleReset}/>
        </form>
      </>
  )
}

export default CrudForm