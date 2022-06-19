import { Outlet } from 'react-router-dom';
import Directory from 'component/directory/directory.component';

const Home = () => (
  <div>
    <Outlet />
    <Directory />
  </div>
);

export default Home;
