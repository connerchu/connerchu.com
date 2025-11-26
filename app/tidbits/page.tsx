import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Tidbits',
  description: 'Notes, essays, and experiments from Conner Chu.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Tidbits</h1>
      <div className="mb-10">
        <BlogPosts />
      </div>
    </section>
  )
}
