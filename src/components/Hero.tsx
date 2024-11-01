import { Code2, Utensils } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-[#e67e22] to-[#d35400] text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <div className="flex justify-center space-x-4">
            <Utensils className="h-12 w-12" />
            <Code2 className="h-12 w-12" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Where Culinary Arts Meet Programming
          </h1>

          <p className="text-xl text-gray-100">
            Cook&Code was born from the idea that cooking and coding share the
            same creative spirit. Both require precision, creativity, and a dash
            of innovation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#e67e22] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Explore Recipes
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Start Cooking
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg className="fill-current text-white" viewBox="0 0 1440 120">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
}
