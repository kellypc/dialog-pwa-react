import { useQuery } from "@apollo/client";

import INFO_PERSON from "./querys/index";

import "./App.css";

function App() {
  const { loading, error, data } = useQuery(INFO_PERSON);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>an error occurred...</p>;
  }

  return (
    <section className="parent">
      {data.user.results.map((user, index) => (
        <div className="card" key={user.name}>
          <img src={user.picture} alt="Avatar" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <b>name: {user.age}</b>
            </h4>
            <p>
              <b>eyeColor: {user.eyeColor}</b>
            </p>
            <p>
              <b>Company: {user.company}</b>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default App;