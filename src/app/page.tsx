import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-4xl font-bold text-center">CSS Path Research</h1>
        <p className="text-xl">
          Some research into how CSS handles path shapes
        </p>
      </div>
      <CSSPathResearch />
    </main>
  )
}

function CSSPathResearch() {
  const cards = Array.from({ length: 7 }, (_, i) => i + 1);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full">
      {cards.map((card) => (
        <div className="card aspect-[1/1] max-w-[400px]" key={card}>
          <h2 className="text-xl font-bold">Paths - {card}</h2>
          <div className="w-full h-full bg-gray-200"></div>
        </div>
      ))}
    </div>
  )
}
