import React, {useState} from 'react'
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDB = [
    {
        id: 1,
        name: 'Lionel Messi',
        country: 'Arg'
    },
    {
        id: 2,
        name: 'Cristiano Ronaldo',
        country: 'Portugal'
    },
    {
        id: 3,
        name: 'Kylian Mbappé',
        country: 'France'
    },
    {
        id: 4,
        name: 'Erling Haaland',
        country: 'United Kingdom'
    },
    {
        id: 5,
        name: 'Antoine Griezmann',
        country: 'France'
    }
];

export const CrudApp = () => {
  const [db, setDb] = useState(initialDB);
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


export default CrudApp