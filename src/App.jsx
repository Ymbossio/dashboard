import { useEffect, useState } from 'react';
import './styles/App.css';
import TableData from './components/Table'; 
import FiltersData from './components/Filters';
import { getData } from './services/FetchingData'; 

function App() {
  const [data, setData] = useState([]); 
  const [allData, setAllData] = useState([]); 
  const [filter, setFilter] = useState('Todos'); 

  useEffect(() => {
    getData({ setAllData, setData });
  }, []);

  return (
    <>
      <h1>Dashboard 📱</h1>
      <div className='filter'>
        <FiltersData setFilter={setFilter} filter={filter} setData={setData} allData={allData} />
      </div>
      <TableData data={data} />
      
      <h4>Yovanis Bossio</h4>
    </>
  );
}

export default App;
