import { Github, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Cook&Code</h3>
            <p className="text-sm">
              Ideias culinárias, codificação de sabores. Junte-se à nossa
              comunidade de especialistas em tecnologia amantes da comida.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Links rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Receitas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Categorias
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Café da manhã
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Prato principal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sobremesas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Bebidas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Newsletter
            </h3>
            <p className="text-sm mb-4">
              Inscreva-se para receber as receitas e dicas de codificação mais
              recentes!
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Insira seu e-mail"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#e67e22]"
              />
              <button className="w-full bg-[#e67e22] text-white py-2 rounded hover:bg-[#d35400] transition-colors">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Cook&Code. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
