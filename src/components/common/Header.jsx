import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-xl font-bold text-black">TechInsight</Link>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-tech-purple">Home</Link>
          <Link to="/categories" className="text-gray-600 hover:text-tech-purple">Categories</Link>
          <Link to="/videos" className="text-gray-600 hover:text-tech-purple">Videos</Link>
          <Link to="/saved" className="text-gray-600 hover:text-tech-purple">Saved</Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/register" className="text-gray-600 hover:text-tech-purple">Register</Link>
        <Link to="/login" className="text-gray-600 hover:text-tech-purple">Login</Link>
        <button className="bg-tech-purple text-white px-4 py-2 rounded">Subscribe</button>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;