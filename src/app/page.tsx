import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-4xl font-bold text-center">Path Research</h1>
        <p className="text-xl">
          Some research into how we handle path shapes in the browser
        </p>
      </div>
      <CSSPathResearch />
    </main>
  )
}

function CSSPathResearch() {
  const cards = [
    {
      title: "CSS Clip Path with Pixel values",
      color: "bg-green-400",
      class: "path1"
    },
    {
      title: "CSS Clip Path with % values",
      color: "bg-red-400",
      class: "path2"
    }
    // add more cards here if needed
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 w-full ">
      {cards.map((card, i) => (
        <div key={i} className="card aspect-[1/1] bg-gray-800 rounded-lg flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold m-2">{card.title}</h2>
          <div className={`w-full h-full ${card.color} ${card.class} cursor-pointer`}></div>
        </div>
      ))}
    </div>
  )
}
