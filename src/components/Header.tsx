import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import CartButton from "./CartButton";
import CartDrawer from "./CartDrawer";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/public/LogoCook&Code.svg"
              alt="Logo do projeto cook&code"
              width={150}
              height={150}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-[#e67e22] transition-colors"
            >
              Início
            </Link>
            <Link
              to="/recipes"
              className="text-gray-700 dark:text-gray-300 hover:text-[#e67e22] transition-colors"
            >
              Receitas
            </Link>
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-[#e67e22] transition-colors"
            >
              Sobre
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-[#e67e22] transition-colors"
            >
              Contato
            </Link>
            <ThemeToggle />
            <div onClick={() => setIsCartOpen(true)}>
              <CartButton />
            </div>
            <button className="bg-[#e67e22] text-white px-4 py-2 rounded-full hover:bg-[#d35400] transition-colors">
              Adicionar receita
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <div onClick={() => setIsCartOpen(true)}>
              <CartButton />
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Início
            </Link>
            <Link
              to="/recipes"
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Receitas
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Sobre
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Contato
            </Link>
            <button className="w-full text-left px-4 py-2 text-[#e67e22] hover:bg-gray-100 dark:hover:bg-gray-800">
              Adicionar receita
            </button>
          </nav>
        )}
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
