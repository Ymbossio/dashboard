
export const getData = ({ setAllData, setData }) => {
    fetch('/Data.json')
      .then((response) => response.json())
      .then((data) => {
        setAllData(data);
        setData(data);
      })
    .catch((error) => console.error('Error fetching data:', error));
};