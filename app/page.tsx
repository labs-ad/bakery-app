import { Button } from '@/components/ui/Button'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-display text-primary-700 mb-6 text-6xl font-bold lg:text-8xl">
          Makkar Bakers
        </h1>

        <p className="text-primary-600 mb-8 text-xl font-medium text-balance lg:text-2xl">
          Handmade, Egg-Free Cakes Made with Love
        </p>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="card group">
            <h3 className="font-display text-primary-700 group-hover:text-primary-600 mb-3 text-xl font-semibold transition-colors">
              🍰 Egg-Free Delights
            </h3>
            <p className="leading-relaxed text-neutral-600">
              Perfect for dietary restrictions without compromising on taste
            </p>
          </div>

          <div className="card group">
            <h3 className="font-display text-primary-700 group-hover:text-primary-600 mb-3 text-xl font-semibold transition-colors">
              🌱 Local Ingredients
            </h3>
            <p className="leading-relaxed text-neutral-600">
              Fresh, locally sourced ingredients for the best quality
            </p>
          </div>

          <div className="card group">
            <h3 className="font-display text-primary-700 group-hover:text-primary-600 mb-3 text-xl font-semibold transition-colors">
              🎉 Special Celebrations
            </h3>
            <p className="leading-relaxed text-neutral-600">
              Making your special moments even more memorable
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="lg">
            Order Now
          </Button>
          <Button variant="secondary" size="lg">
            View Menu
          </Button>
        </div>
      </div>
    </div>
  )
}
