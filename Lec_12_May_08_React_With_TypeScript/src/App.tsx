import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import UserForm from './components/UserForm'
import Default from './components/Default';
import UserList from './components/UserList';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/counter">Counter</Link> |{" "}
        <Link to="/form">Form</Link> |{" "}
        <Link to="/userlist">UserList</Link> |{" "}
      </nav>

      {/* Routes */}
      <Routes>

        <Route path="/" element={<Default />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App


