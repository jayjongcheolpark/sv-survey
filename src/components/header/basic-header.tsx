import { Link } from 'react-router-dom';
import logo from './logo-blue.png';

export const BasicHeader = () => {
  return (
    <div className="w-full pl-8 py-2 bg-white shadow-sm border-b border-gray-100">
      <Link to="/">
        <img src={logo} alt="logo" style={{ height: '50px' }} />
      </Link>
    </div>
  );
};
