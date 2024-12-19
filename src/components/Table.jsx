import { Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import '../styles/App.css';


const TableData = ({ data }) => {

    const headerTable = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'duracion', headerName: 'Duración', width: 130 },
        { field: 'estado', headerName: 'Estado', width: 130 },
        { field: 'fecha', headerName: 'Fecha y Hora', width: 200 },
   ];


  return (
    <Paper sx={{ height: 'min-height', width: '100%', display: 'flex', marginTop: '12px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <DataGrid
          rows={data} 
          columns={headerTable}
          pageSize={10}
        />
    </Paper>
  );
};

export default TableData;