import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em contato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tem dúvidas sobre receitas, codificação ou apenas quer dizer olá?
            Adoraríamos ouvir de você!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Envie-nos uma mensagem
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#e67e22] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#e67e22] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#e67e22] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#e67e22] focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#e67e22] text-white py-3 rounded-lg hover:bg-[#d35400] transition-colors"
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Informações de contato
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#e67e22] text-white p-3 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600 mt-1">
                    Rua da cozinha tecnológica 123
                    <br />
                    Vale do Silício, CA 94025
                    <br />
                    Estados Unidos
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#3498db] text-white p-3 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Telefone</h3>
                  <p className="text-gray-600 mt-1">+55 (11) 99123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#e67e22] text-white p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600 mt-1">contato@cookandcode.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Horário comercial
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>Segunda a sexta: 9h00 - 18h00</p>
                <p>Sábado: 10h00 - 16h00</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
