import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Conner Chu
      </h1>
      <p className="mb-4">
        Hi! I am a third-year undergraduate at UC Berkeley studying physics and applied math. 
        I actually entered university as a biology major interested in neuroscience.
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
        switched to physics and applied math, where I've been fortunate enough to partake in research on and off campus.
        <br /> 
        <br />
        In the{' '}
        <a
          className="underline"
          href="https://sites.google.com/berkeley.edu/leonegrp"
          target="_blank"
          rel="noreferrer"
        >
          Leone Group,
        </a>{' '}
        I've spent time studying the dynamics of semiconductors using attosecond transient absorption spectroscopy. 
        I've also worked on detector calibration with the{' '}
        <a
          className="underline"
          href="https://www.physics.lbl.gov/lfp/mu2e/"
          target="_blank"
          rel="noreferrer"
        >
          Mu2e Group
        </a>{' '}
        at Lawrence Berkeley National Laboratory. Most recently, I was at the{' '}
        <a
          className="underline"
          href="https://www.aei.mpg.de/continuouswaves"
          target="_blank"
          rel="noreferrer"
        >
          Max Planck Institute for Gravitational Physics
        </a>{' '}
        in Germany searching for continuous gravitational waves. 
        I've also taken interest in deep learning, where I work with a small group at the{' '}
        <a
          className="underline"
          href="https://redwood.berkeley.edu/"
          target="_blank"
          rel="noreferrer"
        >
          Redwood Center for Theoretical Neuroscience
        </a>{' '}
        trying to understand neural networks via kernel methods.
      </p>
    </section>
  )
}
