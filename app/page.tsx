import PortfolioCard from "@/components/portfolio-card/base-card";


export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-[#080b12] font-mono">
      <main className="h-full flex items-center justify-center p-4">
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
      </main>
    </div>
  );
}
