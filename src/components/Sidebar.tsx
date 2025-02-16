import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Image, Settings, Users, Info } from 'lucide-react';

interface SidebarProps {
  darkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ darkMode }) => {
  const links = [
    { to: '/', icon: Home, label: 'Generator' },
    { to: '/gallery', icon: Image, label: 'Gallery' },
    { to: '/community', icon: Users, label: 'Community' },
    { to: '/settings', icon: Settings, label: 'Settings' },
    { to: '/about', icon: Info, label: 'About' },
  ];

  return (
    <nav className={`w-64 min-h-screen ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <div className="p-4">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center space-x-2 p-3 rounded-lg mb-2 transition-colors ${
                isActive
                  ? darkMode
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-100 text-purple-600'
                  : darkMode
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <link.icon className="w-5 h-5" />
            <span>{link.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Sidebar;