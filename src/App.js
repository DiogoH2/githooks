import { useState} from "react";


function App() {

  const [repositories, setRepositories] = useState([
    { id: 1, name: 'repo-teste' },
    { id: 2, name: 'repo-2' },
    { id: 3, name: 'repo-3' },
    { id: 4, name: 'repo-4' },
  ]);

  function handleAddRepository(){
    setRepositories([...repositories, {id: Math.random(), name:'novo repo'}])
  }


  return (
    <>
      <ul>
        {repositories.map(repo => <li key={repo.id}>{repo.name}</li>)}
      </ul>
      <button onClick={handleAddRepository}>
        Adicionar Repositorio
      </button> 
    </>
  )
}

export default App;
