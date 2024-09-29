import React from 'react'
import Header from './Header'

const Gaming = () => {
const games = [
  {
    id: 1,
    title: 'The Legend of Zelda: Breath of the Wild',
    image: 'public/images/game1.png',
    downloadLink: '#',
  },
  {
    id: 2,
    title: 'God of War',
    image: 'public/images/game2.jpg',
    downloadLink: '#',
  },
  {
    id: 3,
    title: 'Minecraft',
    image: 'public/images/game3.jpg',
    downloadLink: '#',
  },
  {
    id: 4,
    title: 'Fortnite',
    image: 'public/images/game4.jpg',
    downloadLink: '#',
  },
  {
    id: 5,
    title: 'Apex Legends',
    image: 'public/images/game5.jpg',
    downloadLink: '#',
  },
  {
    id: 6,
    title: 'Call of Duty: Warzone',
    image: 'public/images/game6.jpg',
    downloadLink: '#',
  },
  {
    id: 7,
    title: 'Red Dead Redemption 2',
    image: 'public/images/game7.jpg',

    downloadLink: '#',
  },
  {
    id: 9,
    title: 'Stardew Valley',
    image: 'public/images/game9.jpg',
    downloadLink: '#',
  },
  {
    id: 10,
    title: 'Cyberpunk 2077',
    image: '/images/game10.jpg',
    downloadLink: '#',
  },
  {
    id: 11,
    title: 'Genshin Impact',
    image: '/images/game11.jpg',
    downloadLink: '#',
  },
  {
    id: 12,
    title: 'The Witcher 3: Wild Hunt',
    image: 'public/images/game12.jpg',
    downloadLink: '#',
  },
  {
    id: 13,
    title: 'Super Mario Odyssey',
    image: 'public/images/game13.jpg',
    downloadLink: '#',
  },
  {
    id: 14,
    title: 'Among Us',
    image: 'public/images/game14.jpg',
    downloadLink: '#',
  },
  {
    id: 15,
    title: 'Hades',
    image: 'public/images/game15.jpg',
    downloadLink: '#',
  },
  {
    id: 16,
    title: 'Resident Evil Village',
    image: 'public/images/game16.jpg',
    downloadLink: '#',
  },
  {
    id: 17,
    title: 'Animal Crossing: New Horizons',
    image: 'public/images/game17.jpg',
    downloadLink: '#',
  },
  {
    id: 18,
    title: 'Halo Infinite',
    image: 'public/images/game18.jpg',
    downloadLink: '#',
  },
  {
    id: 19,
    title: 'Doom Eternal',
    image: 'public/images/game19.jpg',
    downloadLink: '#',
  },
  {
    id: 20,
    title: 'Final Fantasy VII Remake',
    image: 'public/images/game20.jpg',
    downloadLink: '#',
  },
];

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Games</h1>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {games.map((game) => (
          <div key={game.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={game.image} alt={game.title} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{game.title}</h2>
              <a href={game.downloadLink} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Download
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
    <Header/>
    </>
  )
}

export default Gaming