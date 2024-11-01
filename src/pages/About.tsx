import { Code2, Heart, Users, Coffee } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Cook&Code
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where the precision of coding meets the creativity of cooking. We're
            building a community that celebrates both the art of programming and
            the joy of cooking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Cook&Code was born from a simple observation: cooking and coding
              share many similarities. Both require attention to detail,
              creativity, and a willingness to experiment. We created this
              platform to bring together tech enthusiasts who love to cook and
              foodies who are curious about programming.
            </p>
            <p className="text-gray-600">
              Today, we're proud to host a vibrant community where developers
              and food lovers share recipes, tips, and stories. Our unique
              approach combines technical precision with culinary creativity,
              creating a space where both beginners and experts can learn and
              grow.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-[#e67e22] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">10,000+ active members</p>
            </div>
            <div className="text-center">
              <div className="bg-[#3498db] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Code2 className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Recipes</h3>
              <p className="text-gray-600">5,000+ shared recipes</p>
            </div>
            <div className="text-center">
              <div className="bg-[#e67e22] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Love</h3>
              <p className="text-gray-600">100% passion</p>
            </div>
            <div className="text-center">
              <div className="bg-[#3498db] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Coffee</h3>
              <p className="text-gray-600">Infinite cups</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            To create a platform where technology and culinary arts intersect,
            fostering a community that celebrates creativity, innovation, and
            the joy of making something wonderful—whether it's with code or
            ingredients.
          </p>
        </div>
      </div>
    </div>
  );
}
