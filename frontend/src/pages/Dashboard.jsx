import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/asteroids/feed")
      .then(res => setAsteroids(res.data));
  }, []);

  return (
    <select>
      {asteroids.map(a => (
        <div key={a.id}>
            <span>{a.name} - Risk: {a.risk}</span>
            <button>Add</button>
            </div>
      ))}
    </select>
  );
}