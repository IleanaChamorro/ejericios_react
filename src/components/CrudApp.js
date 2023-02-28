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


  const updateData = (data) => {};

  const deleteData = (id) => {};

  return (
    <>
    <h2>CRUD APP</h2>
    <CrudForm createData={createData} 
    updateData={updateData} 
    dataToEdit={dataToEdit} 
    setDataToEdit={setDataToEdit}
    />
    <CrudTable 
    data={db}
    setDataToEdit={setDataToEdit} 
    deleteData={deleteData}/>
    </> 
  )
}


export default CrudApp