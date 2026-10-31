import Link from "next/link";
import styles from "./page.module.css";

const signals = [
  {
    number: "01",
    title: "Relevant experience and evidence of results",
    what: "Recruiters look for proof that your experience connects to the role and that your contribution made a difference.",
    show: "Replace “responsible for monthly reporting” with “rebuilt the monthly reporting workflow, cutting preparation time from five days to two.” Use honest numbers when you have them; a clear before-and-after works too.",
  },
  {
    number: "02",
    title: "Communication that makes your thinking easy to follow",
    what: "Clear communication is more than speaking confidently. It helps a hiring team understand your choices, priorities, and impact.",
    show: "For a project question, give a short context, explain the action you personally took, and close with the outcome. Pause, check the question, and ask for clarification when you need it.",
  },
  {
    number: "03",
    title: "Professionalism and sound judgment",
    what: "Preparation, respect for other people’s time, discretion, and accountability all offer clues about how you may work with colleagues and clients.",
    show: "Arrive or join online a few minutes early, keep your examples respectful, own your part in a mistake, and explain what you changed afterward.",
  },
  {
    number: "04",
    title: "Problem-solving, not just problem spotting",
    what: "Recruiters want to see how you make sense of a challenge, decide what to do, and learn from the result.",
    show: "Describe a real obstacle: the options you considered, why you chose one, who you involved, and what happened. A thoughtful trade-off is stronger than claiming you had a perfect answer.",
  },
  {
    number: "05",
    title: "Adaptability and willingness to learn",
    what: "Tools, priorities, and teams change. A useful signal is how you respond when familiar routines no longer fit.",
    show: "Share a time you learned a new system, adjusted to a changing deadline, or used feedback to improve a result. Be specific about what you learned and how you applied it.",
  },
  {
    number: "06",
    title: "Motivation and a considered career direction",
    what: "A recruiter listens for a reasoned connection between the role, what you do well, and the kind of contribution you want to make next.",
    show: "Link one or two responsibilities in the job description to work you have enjoyed or done well. Explain why this is a sensible next step, rather than relying on “I just need a job.”",
  },
  {
    number: "07",
    title: "Team alignment and how you work with others",
    what: "“Culture fit” is best understood as how your working style and values support the team’s needs—not whether you share the same background or personality.",
    show: "Describe how you handled a disagreement, shared credit, supported a teammate, or adapted your communication for a stakeholder. Ask the recruiter how the team collaborates so you can assess fit both ways.",
  },
  {
    number: "08",
    title: "Credibility across your CV, LinkedIn, and interview",
    what: "A coherent career story builds trust. Differences in dates, titles, scope, or claims can leave avoidable questions.",
    show: "Check that employment dates and role titles agree across your CV and LinkedIn. Be ready to explain a career change or gap plainly, and describe achievements at a level you can confidently discuss in follow-up questions.",
  },
];

const whatsapp =
  "https://wa.me/6285121305329?text=Hello%20VD%20Fokus%2C%20I%E2%80%99d%20like%20to%20enquire%20about%20Career%20Acceleration%20Services%20(CAS).";

export const metadata = {
  title: "What Recruiters Actually Look For | VD Fokus Insights",
  description:
    "Learn how to show recruiters your results, communication, judgment, adaptability, motivation, and credibility—and prepare with VD Fokus CAS.",
};

export default function WhatRecruitersLookForPage() {
  return (
    <main className={styles.page}>
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/insights">← Back to Insights</Link>
          <span aria-hidden="true">/</span>
          <span>Recruitment</span>
        </nav>

        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} /> INSIGHTS · RECRUITMENT
            </div>
            <h1>
              What Recruiters Actually Look For <span>— beyond technical skills</span>
            </h1>
            <p className={styles.deck}>
              Your skills may get you considered. Clear evidence, thoughtful
              communication, and a consistent story help a recruiter understand
              the colleague you could become.
            </p>
            <div className={styles.byline}>
              <div className={styles.authorMark}>VD</div>
              <div>
                <strong>VD Fokus Career Team</strong>
                <span>Practical guidance for your next career move · 8 min read</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual} aria-label="Recruiters look for clear evidence and a consistent story">
            <div className={styles.visualGlow} />
            <div className={styles.visualCard}>
              <span className={styles.visualLabel}>THE RECRUITER&apos;S VIEW</span>
              <div className={styles.visualTitle}>Make your value easy to see.</div>
              <div className={styles.visualDivider} />
              <div className={styles.visualLine}><i /> Relevant evidence</div>
              <div className={styles.visualLine}><i /> Thoughtful communication</div>
              <div className={styles.visualLine}><i /> A consistent story</div>
              <div className={styles.visualFoot}>SHOW THE PERSON BEHIND THE SKILLS <span>✦</span></div>
            </div>
            <span className={styles.visualOrbit} aria-hidden="true">✦</span>
          </div>
        </header>

        <section className={styles.articleLayout}>
          <aside className={styles.sideNote}>
            <span className={styles.sideNoteLabel}>THE KEY IDEA</span>
            <p>Recruiters cannot recognise evidence you never make visible.</p>
            <span className={styles.sideNoteRule} />
            <span className={styles.sideNoteSmall}>Show what you did, how you worked, and why it matters for this role.</span>
          </aside>

          <article className={styles.article}>
            <p className={styles.intro}>
              Technical skills matter. They show what you know how to do. But a
              hiring decision also depends on whether a team can understand your
              contribution, trust your account of it, and picture working with
              you. Recruiters look for signals across your application and the
              conversation—not a single perfect answer.
            </p>
            <p>
              The good news: these qualities are not mysterious personality
              tests. You can demonstrate them with relevant examples, clear
              choices, and a career story that holds together. Here are eight
              signals to prepare for, with practical ways to show each one.
            </p>

            <div className={styles.sectionHeading}>
              <span>01 — THE SIGNALS BEHIND A STRONG APPLICATION</span>
              <h2>Eight things recruiters want to understand</h2>
              <p>For every quality, prepare one concrete example that connects to the role.</p>
            </div>

            <div className={styles.signalList}>
              {signals.map((signal) => (
                <section className={styles.signal} key={signal.number}>
                  <span className={styles.signalNumber}>{signal.number}</span>
                  <div>
                    <h3>{signal.title}</h3>
                    <p>{signal.what}</p>
                    <div className={styles.showThis}>
                      <span>HOW TO SHOW IT</span>{signal.show}
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <section className={styles.truthCard}>
              <span className={styles.truthLabel}>A PRACTICAL REFRAME</span>
              <h2>You do not need to sound impressive. You need to be specific.</h2>
              <p>
                A grounded example with a clear result is more persuasive than a
                string of broad claims. Use your own words, give credit fairly,
                and be honest about what you would do differently.
              </p>
            </section>

            <div className={styles.sectionHeading}>
              <span>02 — PUT YOUR STORY TO WORK</span>
              <h2>Make your application and interview reinforce each other</h2>
              <p>A consistent message helps recruiters connect the dots quickly.</p>
            </div>
            <ol className={styles.steps}>
              <li><span>1</span><div><strong>Read for the role’s real priorities.</strong><p>Underline the outcomes, relationships, and challenges mentioned in the job description. Choose examples that address those needs.</p></div></li>
              <li><span>2</span><div><strong>Build a small evidence bank.</strong><p>Write down three situations: a result you achieved, a problem you worked through, and a time you adapted or collaborated. Keep the details truthful and specific.</p></div></li>
              <li><span>3</span><div><strong>Align your CV and LinkedIn.</strong><p>Use consistent dates, titles, and achievement details. Tailor the emphasis to the role while keeping the underlying facts the same.</p></div></li>
              <li><span>4</span><div><strong>Practise a conversation, not a script.</strong><p>Say your examples aloud, keep the context brief, and prepare for follow-up questions. Leave room to listen and respond naturally.</p></div></li>
            </ol>

            <section className={styles.casCard}>
              <div className={styles.casText}>
                <span className={styles.casEyebrow}>CAREER ACCELERATION SERVICES · VD FOKUS</span>
                <h2>Show up ready for the opportunities you want.</h2>
                <p>
                  If it is hard to bring your experience together, CAS gives you
                  a structured way to prepare. Work with VD Fokus to strengthen
                  your written profile and practise how you present your value.
                </p>
                <ul>
                  <li><span>✓</span> CV Optimization — make your relevant results clear</li>
                  <li><span>✓</span> LinkedIn Profile Optimization — keep your professional story aligned</li>
                  <li><span>✓</span> Interview Coaching — practise specific, confident answers</li>
                </ul>
                <div className={styles.casActions}>
                  <a className={styles.primaryButton} href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire about joining CAS <span>↗</span></a>
                  <Link className={styles.secondaryLink} href="/career-acceleration">Explore Career Acceleration <span>→</span></Link>
                </div>
                <span className={styles.casFootnote}>A structured preparation process can help you present your strengths with clarity. Hiring decisions always remain with the employer.</span>
              </div>
              <div className={styles.casVisual} aria-hidden="true">
                <div className={styles.casRing} />
                <div className={styles.casMonogram}>VD<span>FŌKUS</span></div>
                <div className={styles.casOrbitTag}>YOUR NEXT MOVE <b>↗</b></div>
              </div>
            </section>

            <footer className={styles.articleEnd}>
              <span>YOUR EXPERIENCE HAS VALUE.</span>
              <p>Make it clear, credible, and relevant to what comes next.</p>
              <div className={styles.articleLinks}>
                <Link href="/insights">← Explore more insights</Link>
                <Link href="/career-acceleration">Career Acceleration →</Link>
              </div>
            </footer>
          </article>
        </section>
      </div>
    </main>
  );
}
