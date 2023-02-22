import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ([data]) => {
  return (
    <div>
        <h3>Tabla de Datos</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>País</th>
                    <th>Posición</th>
                </tr>
            </thead>
            <tbody>
                {/*En caso de no haber datos */}
                {data.length === 0 ?( 
                <tr>
                    <td colSpan="3">Sin datos</td>
                </tr> 
                ): (
                    data.map(el => <CrudTableRow key={el.id} el={el}/>)
                )}
            </tbody>
        </table>
    </div>
  )
}

export default CrudTable