import React from 'react';
import ReactDOM from 'react-dom/client';
import Loyaut from './components/Loyaut';
import Form from './components/authentication/Form';
import './css/index.css'
import Main from './components/main/Main';
function App() {
  const [auth, setAuth] = React.useState(null);
  return (
    <Loyaut auth={auth} setAuth={setAuth}>
      {!auth && <Form setAuth={setAuth} />}
      {auth && <Main setAuth={setAuth}  auth={auth}/>}
    </Loyaut>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);