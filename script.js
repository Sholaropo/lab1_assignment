// script.js
document.addEventListener("DOMContentLoaded", () => {
  // 1. Insert current year in footer
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;

  // 2. Fetch employee data from employees.json
  fetch("employees.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load employees.json");
      }
      return response.json();
    })
    .then((departments) => {
      const employeeList = document.getElementById("employee-list");

      // 3. Loop through departments
      departments.forEach((dept) => {
        // Create section for each department
        const section = document.createElement("section");

        // Department name
        const heading = document.createElement("h4");
        heading.textContent = dept.department;
        section.appendChild(heading);

        // Employee list
        const ul = document.createElement("ul");
        dept.employees.forEach((employee) => {
          const li = document.createElement("li");
          li.textContent = employee;
          ul.appendChild(li);
        });

        section.appendChild(ul);
        employeeList.appendChild(section);
      });
    })
    .catch((error) => {
      console.error("Error loading employees:", error);
    });
});
