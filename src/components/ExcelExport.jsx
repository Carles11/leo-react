import React from 'react'
import ReactExport from 'react-export-excel'

// import Button from '../css/component/Button'

const ExcelFile = ReactExport.ExcelFile
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn

function ExcelExport(props) {
  return (
    <ExcelFile element={<button>Descarga Excel</button>}>
      <ExcelSheet data={props.schools} name='Colegios'>
        <ExcelColumn label='Colegio' value='name' />
        <ExcelColumn label='Contacto' value='contact' />
        <ExcelColumn label='Dirección' value='address' />
        <ExcelColumn label='CP' value='cp' />
        <ExcelColumn label='Ciudad' value='city' />
        <ExcelColumn label='Teléfono' value='phone' />
        <ExcelColumn label='Email' value='email' />
        <ExcelColumn label='Categorías' value='categories' />
      </ExcelSheet>
    </ExcelFile>
  )
}

export default ExcelExport
