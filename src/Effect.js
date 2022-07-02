import {  useState, useEffect } from "react";


function Effect() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

        const reponse = await fetch('https://api.github.com/users/diogoH2/repos');
        const data = await reponse.json();
        setRepositories(data);
    }

    fetchData()
    .catch(console.error);;

  }, []);

  return (
    <>
    <h1>Use Effect</h1>
      <ul>
        {repositories.map(repo => <li key={repo.id}>{repo.name}</li>)}
      </ul>
    </>
  )
}

export default Effect;
