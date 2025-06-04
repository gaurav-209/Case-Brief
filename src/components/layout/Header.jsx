import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, User } from 'lucide-react';
import Button from '../ui/Button';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-2 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center">
              <Scale size={28} className="text-primary-600" />
              <span className="ml-2 text-xl font-serif font-bold text-primary-700">
                CaseBrief
              </span>
            </Link>
          </div>

          <Link to="/login">
            <Button variant="outline" size="sm" className="flex items-center">
              <User size={18} className="mr-1" />
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
