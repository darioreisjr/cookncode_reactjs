import { Code2, Heart, Users, Coffee } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre Cook&Code
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Onde a precisão da codificação encontra a criatividade da culinária.
            Eram construindo uma comunidade que celebra tanto a arte da
            programação quanto a alegria de cozinhar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nossa história
            </h2>
            <p className="text-gray-600 mb-6">
              Cook&Code nasceu de uma simples observação: cozinhar e programar
              compartilham muitas semelhanças. Ambos exigem atenção aos
              detalhes, criatividade e vontade de experimentar. Nós criamos isso
              plataforma para reunir entusiastas de tecnologia que amam cozinhar
              e foodies que estão curiosos sobre programação.{" "}
            </p>
            <p className="text-gray-600">
              Hoje, temos orgulho de hospedar uma comunidade vibrante onde
              desenvolvedores e os amantes da comida compartilham receitas,
              dicas e histórias. Nosso único abordagem combina precisão técnica
              com criatividade culinária, criando um espaço onde iniciantes e
              especialistas possam aprender e crescer.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-[#e67e22] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Comunidade</h3>
              <p className="text-gray-600">Mais de 10.000 membros ativos</p>
            </div>
            <div className="text-center">
              <div className="bg-[#3498db] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Code2 className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Receitas</h3>
              <p className="text-gray-600">
                Mais de 5.000 receitas compartilhadas
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#e67e22] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Amor</h3>
              <p className="text-gray-600">100% paixão</p>
            </div>
            <div className="text-center">
              <div className="bg-[#3498db] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Café</h3>
              <p className="text-gray-600">Copos infinitos</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Nossa Missão
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Para criar uma plataforma onde a tecnologia e as artes culinárias se
            cruzam, fomentar uma comunidade que celebra a criatividade, a
            inovação e a alegria de fazer algo maravilhoso, seja com código ou
            ingredientes.
          </p>
        </div>
      </div>
    </div>
  );
}
