import PortfolioCard from "@/components/portfolio-card/base-card";

export default function Home() {
  return (
    <div>
      <main>
        <div className="min-h-screen bg-[#080b12] flex items-center justify-center p-6 font-mono">
          {/* Grid background */}
          {/*
          <div
            className="fixed inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#1a2035 1px, transparent 1px), linear-gradient(90deg, #1a2035 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              opacity: 0.35,
            }}
          />
          */}
          <PortfolioCard />
        </div>
      </main>
    </div>
  );
}
