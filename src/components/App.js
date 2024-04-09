import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const handleChangePage = (pageName) => {
    setPage(pageName);
  };

  return (
    <main>
      <AdminNavBar onChangePage={handleChangePage} />
      {page === "Form" ? (
        <QuestionForm />
      ) : (
        <QuestionList onPageChange={handleChangePage} />
      )}
    </main>
  );
}

export default App;
