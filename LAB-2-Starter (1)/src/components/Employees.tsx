import React, { useState } from 'react';
import employeeData from '../data/employees.json';
import SearchBar from './SearchBar';

interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
  email: string;
}

const Employees: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = employeeData.filter((employee: Employee) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      employee.name.toLowerCase().includes(searchLower) ||
      employee.department.toLowerCase().includes(searchLower) ||
      employee.position.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '2rem' }}>Employee Directory</h1>
      
      <SearchBar 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Search by name, department, or position..."
      />

      <div style={{ display: 'grid', gap: '1rem' }}>
        {filteredEmployees.map((employee: Employee) => (
          <div
            key={employee.id}
            style={{
              border: '1px solid #e1e5e9',
              borderRadius: '8px',
              padding: '1.5rem',
              backgroundColor: '#fff'
            }}
          >
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>{employee.name}</h3>
            <p style={{ margin: '0 0 0.25rem 0', color: '#6c757d' }}>
              <strong>Position:</strong> {employee.position}
            </p>
            <p style={{ margin: '0 0 0.25rem 0', color: '#6c757d' }}>
              <strong>Department:</strong> {employee.department}
            </p>
            <p style={{ margin: 0, color: '#6c757d' }}>
              <strong>Email:</strong> {employee.email}
            </p>
          </div>
        ))}
        
        {filteredEmployees.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '2rem', 
            color: '#6c757d',
            fontStyle: 'italic'
          }}>
            No employees found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Employees;