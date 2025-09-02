// src/components/EmployeeList.tsx
import React, { useEffect, useState } from "react";

interface Department {
  department: string;
  employees: string[];
}

const EmployeeList: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    fetch("/employees.json")
      .then((res) => res.json())
      .then((data: Department[]) => setDepartments(data))
      .catch((err) => console.error("Error fetching employees:", err));
  }, []);

  return (
    <main>
      <h2>Employee Directory</h2>
      <div id="employee-list">
        {departments.map((dept) => (
          <section key={dept.department}>
            <h4>{dept.department}</h4>
            <ul>
              {dept.employees.map((employee) => (
                <li key={employee}>{employee}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
};

export default EmployeeList;
