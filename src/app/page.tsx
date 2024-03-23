"use client";

export default function Home() {
  const areas = [
    "Vijaynagar",
    "Jayanagar",
    "Rajajinagar",
    "VV Puram",
    "Shivajinagar",
    "JP Nagar",
  ];
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-col items-center p-24">
        <h1 className="font-extrabold text-foreground text-8xl">blrthindi</h1>
        <p className="my-4 text-xl text-muted-foreground">
          Iconic <span className="font-bold">thindi</span> places in bengaluru
        </p>
      </section>
      {/* <section className="py-24 flex flex-col items-center">
        <h2 className="text-lg">Select the areas that you want to explore</h2>
        <div className="py-8 grid grid-cols-4 gap-4">
          {areas.map((area) => (
            <div
              className="px-8 py-16 hover:bg-gray-100 border text-center rounded-lg border-slate-600"
              key={area}>
              {area}
            </div>
          ))}
        </div>
      </section> */}
    </main>
  );
}
