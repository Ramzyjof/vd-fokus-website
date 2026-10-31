import Link from "next/link";
import styles from "./page.module.css";

const actions = [
  {
    number: "01",
    title: "Start with the role’s priorities, not a generic application",
    copy: "A strong application makes it easy to see why your experience fits this specific opening. Read past the job title and look for the outcomes, problems, and relationships the role will own.",
    fix: "Choose the three most important needs in the job description. For each, note one example from your work that shows you can contribute. Use the employer’s language naturally, without copying whole phrases.",
  },
  {
    number: "02",
    title: "Make your results visible",
    copy: "Recruiters scan quickly. Clear outcomes help them understand your impact beyond a list of duties.",
    fix: "Turn “handled customer reports” into a truthful result: “Created a weekly issue tracker that helped the team resolve recurring customer requests sooner.” Add numbers where you can verify them; otherwise explain the change you made.",
  },
  {
    number: "03",
    title: "Tell a concise story about your contribution",
    copy: "A relevant example is memorable when the interviewer can follow the challenge, your action, and the result without getting lost in background detail.",
    fix: "Use a simple flow: situation, task, action, result, and learning. Spend the most time on what you personally did. For example, explain how you prioritised an urgent deadline, coordinated with a teammate, and delivered the work on time.",
  },
  {
    number: "04",
    title: "Show how you work with people",
    copy: "Hiring teams want to picture how you communicate, collaborate, and respond when work becomes difficult. Being memorable does not require being the loudest person in the room.",
    fix: "Prepare one example of handling disagreement respectfully, sharing credit, or adapting your explanation for a different audience. Describe what you listened for and how the team moved forward.",
  },
  {
    number: "05",
    title: "Be curious and specific in the interview",
    copy: "Thoughtful questions show that you are evaluating the opportunity and thinking about how to contribute. They also help you decide whether the role is right for you.",
    fix: "Ask what success looks like in the first six months, what challenge the new hire will tackle first, or how the team works across functions. Connect a question to something you learned during your research.",
  },
  {
    number: "06",
    title: "Keep your story consistent across every touchpoint",
    copy: "Your CV, LinkedIn profile, and interview should reinforce the same facts and direction. Consistency makes your strengths easier to trust.",
    fix: "Review job titles, dates, and achievements across your materials. Tailor the emphasis to each opportunity, but keep the details accurate. Prepare a plain explanation for career transitions or gaps.",
  },
  {
    number: "07",
    title: "Practise until you sound prepared, not rehearsed",
    copy: "Good preparation frees you to listen and respond. Memorised speeches can make it harder to answer the question that was actually asked.",
    fix: "Practise your key examples aloud in short versions. Ask a friend to interrupt with follow-up questions, or record yourself once and notice where your point gets buried. Refine the story, then leave the wording natural.",
  },
];

const whatsapp =
  "https://wa.me/6285121305329?text=Hello%20VD%20Fokus%2C%20I%E2%80%99d%20like%20to%20enquire%20about%20joining%20the%20Career%20Acceleration%20Program%20(CAS).";

export const metadata = {
  title: "How to Stand Out During Hiring | VD Fokus Insights",
  description:
    "Practical ways to stand out during hiring with relevant evidence, clear communication, thoughtful questions, and focused preparation. Explore CAS by VD Fokus.",
};

export default function HowToStandOutDuringHiringPage() {
  return (
    <main className={styles.page}>
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/insights">← Back to Insights</Link>
          <span aria-hidden="true">/</span>
          <span>Career</span>
        </nav>

        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} /> INSIGHTS · CAREER
            </div>
            <h1>
              How to Stand Out During Hiring <span>— with substance, not noise</span>
            </h1>
            <p className={styles.deck}>
              The strongest candidates make their value easy to understand. Use
              focused preparation, relevant proof, and thoughtful communication
              to help an employer picture your contribution.
            </p>
            <div className={styles.byline}>
              <div className={styles.authorMark}>VD</div>
              <div>
                <strong>VD Fokus Career Team</strong>
                <span>Practical guidance for your next career move · 7 min read</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual} aria-label="A focused plan for standing out during hiring">
            <div className={styles.visualGlow} />
            <div className={styles.visualCard}>
              <span className={styles.visualLabel}>YOUR NEXT OPPORTUNITY</span>
              <div className={styles.visualTitle}>Make your contribution clear.</div>
              <div className={styles.visualDivider} />
              <div className={styles.visualLine}><i /> Role-relevant evidence</div>
              <div className={styles.visualLine}><i /> Clear, human answers</div>
              <div className={styles.visualLine}><i /> Purposeful preparation</div>
              <div className={styles.visualFoot}>PREPARE WITH PURPOSE <span>✦</span></div>
            </div>
            <span className={styles.visualOrbit} aria-hidden="true">✦</span>
          </div>
        </header>

        <section className={styles.articleLayout}>
          <aside className={styles.sideNote}>
            <span className={styles.sideNoteLabel}>THE KEY IDEA</span>
            <p>Stand out by making your fit clear, credible, and easy to remember.</p>
            <span className={styles.sideNoteRule} />
            <span className={styles.sideNoteSmall}>Specific examples do more than big claims. Show what you did and why it mattered.</span>
          </aside>

          <article className={styles.article}>
            <p className={styles.intro}>
              Hiring can feel crowded, especially when many applicants have
              similar qualifications. You do not need a gimmick to be noticed.
              You need a clear connection between what the role needs, what you
              have done, and how you would contribute next.
            </p>
            <p>
              That connection is built across your CV, LinkedIn profile, and
              interview. A few focused choices can make your experience easier to
              recognise while helping you decide whether the opportunity fits
              your goals too.
            </p>

            <div className={styles.sectionHeading}>
              <span>01 — GET NOTICED FOR THE RIGHT REASONS</span>
              <h2>Seven practical ways to stand out</h2>
              <p>Use these actions to turn your experience into a clear, credible story.</p>
            </div>

            <div className={styles.reasonList}>
              {actions.map((action) => (
                <section className={styles.reason} key={action.number}>
                  <span className={styles.reasonNumber}>{action.number}</span>
                  <div>
                    <h3>{action.title}</h3>
                    <p>{action.copy}</p>
                    <div className={styles.tryThis}>
                      <span>PUT IT INTO PRACTICE</span>{action.fix}
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <section className={styles.truthCard}>
              <span className={styles.truthLabel}>A HELPFUL REFRAME</span>
              <h2>You are not trying to impress everyone. You are helping the right team see your fit.</h2>
              <p>
                You cannot control every hiring decision, and no single tactic
                guarantees an offer. You can control how clearly and honestly you
                present the value you bring—and whether the role matches what you
                want to build next.
              </p>
            </section>

            <div className={styles.sectionHeading}>
              <span>02 — MAKE PREPARATION A REPEATABLE HABIT</span>
              <h2>A simple plan before your next application</h2>
              <p>Small steps help you prepare without turning the process into a second full-time job.</p>
            </div>
            <ol className={styles.steps}>
              <li><span>1</span><div><strong>Choose your target.</strong><p>Identify the roles where your strengths and experience match the work—not only the title.</p></div></li>
              <li><span>2</span><div><strong>Gather proof.</strong><p>Write down three examples with actions and outcomes. Verify details and numbers before using them.</p></div></li>
              <li><span>3</span><div><strong>Align your materials.</strong><p>Bring your CV and LinkedIn up to date, then tailor the most relevant achievements for the opening.</p></div></li>
              <li><span>4</span><div><strong>Practise the conversation.</strong><p>Say your examples aloud, prepare useful questions, and get feedback on what is clear or still vague.</p></div></li>
            </ol>

            <section className={styles.casCard}>
              <div className={styles.casText}>
                <span className={styles.casEyebrow}>CAREER ACCELERATION PROGRAM · VD FOKUS</span>
                <h2>Ready to make your next move with a plan?</h2>
                <p>
                  CAS gives job seekers structured support to prepare, position,
                  and present themselves with confidence. Work through your
                  professional story with practical guidance from VD Fokus.
                </p>
                <ul>
                  <li><span>✓</span> CV Optimization — clarify your role-relevant achievements</li>
                  <li><span>✓</span> LinkedIn Profile Optimization — align your profile with your goals</li>
                  <li><span>✓</span> Interview Coaching — practise clear examples and confident delivery</li>
                </ul>
                <div className={styles.casActions}>
                  <a className={styles.primaryButton} href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire about joining CAS <span>↗</span></a>
                  <Link className={styles.secondaryLink} href="/career-acceleration">Explore Career Acceleration <span>→</span></Link>
                </div>
                <span className={styles.casFootnote}>Focused preparation helps you present your strengths clearly; hiring decisions remain with the employer.</span>
              </div>
              <div className={styles.casVisual} aria-hidden="true">
                <div className={styles.casRing} />
                <div className={styles.casMonogram}>VD<span>FŌKUS</span></div>
                <div className={styles.casOrbitTag}>YOUR NEXT MOVE <b>↗</b></div>
              </div>
            </section>

            <footer className={styles.articleEnd}>
              <span>YOUR NEXT MOVE STARTS WITH PREPARATION.</span>
              <p>Make your strengths visible—and take the next step with purpose.</p>
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
