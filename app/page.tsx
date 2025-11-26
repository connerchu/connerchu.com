import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Conner Chu
      </h1>
      <p className="mb-4">
        Hi! I am a third-year undergraduate at UC Berkeley studying physics and applied mathematics. 
        Surprisingly, I actually entered university as a biology major interested in neuroscience.
        During that time, I found myself involved with{' '}
        <a
          className="underline"
          href="https://neurotech.studentorg.berkeley.edu/"
          target="_blank"
          rel="noreferrer"
        >
          Neurotech@Berkeley
        </a>{' '}
        where I explored wetware computing. Seeking a more general understanding of reality, I
        switched to physics and applied mathematics in the second half of my first year. The
        following summer, I studied the dynamics of semiconductors using attosecond transient
        absorption spectroscopy under Professor Stephen Leone in the{' '}
        <a
          className="underline"
          href="https://sites.google.com/berkeley.edu/leonegrp"
          target="_blank"
          rel="noreferrer"
        >
          Leone Group
        </a>
        . I then spent time with the{' '}
        <a
          className="underline"
          href="https://www.physics.lbl.gov/lfp/mu2e/"
          target="_blank"
          rel="noreferrer"
        >
          Mu2e Group
        </a>{' '}
        at Lawrence Berkeley National Laboratory under Dr. Richard Bonventre working on detector
        calibration. Most recently, I was at the{' '}
        <a
          className="underline"
          href="https://www.aei.mpg.de/continuouswaves"
          target="_blank"
          rel="noreferrer"
        >
          Max Planck Institute for Gravitational Physics
        </a>{' '}
        in Germany working with Professor Maria Alessandra Papa and Dr. Benjamin Steltner searching
        for continuous gravitational waves. Recently, I've taken interest in applying the formalism 
        of physics to fundamentally understand deep learning.
      </p>
      <div className="mt-4 mb-10">
        <BlogPosts />
      </div>
    </section>
  )
}
