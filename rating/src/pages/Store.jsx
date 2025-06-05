import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Stores() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/stores', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStores(res.data);
    };
    fetchStores();
  }, []);

  return (
    <div>
      <h2>Stores List</h2>
      {stores.map((store) => (
        <div key={store._id} style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
          <h4>{store.name}</h4>
          <p>Address: {store.address}</p>
          <p>Avg Rating: {store.avgRating?.toFixed(1) || 'N/A'}</p>
        </div>
      ))}
    </div>
  );
}
