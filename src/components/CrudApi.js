import React, {useState} from 'react'
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const CrudApi = () => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
      //nuevo valor para id de data
      data.id = Date.now();
      //Traer lo que ya tiene la base de datos y lo combina con spread operator con data
      setDb([...db, data]);
  };


  const updateData = (data) => {
      //el id del elemento es identico a lo que se recibe se remplaza con nuevo data, sino el elemento se conserva igual
      let newData = db.map(el => el.id === data.id ? data : el);
      setDb(newData);
  };

  const deleteData = (id) => {
  let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id ${id}?`
    );
    if(isDelete){
        //filtrar y quitar el registro que traiga el id
        let newData = db.filter(el => el.id !== id);
        setDb(newData);
    }else{
        return;
    }
  };

  return (
    <>
    <h2>CRUD APP</h2>
    <article className="grid-1-2">

    <CrudForm createData={createData} 
    updateData={updateData} 
    dataToEdit={dataToEdit} 
    setDataToEdit={setDataToEdit}
    />
    <CrudTable 
    data={db}
    setDataToEdit={setDataToEdit} 
    deleteData={deleteData}/>
    </article>
    </> 
  )
}


export default CrudApi