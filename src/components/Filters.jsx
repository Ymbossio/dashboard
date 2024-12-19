import React from 'react'
import { FormControl, Select, MenuItem, Tab } from '@mui/material';


const FiltersData = ({setFilter, setData, filter,allData}) => {

    const handdleCahngeFilterStatus = (e) => {
        let value = e.target.value;
        setFilter(value);
    
        if (value === "Todos") {
          
          setData(allData);
        } else {
          
          const filteredData = allData.filter((item) => item.estado === value);
          setData(filteredData);
        }
    };

  return (
    <>
        <FormControl fullWidth>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            sx={{ width: '100%', maxWidth: 250, margin: 'auto' }}
            value={filter}
            onChange={handdleCahngeFilterStatus}
            >
            <MenuItem value="Todos">Todos</MenuItem>
            <MenuItem value="Exitosa">Exitosa</MenuItem>
            <MenuItem value="Fallida">Fallida</MenuItem>
            <MenuItem value="En Proceso">En Proceso</MenuItem>
            </Select>
        </FormControl>
    </>
  )
}

export default FiltersData
