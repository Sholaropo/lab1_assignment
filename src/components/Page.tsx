// src/components/Page.tsx
import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import EmployeeList from "./EmployeeList";
import Footer from "./Footer";

const Page: React.FC = () => {
  return (
    <div>
      <Nav />
      <Header />
      <EmployeeList />
      <Footer />
    </div>
  );
};

export default Page;
