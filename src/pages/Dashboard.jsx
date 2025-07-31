import React, { useEffect, useState } from 'react';
const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setData([{ id: 1, title: 'TP 1 - Introduction au PLC' }]);
    }, 1000);
  }, []);
  return <div><h1>Tableau de bord</h1>{data.map(tp => <div key={tp.id}>{tp.title}</div>)}</div>;
};
export default Dashboard;