import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Congratulations from './pages/Congratulations';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/congratulations" element={<Congratulations />} />
    </Routes>
  )
}

export default MainRoutes