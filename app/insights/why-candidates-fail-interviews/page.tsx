import Link from "next/link";
import styles from "./page.module.css";

const reasons = [
  {
    number: "01",
    title: "Preparation stops at the company website",
    copy: "Knowing what a company does is a start. Strong candidates also connect the role’s priorities to their own experience, the team’s challenges, and the results they can deliver.",
    fix: "Choose two or three priorities from the job description. Prepare a specific example for each one.",
  },
  {
    number: "02",
    title: "Answers describe duties, not outcomes",
    copy: "A list of responsibilities makes it hard to picture your impact. Interviewers need to understand what changed because you were there.",
    fix: "Use a simple structure: the situation, your action, and the result. Add a number or clear outcome where you can.",
  },
  {
    number: "03",
    title: "Good experience gets lost in a long answer",
    copy: "Nerves can turn a useful example into a story with no clear point. The interviewer should not have to search for the part that matters.",
    fix: "Lead with the headline, then give only the context needed to make your decision and contribution clear.",
  },
  {
    number: "04",
    title: "Strengths sound generic",
    copy: "“I’m hardworking” could describe almost anyone. Without evidence, even a genuine strength is difficult to remember or trust.",
    fix: "Pair each strength with a short proof point: what you did, how you approached it, and what it achieved.",
  },
  {
    number: "05",
    title: "Career moves are left unexplained",
    copy: "A career change, employment gap, or short tenure can raise questions when the interviewer has to fill in the story themselves.",
    fix: "Explain the context calmly, focus on what you learned, and show how it connects to the role you want now.",
  },
  {
    number: "06",
    title: "The candidate never asks meaningful questions",
    copy: "An interview is also your chance to understand the role. No questions can make it seem as though you have not pictured yourself in the job.",
    fix: "Ask about success in the first six months, team priorities, or the challenges the new hire will help solve.",
  },
  {
    number: "07",
    title: "Preparation does not become practice",
    copy: "Reading tips can build awareness, but answering aloud under pressure is a different skill. It is hard to notice rushed delivery or unclear examples until you practise.",
    fix: "Rehearse out loud, record a practice answer, or ask someone to run a realistic mock interview and give specific feedback.",
  },
];

const whatsapp =
  "https://wa.me/6285121305329?text=Hello%20VD%20Fokus%2C%20I%E2%80%99d%20like%20to%20learn%20about%20Career%20Acceleration%20Services%20and%20interview%20coaching.";

export const metadata = {
  title: "Why Candidates Fail Interviews | VD Fokus Insights",
  description:
    "Learn why capable candidates lose interview opportunities and how to prepare clearer, stronger answers with practical steps from VD Fokus.",
};

export default function WhyCandidatesFailInterviewsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/insights">← Back to Insights</Link>
          <span aria-hidden="true">/</span>
          <span>Interview</span>
        </nav>

        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} /> INSIGHTS · INTERVIEW
            </div>
            <h1>
              Why Candidates Fail Interviews <span>— and how to change that</span>
            </h1>
            <p className={styles.deck}>
              Being qualified gets you in the room. Clear evidence, thoughtful
              preparation, and confident communication help the interviewer see
              why you are right for the role.
            </p>
            <div className={styles.byline}>
              <div className={styles.authorMark}>VD</div>
              <div>
                <strong>VD Fokus Career Team</strong>
                <span>Practical guidance for your next career move · 7 min read</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual} aria-label="Interview preparation notes">
            <div className={styles.visualGlow} />
            <div className={styles.visualCard}>
              <span className={styles.visualLabel}>YOUR NEXT INTERVIEW</span>
              <div className={styles.visualTitle}>Make your experience easy to see.</div>
              <div className={styles.visualDivider} />
              <div className={styles.visualLine}><i /> Relevant example</div>
              <div className={styles.visualLine}><i /> Clear contribution</div>
              <div className={styles.visualLine}><i /> Measurable outcome</div>
              <div className={styles.visualFoot}>PREPARE WITH PURPOSE <span>✦</span></div>
            </div>
            <span className={styles.visualOrbit} aria-hidden="true">✦</span>
          </div>
        </header>

        <section className={styles.articleLayout}>
          <aside className={styles.sideNote}>
            <span className={styles.sideNoteLabel}>THE KEY IDEA</span>
            <p>Interviewers can only assess the value you make clear.</p>
            <span className={styles.sideNoteRule} />
            <span className={styles.sideNoteSmall}>Make your evidence specific, relevant, and easy to follow.</span>
          </aside>
          <article className={styles.article}>
            <p className={styles.intro}>
              Reaching the interview stage is a real achievement. If the offer
              does not follow, it does not automatically mean you lacked the
              ability. Often, the gap is between what you can do and what the
              interviewer was able to understand in a short conversation.
            </p>
            <p>
              Hiring decisions bring together skills, timing, role needs, and
              many other factors. You cannot control every part of that process.
              You can make your contribution easier to recognise. Start by
              noticing the patterns that most often get in the way.
            </p>

            <div className={styles.sectionHeading}>
              <span>01 — WHAT GETS IN THE WAY</span>
              <h2>Seven interview habits worth changing</h2>
              <p>Small shifts in how you prepare and communicate can make your experience much easier to assess.</p>
            </div>

            <div className={styles.reasonList}>
              {reasons.map((reason) => (
                <section className={styles.reason} key={reason.number}>
                  <span className={styles.reasonNumber}>{reason.number}</span>
                  <div>
                    <h3>{reason.title}</h3>
                    <p>{reason.copy}</p>
                    <div className={styles.tryThis}>
                      <span>TRY THIS</span>{reason.fix}
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <section className={styles.truthCard}>
              <span className={styles.truthLabel}>A HELPFUL REFRAME</span>
              <h2>An interview is a skill you can practise.</h2>
              <p>
                You do not need to become someone else. You need a clear way to
                show how you think, what you have done, and what you can bring
                to this team.
              </p>
            </section>

            <div className={styles.sectionHeading}>
              <span>02 — A BETTER WAY TO PREPARE</span>
              <h2>Turn experience into clear answers</h2>
              <p>Give yourself a repeatable plan before the next conversation.</p>
            </div>
            <ol className={styles.steps}>
              <li><span>1</span><div><strong>Choose your evidence.</strong><p>Pick three examples that match the role: a result you achieved, a challenge you handled, and a time you worked with others.</p></div></li>
              <li><span>2</span><div><strong>Shape the story.</strong><p>Set the scene briefly, explain the action you personally took, then finish with the result and what you learned.</p></div></li>
              <li><span>3</span><div><strong>Say it out loud.</strong><p>Practise concise answers and follow-up questions. Refine what feels unclear instead of memorising a script.</p></div></li>
              <li><span>4</span><div><strong>Close with curiosity.</strong><p>Prepare questions about the role’s priorities and how the team measures success. A thoughtful conversation goes both ways.</p></div></li>
            </ol>

            <section className={styles.casCard}>
              <div className={styles.casText}>
                <span className={styles.casEyebrow}>CAREER ACCELERATION SERVICES · VD FOKUS</span>
                <h2>Ready to make your next interview count?</h2>
                <p>
                  Sometimes it helps to practise with someone who understands
                  how hiring teams assess candidates. CAS offers practical,
                  personalised support to help you present your strengths with
                  more clarity and confidence.
                </p>
                <ul>
                  <li><span>✓</span> CV and LinkedIn profile optimisation</li>
                  <li><span>✓</span> Interview coaching and answer structure</li>
                  <li><span>✓</span> Mock interview practice with actionable feedback</li>
                </ul>
                <div className={styles.casActions}>
                  <a className={styles.primaryButton} href={whatsapp} target="_blank" rel="noopener noreferrer">Talk to us about CAS <span>↗</span></a>
                  <Link className={styles.secondaryLink} href="/career-acceleration">Explore CAS <span>→</span></Link>
                </div>
                <span className={styles.casFootnote}>No promises of a job offer — just focused preparation for the opportunities ahead.</span>
              </div>
              <div className={styles.casVisual} aria-hidden="true">
                <div className={styles.casRing} />
                <div className={styles.casMonogram}>VD<span>FŌKUS</span></div>
                <div className={styles.casOrbitTag}>YOUR NEXT MOVE <b>↗</b></div>
              </div>
            </section>
            <footer className={styles.articleEnd}>
              <span>YOUR EXPERIENCE HAS VALUE.</span>
              <p>Prepare to help the right people see it.</p>
              <Link href="/insights">← Explore more insights</Link>
            </footer>
          </article>
        </section>
      </div>
    </main>
  );
}
