import Image from "next/image"
import Link from "next/link"
import { readdir } from "node:fs/promises"
import path from "node:path"
import { Button } from "@/components/ui/button"

const GALLERY_DIR = path.join(process.cwd(), "public", "gallery")
const GALLERY_FILE_REGEX = /\.(avif|gif|jpe?g|png|webp)$/i

async function getGalleryItems() {
  try {
    const fileNames = await readdir(GALLERY_DIR)
    const imageNames = fileNames
      .filter((fileName) => GALLERY_FILE_REGEX.test(fileName))
      .sort((left, right) => left.localeCompare(right))

    return imageNames.map((fileName, index) => ({
      src: `/gallery/${fileName}`,
      alt: `The Sweet Spot gallery image ${index + 1}`,
      label: `Gallery ${index + 1}`,
    }))
  } catch {
    return []
  }
}

export default async function GalleryPage() {
  const galleryItems = await getGalleryItems()

  return (
    <div className="flex flex-col">
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/brownies.jpg"
            alt="Sweet Spot gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/70 to-charcoal-dark/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <span className="inline-block bg-rose/80 backdrop-blur-sm text-white text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
            The Sweet Spot Gallery
          </span>
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-4">
            Sweet Moments
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Behind the scenes and fresh bakes from our kitchen.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-6xl">
          {galleryItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {galleryItems.map((item, index) => (
                <div
                  key={`${item.label}-${index}`}
                  className="group hover-lift relative overflow-hidden rounded-2xl border border-rose-light/60 min-h-[260px]"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/70 via-charcoal-dark/20 to-transparent" />
                  <p className="absolute left-4 bottom-4 text-sm font-medium tracking-wide text-white">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center rounded-2xl border border-rose-light/70 bg-card p-10">
              <p className="text-charcoal-light mb-6">No gallery images found yet.</p>
              <Button asChild>
                <Link href="/">Back Home</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
