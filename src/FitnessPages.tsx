import { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

const coachingEmail = "leedale@proton.me";
const hourlyRate = 40;
const weeklyRate = 36;
const onlineHourlyRate = hourlyRate * 0.75;
const onlineWeeklyRate = weeklyRate * 0.75;
const packages = [
  {
    name: "Weight loss / diet improvement",
    weeks: 8,
    description: "Build a healthier relationship with everyday food choices and a routine you can keep.",
    includes: ["Review your eating habits and set realistic goals", "Practical support with balanced meals and portion awareness", "Weekly progress reviews and achievable changes"]
  },
  {
    name: "Running and strength training plan",
    weeks: 8,
    description: "Bring your running and strength work together in a plan that fits your starting point and schedule.",
    includes: ["A personalised weekly running and strength plan", "Coaching on technique, pacing and progression", "Plan adjustments as your confidence and fitness grow"]
  },
  {
    name: "Couch to 5K",
    weeks: 9,
    description: "Start with manageable run-walk sessions and work towards running 5K at your own pace.",
    includes: ["A progressive nine-week run-walk plan", "One coached session plus independent runs each week", "Support with pacing, recovery and building confidence"]
  },
  {
    name: "Habit forming and mindset coaching",
    weeks: 6,
    description: "Turn good intentions into repeatable actions, with practical support to help you stay consistent.",
    includes: ["Clear goals and a realistic weekly action plan", "Tools for habit tracking and handling setbacks", "Weekly accountability and reflection"]
  }
];

export function FitnessPricingPage() {
  return (
    <div className="fitness-landing">
      <section className="fitness-page-intro fitness-section">
        <p className="fitness-kicker">Coaching in Colchester & online</p>
        <h1>Invest in yourself.<br /><em>One week at a time.</em></h1>
        <p>Choose a single session or a focused weekly package. All options are available face to face in Colchester or online, with one-to-one support built around you.</p>
      </section>
      <section className="fitness-single-session fitness-section" aria-labelledby="single-session-heading">
        <div><p className="fitness-kicker">Start with a single session</p><h2 id="single-session-heading">Your goals. A clear next step.</h2><p>A 60-minute personal training or coaching session to work on your goals, review your routine or get practical guidance. No package commitment.</p></div>
        <div>
          <div className="fitness-rate-option"><strong>Face to face · Colchester</strong><p className="fitness-price">£{hourlyRate}<span> / hour</span></p></div>
          <div className="fitness-rate-option"><strong>Online coaching · 25% less</strong><p className="fitness-price">£{onlineHourlyRate}<span> / hour</span></p></div>
          <NavLink className="fitness-button" to="/contact?interest=Single%20session">Enquire about a session <span aria-hidden="true">→</span></NavLink>
        </div>
      </section>
      <section className="fitness-services fitness-section" aria-labelledby="packages-heading">
        <div className="fitness-section-heading">
          <div><p className="fitness-kicker">A little consistency goes a long way</p><h2 id="packages-heading">Find your focus.</h2></div>
          <p>One 60-minute session each week: £{weeklyRate} per week in Colchester or £{onlineWeeklyRate} online. Online coaching is 25% cheaper. Both packages save 10% against single sessions in the same format.</p>
        </div>
        <div className="fitness-package-grid">
          {packages.map((plan) => (
            <article className="fitness-package" key={plan.name}>
              <p className="fitness-package-duration">{plan.weeks} weeks · {plan.weeks} sessions</p>
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <div className="fitness-rate-option">
                <strong>Face to face · Colchester</strong>
                <p className="fitness-price">£{weeklyRate}<span> / week</span></p>
                <p className="fitness-package-total">£{weeklyRate * plan.weeks} total · Save £{(hourlyRate - weeklyRate) * plan.weeks}</p>
              </div>
              <div className="fitness-rate-option">
                <strong>Online coaching · 25% less</strong>
                <p className="fitness-price">£{onlineWeeklyRate}<span> / week</span></p>
                <p className="fitness-package-total">£{onlineWeeklyRate * plan.weeks} total · Save £{(onlineHourlyRate - onlineWeeklyRate) * plan.weeks}</p>
              </div>
              <p>One 60-minute session each week.</p>
              <ul>{plan.includes.map((item) => <li key={item}>{item}</li>)}</ul>
              <NavLink className="fitness-button" to={`/contact?interest=${encodeURIComponent(plan.name)}`} aria-label={`Enquire about ${plan.name}`}>Enquire about this package <span aria-hidden="true">→</span></NavLink>
            </article>
          ))}
        </div>
        <p className="fitness-package-note">Prices are in GBP and cover the full stated programme, with one session per week. Package savings shown are compared with booking the same number of single sessions in the same format. Online hourly and package prices are 25% lower than face-to-face prices. We’ll agree your session times, location or video format, payment arrangements and cancellation terms before booking.</p>
      </section>
      <section className="fitness-final-cta">
        <p className="fitness-kicker">Let’s find your starting point</p><h2>Not sure which to choose?</h2>
        <p>Tell me what you’d like to achieve and I’ll help you find a suitable option.</p>
        <NavLink className="fitness-button" to="/contact">Ask me a question <span aria-hidden="true">→</span></NavLink>
      </section>
    </div>
  );
}

export function FitnessContactPage({ bookingUrl }: { bookingUrl: string }) {
  const [searchParams] = useSearchParams();
  const requestedInterest = searchParams.get("interest") || "General enquiry";
  const interests = ["General enquiry", "Single session", ...packages.map((plan) => plan.name)];
  const [interest, setInterest] = useState(interests.includes(requestedInterest) ? requestedInterest : "General enquiry");
  const [format, setFormat] = useState("Face to face in Colchester");
  const emailHref = `mailto:${coachingEmail}?subject=${encodeURIComponent(`Coaching enquiry: ${interest}`)}&body=${encodeURIComponent(`Hi Lee,\n\nI'm interested in: ${interest}.\nMy preferred coaching format is: ${format}.\n\nMy goals or questions:\n\n\nMy availability:\n\n\nThanks,\n`)}`;

  return (
    <div className="fitness-landing">
      <section className="fitness-page-intro fitness-section">
        <p className="fitness-kicker">Questions welcome</p><h1>Let’s talk about<br /><em>your next step.</em></h1>
        <p>Ask a question, enquire about a package or tell me what you’d like to work towards. I offer face-to-face coaching in Colchester, Essex, and online coaching wherever you are.</p>
      </section>
      <section className="fitness-contact-grid fitness-services fitness-section" aria-labelledby="email-heading">
        <div>
          <p className="fitness-kicker">Get in touch with Lee</p><h2 id="email-heading">Start with an email.</h2>
          <p>No need to have a plan yet. Tell me a little about your goals, your availability and whether you’d prefer to meet in Colchester or work together online.</p>
          <a className="fitness-contact-address fitness-text-link" href={`mailto:${coachingEmail}`}>{coachingEmail}</a>
          <h3 className="fitness-contact-subheading">Prefer a conversation?</h3>
          <p>Book a free initial video consultation to talk through your goals and the coaching options.</p>
          <a className="fitness-text-link" href={bookingUrl} target="_blank" rel="noreferrer">Book a free consultation <span aria-hidden="true">↗</span></a>
        </div>
        <div className="fitness-enquiry">
          <h3>What can I help with?</h3>
          <p>Choose an option to prepare your email, then add your questions in your email app.</p>
          <label htmlFor="coaching-interest">I’m interested in</label>
          <select id="coaching-interest" value={interest} onChange={(event) => setInterest(event.target.value)}>{interests.map((item) => <option key={item}>{item}</option>)}</select>
          <label htmlFor="coaching-format">Preferred coaching format</label>
          <select id="coaching-format" value={format} onChange={(event) => setFormat(event.target.value)}><option>Face to face in Colchester</option><option>Online coaching</option><option>Not sure yet</option></select>
          <a className="fitness-button" href={emailHref}>Open email enquiry <span aria-hidden="true">↗</span></a>
          <p className="fitness-email-help">This opens a draft in your email app. Add your message and press send there. If it doesn’t open, copy {coachingEmail} into your preferred email service.</p>
        </div>
      </section>
    </div>
  );
}
