import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/nominees";

export default function Home() {
  return (
    <main className="min-h-screen pb-8">
      <Header />
      
      {/* Official Nominations Banner */}
      <div className="mx-4 mt-6 mb-4 gradient-border p-[1px] rounded-xl">
        <div className="bg-[#1a1a1a] p-4 rounded-xl text-center">
          <p className="text-sm text-gray-300">
            <span className="text-[#FFD700] font-bold">OFFICIAL NOMINATIONS</span> - 23 Categories
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 space-y-4">
        {categories.map((category, index) => (
          <CategoryCard key={category.name} category={category} index={index} />
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-8 pt-8 border-t border-[#333] text-center">
        <p className="text-gray-500 text-sm">
          98th Academy Awards Official Nominations
        </p>
        <p className="text-[#B8860B] text-xs mt-2">
          Sinners leads with 10 nominations
        </p>
      </footer>
    </main>
  );
}
