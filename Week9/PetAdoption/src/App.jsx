import { useState } from 'react';
import './App.css';
import Form from '../components/Form';
import Table from '../components/Table.jsx';
import Header from '../components/Header.jsx';

function App() {
  const [submissions, setSubmissions] = useState([]);
  console.log(submissions);
  
  
  function addNewSubmissions(formData){
    const newSubmission = {
      adopterName: formData.adopterName,
      email: formData.email,
      phone: formData.phone,
      petType: formData.petType,
      breed: formData.breed
    };
    setSubmissions([...submissions,
      newSubmission
    ])
  }

  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <section className="form-column">
          <Form addNewSubmissions = {addNewSubmissions}/>
        </section>

        <section className="table-column">
          <Table submissions = { submissions }/>
        </section>
      </main>
    </div>
  )
}

export default App;
