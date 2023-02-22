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

  return (
    <>
    <h2>CRUD APP</h2>
    <CrudForm/>
    <CrudTable data={db} />
    </> 
  )
}


export default CrudApp