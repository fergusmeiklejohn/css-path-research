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
    },
    {
      title: "CSS Clip Path with px & % values",
      color: "bg-blue-400",
      class: "path3"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 w-full ">
      {cards.map((card, i) => (
        <div key={i} className="card aspect-[1/1] bg-gray-800 rounded-lg flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold m-2">{card.title}</h2>
          <div className={`w-full h-full ${card.color} ${card.class} cursor-pointer`}></div>
        </div>
      ))}
      <div className="aspect-[16/4] bg-gray-800 rounded-lg flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold m-2 mx-auto text-center">
          <a href="https://gsap.com/resources/SVG" target="_blank" rel="noopener noreferrer" className="text-center text-white hover:text-blue-400">{`Complex animations with GSAP
          https://gsap.com/resources/SVG`}</a>
        </h2>
      </div>
      <div className="aspect-[16/10] bg-gray-800 rounded-lg flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold m-2">Animating origin with GSAP</h2>
        <div className={`w-full h-full`}>
          <Image src="/origin-animation-gsap.gif" alt="examples of origin animation with GSAP" width={1200} height={679} />
        </div>
      </div>
      <div className="aspect-[16/9] bg-gray-800 rounded-lg flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold m-2">Animating shapes with GSAP</h2>
        <div className={`w-full h-full`}>
          <Image src="/animating-shapes-gsap.gif" alt="examples of origin animation with GSAP" width={1200} height={493} />
        </div>
      </div>
    </div>
  )
}


