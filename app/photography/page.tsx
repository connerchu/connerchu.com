import fs from 'fs'
import path from 'path'
import Image from 'next/image'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const galleryDir = path.join(process.cwd(), 'public', 'photography')
const SUPPORTED_EXTENSIONS = /\.(png|jpe?g|gif|webp|avif)$/i

type GalleryImage = {
  src: string
  title?: string
  fallbackAlt: string
}

function readMetaTitle(fileName: string): string | undefined {
  const metaPath = path.join(galleryDir, `${fileName}.meta`)
  try {
    const raw = fs.readFileSync(metaPath, 'utf-8')
    const parsed = JSON.parse(raw)
    if (parsed && typeof parsed === 'object' && typeof parsed.Title === 'string') {
      return parsed.Title
    }
  } catch (error) {
    // Missing or malformed metadata is fine; fall back silently.
  }
  return undefined
}

function getGalleryImages(): GalleryImage[] {
  try {
    return fs
      .readdirSync(galleryDir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && SUPPORTED_EXTENSIONS.test(entry.name))
      .map((entry) => {
        const fallbackAlt = entry.name.replace(SUPPORTED_EXTENSIONS, '').replace(/[-_]/g, ' ')
        return {
          src: `/photography/${entry.name}`,
          title: readMetaTitle(entry.name),
          fallbackAlt,
        }
      })
  } catch (error) {
    // Directory does not exist yet or isn't readable; fall back to an empty gallery.
    return []
  }
}

export default function PhotographyPage() {
  const images = getGalleryImages()

  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">Photography</h1>
      <div className="mb-10">
        {images.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {images.map(({ src, title, fallbackAlt }) => (
              <div key={src} className="group relative h-64 overflow-hidden rounded-lg bg-neutral-100/20">
                <Image
                  src={src}
                  alt={title || fallbackAlt || 'Photography piece'}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center transition duration-200 group-hover:scale-105"
                  priority={false}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="pointer-events-none absolute bottom-3 left-3 text-sm font-semibold text-white drop-shadow">
                  {title || fallbackAlt}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-neutral-200 p-6 text-sm text-neutral-500 dark:border-neutral-800">
            No shots yet. Add JPG, PNG, GIF, WEBP, or AVIF files to <code>public/photography</code>.
          </div>
        )}
      </div>
    </section>
  )
}
