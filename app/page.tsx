export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-pink-50 p-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-6 font-display text-6xl font-bold text-orange-800 lg:text-8xl">
          Dadalicious
        </h1>

        <p className="mb-8 text-xl font-medium text-orange-700 lg:text-2xl">
          Handmade, Egg-Free Cakes Made with Love & Local Ingredients
        </p>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white/80 p-6 shadow-md backdrop-blur-sm">
            <h3 className="mb-2 font-display text-xl font-semibold text-orange-800">
              🍰 Egg-Free Delights
            </h3>
            <p className="text-orange-600">
              Perfect for dietary restrictions without compromising on taste
            </p>
          </div>

          <div className="rounded-lg bg-white/80 p-6 shadow-md backdrop-blur-sm">
            <h3 className="mb-2 font-display text-xl font-semibold text-orange-800">
              🌱 Local Ingredients
            </h3>
            <p className="text-orange-600">
              Fresh, locally sourced ingredients for the best quality
            </p>
          </div>

          <div className="rounded-lg bg-white/80 p-6 shadow-md backdrop-blur-sm">
            <h3 className="mb-2 font-display text-xl font-semibold text-orange-800">
              🎉 Special Celebrations
            </h3>
            <p className="text-orange-600">
              Making your special moments even more memorable
            </p>
          </div>
        </div>

        <div className="space-x-4">
          <button className="rounded-lg bg-orange-600 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-orange-700">
            Order Now
          </button>
          <button className="rounded-lg border-2 border-orange-600 px-8 py-3 font-semibold text-orange-600 transition-colors duration-200 hover:bg-orange-600 hover:text-white">
            View Menu
          </button>
        </div>
      </div>
    </div>
  )
}
