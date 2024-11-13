"use client";

import { useEffect, useState } from "react";

interface Professor {
  Name: string;
}

export default function Dashboard() {
  const [professors, setProfessors] = useState<Professor[]>([]);

  useEffect(() => {
    console.log("Fetching data from /api/professors...");
    async function fetchData() {
      const response = await fetch("/api/professors");
      const data = await response.json();
      console.log("Data fetched:", data); // Log fetched data
      setProfessors(data);
    }

    fetchData().catch(console.error);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {professors.map((professor, index) => (
          <li key={index}>{professor.Name}</li> // Render name only
        ))}
      </ul>
    </div>
  );
}
