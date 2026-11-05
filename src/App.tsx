import { useEffect, useMemo, useState, type ReactNode } from "react";
import { BrowserRouter, Navigate, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import awsLogo from "./images/AWS-CloudPractitioner.png";
import azureLogo from "./images/azure-developer-associate-600x600.png";
import azureFundamentalsLogo from "./images/azure-fundamentals.png";
import gcpLogo from "./images/gcp-ace.png";
import citpLogo from "./images/pin-citp-professional.jpg";
import linuxLogo from "./images/linuxplus-logo.png";
import networkLogo from "./images/networkplus-logo.png";
import securityLogo from "./images/securityplus-logo.png";
import togafLogo from "./images/togaf.png";
import quantumLogo from "../images/basics-of-quantum-information.png";
import imperialLogo from "../images/imperialcollegemlai.png";
import ietLogo from "./images/iet.svg";
import stravaLogo from "./images/strava.svg";
import runningImage from "./images/running.jpg";
import homeAiCodingImage from "./images/home-ai-coding.jpg";
import homeFitnessImage from "./images/home-fitness.jpg";
import homeSoftwareDevImage from "./images/home-software-dev.jpg";
import homeMindsetImage from "./images/home-mindset.jpg";
import homeGoalsImage from "./images/home-goals.jpg";
import ouLogo from "./images/ou.png";
import enuLogo from "./images/HarrietENU_Logo_866x245.png";
import pdfIcon from "./images/pdf.png";
import wordIcon from "./images/word.png";
import bcsLogo from "./images/bcs.png";
import microsoftLogo from "./images/microsoft.png";
import mcsdLogo from "./images/mcsd.png";
import mcsaLogo from "./images/mcsa.png";
import cimspaLogo from "./images/CIMSPA-500_980978b27712b32266cf2aeaba4191ba.png";
import origymLogo from "./images/focus-awards-logo.png";
import leesArcadeImage from "../images/leesarcade.jpg";
import leeRunningImage from "./images/lee-dale-running.jpg";
import { FitnessContactPage, FitnessPricingPage } from "./FitnessPages";

type SiteVariant = "tech" | "fitness";

type SiteConfig = {
  variant: SiteVariant;
  brandName: string;
  brandSubtitle: string;
  navItems: Array<{ to: string; label: string }>;
  showGitHub: boolean;
};

type Project = {
  name: string;
  url: string;
  summary: string;
};

type CertificationLogo = {
  name: string;
  src: string;
};

type QualificationItem = {
  name: string;
  institution: string;
  logo: string;
};

type AcademicWorkItem = {
  title: string;
  href: string;
  icon: string;
  kind: "PDF" | "Word";
  prominent?: boolean;
};

type CredentialItem = {
  title: string;
  logo: string;
  organisation: string;
};

type Lesson = {
  title: string;
  minutes: number;
  description: string;
  videoPlaceholderUrl: string;
};

type CourseModule = {
  title: string;
  summary: string;
  lessons: Lesson[];
};

type Course = {
  slug: string;
  title: string;
  subtitle: string;
  level: "Beginner" | "Intermediate";
  outcomes: string[];
  modules: CourseModule[];
};

type ModuleContentBlock = {
  overview: string[];
  actionPlan: string[];
  coachingNotes: string[];
};

type AuthUser = {
  name: string;
  email: string;
};



const profileTagline =
  "Lead Software Engineer | MSc Cyber Security | CITP | .NET | AI Coding | Software Design | Quantum Computing";

const profileDescription =
  "Lead Software Engineer with extensive experience building business-critical .NET, cloud and integration platforms, including 6 years leading a full-stack engineering team in the UK energy sector. Strong hands-on background in C#, .NET, Azure, event-driven architecture, DevOps, application security and modernisation. Proven record of reducing vendor dependency, improving deployment maturity, mentoring engineers and delivering systems aligned to commercial goals.\n\nI also help teams integrate AI coding tools and assistants into their development workflow to deliver working software faster, with measurable productivity gains and secure engineering practices.";

const calendlyBookingUrl = "https://calendly.com/leedale-proton/30min";
const techBookingUrl = calendlyBookingUrl;
const fitnessBookingUrl = calendlyBookingUrl;

const aiHashtags = ["#aicoding", "#copilot", "#softwaredesign", "#architecture", "#claudecode", "#devops"];
const fitnessHashtags = ["#running", "#strength", "#mindset", "#consistency", "#coaching", "#habits"];
const mindsetHashtags = ["#mindset", "#goals", "#achievement", "#discipline"];

const homeVisualThemes: CertificationLogo[] = [
  { name: "AI coding", src: homeAiCodingImage },
  { name: "Fitness", src: homeFitnessImage },
  { name: "Software development", src: homeSoftwareDevImage },
  { name: "Mindset", src: homeMindsetImage },
  { name: "Goals", src: homeGoalsImage }
];

const sideProjects: Project[] = [
  {
    name: "ObjectDiffNet",
    url: "https://github.com/leedale1981/ObjectDiffNet",
    summary: "A focused .NET library for object comparison and change tracking patterns."
  },
  {
    name: "infosec",
    url: "https://github.com/leedale1981/infosec",
    summary: "Security-oriented experiments, notes and practical tooling ideas."
  },
  {
    name: "pqc-support-checker",
    url: "https://github.com/leedale1981/pqc-support-checker",
    summary: "A utility project exploring post-quantum cryptography capability checks."
  },
  {
    name: "SpaceBlaster",
    url: "https://github.com/leedale1981/SpaceBlaster",
    summary: "A game project combining software craft with experimentation."
  },
  {
    name: "property-ai",
    url: "https://github.com/leedale1981/property-ai",
    summary: "AI-assisted property domain exploration and automation concepts."
  },
  {
    name: "example-keylogger-windows-sdk",
    url: "https://github.com/leedale1981/example-keylogger-windows-sdk",
    summary: "Low-level Windows SDK experimentation for educational security work."
  },
  {
    name: "imperial-aiml-portfolio-project",
    url: "https://github.com/leedale1981/imperial-aiml-portfolio-project",
    summary: "Academic AI/ML portfolio work with an engineering focus."
  }
];

const academicQualifications: QualificationItem[] = [
  {
    name: "PhD student — Secure coding with AI assistants (in progress)",
    institution: "Edinburgh Napier University",
    logo: enuLogo
  },
  {
    name: "MSc Advanced Security and Digital Forensics",
    institution: "Edinburgh Napier University",
    logo: enuLogo
  },
  {
    name: "BSc (Hons) Computing & Physics",
    institution: "The Open University",
    logo: ouLogo
  }
];

const academicWork: AcademicWorkItem[] = [
  {
    title: "Dissertation: Dissertation_Final",
    href: "/documents/Dissertation_Final.pdf",
    icon: pdfIcon,
    kind: "PDF",
    prominent: true
  },
  {
    title: "Analysis of Post Quantum Cryptography",
    href: "/documents/Analysis%20of%20Post%20Quantum%20Cryptography.pdf",
    icon: pdfIcon,
    kind: "PDF"
  },
  {
    title: "Incident Response and Malware Analysis",
    href: "/documents/Incident%20Response%20and%20Malware%20Analysis%20.docx",
    icon: wordIcon,
    kind: "Word"
  },
  {
    title: "Managing Security Risks in Rapid or Agile Development",
    href: "/documents/Managing%20the%20Security%20Risks%20inherent%20in%20Rapid%20or%20Agile%20System%20Development%20Processes.docx",
    icon: wordIcon,
    kind: "Word"
  },
  {
    title: "Perimeter Network Security",
    href: "/documents/Perimeter%20Network%20Security.docx",
    icon: wordIcon,
    kind: "Word"
  },
  {
    title: "Research on Current Anti-Virus and EDR Evasion Techniques",
    href: "/documents/Research%20on%20Current%20Anti-Virus%20and%20EDR%20Evasion%20Techniques.pdf",
    icon: pdfIcon,
    kind: "PDF"
  }
];

const credentialsAndMemberships: CredentialItem[] = [
  {
    title: "CompTIA Security+, Network+, Linux+",
    logo: securityLogo,
    organisation: "CompTIA"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    logo: awsLogo,
    organisation: "Amazon Web Services"
  },
  {
    title: "Microsoft Certified Azure Developer Associate",
    logo: azureLogo,
    organisation: "Microsoft"
  },
  {
    title: "Google Certified Cloud Engineer Associate",
    logo: gcpLogo,
    organisation: "Google Cloud"
  },
  {
    title: "TOGAF 9 Certified",
    logo: togafLogo,
    organisation: "The Open Group"
  },
  {
    title: "MCSD, MCSA",
    logo: microsoftLogo,
    organisation: "Microsoft"
  },
  {
    title: "Chartered IT Professional and Member of the British Computer Society (CITP MBCS)",
    logo: bcsLogo,
    organisation: "British Computer Society"
  },
  {
    title: "Member of the Institution of Engineering and Technology (MIET)",
    logo: ietLogo,
    organisation: "Institution of Engineering and Technology"
  }
];

const techCertifications: CertificationLogo[] = [
  { name: "AWS Certified Cloud Practitioner", src: awsLogo },
  { name: "Microsoft Certified Azure Developer Associate", src: azureLogo },
  { name: "Microsoft Certified Azure Fundamentals", src: azureFundamentalsLogo },
  { name: "Google Certified Cloud Engineer Associate", src: gcpLogo },
  { name: "TOGAF 9 Certified", src: togafLogo },
  { name: "CompTIA Security+", src: securityLogo },
  { name: "CompTIA Network+", src: networkLogo },
  { name: "CompTIA Linux+", src: linuxLogo },
  { name: "CITP MBCS", src: citpLogo },
  { name: "BCS Member", src: bcsLogo },
  { name: "MCSD", src: mcsdLogo },
  { name: "MCSA", src: mcsaLogo },
  { name: "IBM Quantum Computing", src: quantumLogo },
  { name: "Imperial College AI/ML", src: imperialLogo },
];



const siteConfigs: Record<SiteVariant, SiteConfig> = {
  tech: {
    variant: "tech",
    brandName: "Lee Dale",
    brandSubtitle: "Lead Software Engineer | Cyber Security",
    navItems: [
      { to: "/", label: "Home" },
      { to: "/academic", label: "Academic" }
    ],
    showGitHub: true
  },
  fitness: {
    variant: "fitness",
    brandName: "Lee Dale Performance",
    brandSubtitle: "Personal training in Colchester & online coaching",
    navItems: [
      { to: "/", label: "Home" },
      { to: "/pricing", label: "Pricing" },
      { to: "/contact", label: "Contact" }
    ],
    showGitHub: false
  }
};

const azureAuthConfig = {
  authorityBase: import.meta.env.VITE_AZURE_B2C_AUTHORITY_BASE as string | undefined,
  clientId: import.meta.env.VITE_AZURE_B2C_CLIENT_ID as string | undefined,
  signInPolicy: import.meta.env.VITE_AZURE_B2C_SIGNIN_POLICY as string | undefined,
  signUpPolicy: import.meta.env.VITE_AZURE_B2C_SIGNUP_POLICY as string | undefined,
  redirectUri: (import.meta.env.VITE_AZURE_B2C_REDIRECT_URI as string | undefined) || `${window.location.origin}/courses`
};

const authStorageKey = "fitness.auth.user";
const enrollmentStorageKey = "fitness.course.enrollments";
const progressStorageKey = "fitness.course.progress";
const certificateProviderName = "Credly";
const certificateProviderUrl =
  (import.meta.env.VITE_COURSE_CERTIFICATE_PROVIDER_URL as string | undefined) || "https://www.credly.com/";

const fitnessCourses: Course[] = [
  {
    slug: "couch-to-5k-running",
    title: "Couch to 5K Running",
    subtitle: "A structured beginner pathway from first run-walk intervals to a confident 5K.",
    level: "Beginner",
    outcomes: [
      "Run continuously for 30 minutes and complete your first 5K",
      "Understand physiological adaptations and progressive overload",
      "Build efficient running mechanics and injury-reduction habits",
      "Create consistency through routine, planning, and habit tracking"
    ],
    modules: [
      {
        title: "Module 1: Starting Smart",
        summary: "Set your baseline, expectations, safety checks, and route planning.",
        lessons: [
          {
            title: "Where to start: baseline fitness and readiness",
            minutes: 15,
            description: "How to assess your current level, identify realistic pacing, and establish your first week goals.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_C25K_START"
          },
          {
            title: "Shoes and gear essentials for beginners",
            minutes: 15,
            description: "Shoe choice, fit considerations, surface choices, and basic kit that actually matters.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_C25K_SHOES"
          }
        ]
      },
      {
        title: "Module 2: Running Mechanics Fundamentals",
        summary: "Learn simple, sustainable technique cues before volume increases.",
        lessons: [
          {
            title: "Running mechanics for beginners",
            minutes: 15,
            description: "Posture, cadence cues, arm drive, foot strike awareness, and common beginner mistakes.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_C25K_MECHANICS"
          },
          {
            title: "Breathing, pacing, and talk-test effort",
            minutes: 15,
            description: "How to run easy enough to adapt, recover, and stay consistent without burning out.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_C25K_PACING"
          }
        ]
      },
      {
        title: "Module 3: Warm-up and Prep Routine",
        summary: "Prepare joints and tissues for impact with repeatable pre-run routines.",
        lessons: [
          {
            title: "Dynamic stretching and mobility primer",
            minutes: 15,
            description: "Dynamic stretches for hips, calves, ankles, and thoracic mobility before running.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_C25K_DYNAMIC"
          },
          {
            title: "Warm-up drills and activation",
            minutes: 15,
            description: "A practical 8-10 minute drill sequence to improve form and reduce early-run discomfort.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_C25K_WARMUP"
          }
        ]
      },
      {
        title: "Module 4: The 9-Week Progression Plan",
        summary: "Structured run-walk progression inspired by common Couch to 5K frameworks.",
        lessons: [
          {
            title: "Weeks 1-3: run-walk foundations",
            minutes: 20,
            description: "Session structure, pacing targets, and confidence building for complete beginners.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_C25K_W1_3"
          },
          {
            title: "Weeks 4-6: extending aerobic time",
            minutes: 20,
            description: "How to progress safely, troubleshoot fatigue, and maintain technique as intervals grow.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_C25K_W4_6"
          },
          {
            title: "Weeks 7-9: toward continuous running",
            minutes: 20,
            description: "Transitioning from intervals to continuous effort and mentally preparing for your first 5K.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_C25K_W7_9"
          }
        ]
      },
      {
        title: "Module 5: Adaptation and Overload",
        summary: "Understand why the plan works and how your body adapts over time.",
        lessons: [
          {
            title: "Physiological adaptations to running",
            minutes: 15,
            description: "Cardiovascular, muscular, tendon, and neuromuscular adaptations in new runners.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_C25K_PHYSIOLOGY"
          },
          {
            title: "Progressive overload without overtraining",
            minutes: 15,
            description: "How to apply load progression in volume and intensity while respecting recovery.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_C25K_OVERLOAD"
          }
        ]
      },
      {
        title: "Module 6: Recovery and Mobility",
        summary: "Improve recovery quality and reduce injury risk with post-run protocols.",
        lessons: [
          {
            title: "Cool-down drills and downregulation",
            minutes: 10,
            description: "Simple cool-down walk and breathing sequence to speed recovery and reduce stiffness.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_C25K_COOLDOWN"
          },
          {
            title: "Static stretching after runs",
            minutes: 10,
            description: "Static stretching best practices for calves, quads, hamstrings, and hip flexors.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_C25K_STATIC"
          }
        ]
      },
      {
        title: "Module 7: Consistency and Habits",
        summary: "Build identity-driven routines so training sticks beyond motivation spikes.",
        lessons: [
          {
            title: "Consistency and habit-forming systems",
            minutes: 15,
            description: "Calendar anchors, cue stacking, friction reduction, and accountability loops.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_C25K_HABITS"
          },
          {
            title: "Mindset, setbacks, and restarting quickly",
            minutes: 10,
            description: "How to handle missed sessions, low motivation weeks, and confidence dips.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_C25K_MINDSET"
          }
        ]
      },
      {
        title: "Module 8: 5K Week and Next Steps",
        summary: "Prepare for your first 5K event and plan what comes next.",
        lessons: [
          {
            title: "Race-week checklist and pacing strategy",
            minutes: 10,
            description: "Nutrition basics, warm-up strategy, pacing splits, and race-day confidence routine.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_C25K_RACEWEEK"
          },
          {
            title: "Post-course progression pathways",
            minutes: 5,
            description: "How to continue with 5K improvement, 10K progression, and mixed strength + running plans.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_C25K_NEXTSTEPS"
          }
        ]
      }
    ]
  },
  {
    slug: "running-strength-mobility",
    title: "Running Strength and Mobility Essentials",
    subtitle: "Injury-resistant movement quality, strength foundations, and mobility for runners.",
    level: "Beginner",
    outcomes: [
      "Build key strength patterns that support running economy",
      "Improve mobility restrictions affecting stride and posture",
      "Apply weekly micro-sessions that complement run days"
    ],
    modules: [
      {
        title: "Module 1: Strength Foundations",
        summary: "Core lower-body and trunk patterns that transfer to running.",
        lessons: [
          {
            title: "Runner strength essentials",
            minutes: 25,
            description: "Squat, hinge, split stance, calf loading, and anti-rotation basics for beginner runners.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_RUNNER_STRENGTH"
          },
          {
            title: "Programming 2 sessions per week",
            minutes: 20,
            description: "How to fit strength around run days without reducing recovery quality.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_RUNNER_PROGRAMMING"
          }
        ]
      },
      {
        title: "Module 2: Mobility and Movement Quality",
        summary: "Target common restrictions in ankles, hips, and thoracic spine.",
        lessons: [
          {
            title: "Mobility flows for runners",
            minutes: 25,
            description: "Mobility sequences to improve stride comfort and reduce compensations.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_RUNNER_MOBILITY"
          },
          {
            title: "Prehab and maintenance routine",
            minutes: 20,
            description: "A practical 15-minute weekly routine for long-term durability.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_RUNNER_PREHAB"
          }
        ]
      },
      {
        title: "Module 3: Integrating with Running",
        summary: "Blend strength + mobility with base training and progressive run plans.",
        lessons: [
          {
            title: "Load management and progression",
            minutes: 25,
            description: "How to progress both lifting and running while avoiding overload spikes.",
            videoPlaceholderUrl: "https://www.youtube.com/watch?v=PLACEHOLDER_RUNNER_LOAD"
          }
        ]
      }
    ]
  }
];

function getCourseMinutes(course: Course): number {
  return course.modules.reduce(
    (courseTotal, module) => courseTotal + module.lessons.reduce((moduleTotal, lesson) => moduleTotal + lesson.minutes, 0),
    0
  );
}

function getModuleMinutes(module: CourseModule): number {
  return module.lessons.reduce((total, lesson) => total + lesson.minutes, 0);
}

function getModuleThumbnail(_courseSlug: string, moduleIndex: number): string {
  return moduleIndex % 2 === 0 ? runningImage : homeFitnessImage;
}

function getCourseImage(courseSlug: string): string {
  return courseSlug === "couch-to-5k-running" ? runningImage : homeFitnessImage;
}

function getModuleVideoUrl(module: CourseModule): string {
  return module.lessons[0]?.videoPlaceholderUrl || "https://www.youtube.com/watch?v=PLACEHOLDER";
}

function toEmbedUrl(videoUrl: string): string {
  const fromQuery = videoUrl.match(/[?&]v=([^&]+)/);
  if (fromQuery?.[1]) {
    return `https://www.youtube.com/embed/${fromQuery[1]}`;
  }
  return videoUrl;
}

function readJsonMap<T>(key: string): T | null {
  const raw = localStorage.getItem(key);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function normalizeModuleIndexes(indexes: number[]): number[] {
  return Array.from(new Set(indexes)).sort((a, b) => a - b);
}

function getCompletedModuleIndexes(email: string, courseSlug: string): number[] {
  const progressMap = readJsonMap<Record<string, Record<string, number[]>>>(progressStorageKey) ?? {};
  return normalizeModuleIndexes(progressMap[email]?.[courseSlug] ?? []);
}

function saveCompletedModuleIndexes(email: string, courseSlug: string, indexes: number[]): void {
  const progressMap = readJsonMap<Record<string, Record<string, number[]>>>(progressStorageKey) ?? {};
  const userProgress = progressMap[email] ?? {};
  userProgress[courseSlug] = normalizeModuleIndexes(indexes);
  progressMap[email] = userProgress;
  localStorage.setItem(progressStorageKey, JSON.stringify(progressMap));
}

function isEnrolledInCourse(email: string, courseSlug: string): boolean {
  const enrollmentMap = readJsonMap<Record<string, string[]>>(enrollmentStorageKey) ?? {};
  return (enrollmentMap[email] ?? []).includes(courseSlug);
}

function progressPercent(totalModules: number, completedModules: number): number {
  if (totalModules <= 0) {
    return 0;
  }
  return Math.round((completedModules / totalModules) * 100);
}

function buildCertificateUrl(courseSlug: string, email: string): string {
  const params = new URLSearchParams({
    course: courseSlug,
    learner: email
  });
  return `${certificateProviderUrl}?${params.toString()}`;
}

const moduleContentByKey: Record<string, ModuleContentBlock> = {
  "couch-to-5k-running:0": {
    overview: [
      "This opening module is about starting with control, not intensity. Most beginners fail because they run too hard in the first two weeks and then lose confidence when fatigue, soreness, or minor niggles appear. Your target is consistency, and consistency starts by defining your baseline honestly.",
      "Begin by checking how active you are right now, how many days per week you can realistically commit, and what surfaces are available to you. Flat routes and predictable weather windows make early sessions easier to repeat. Keep your environment simple so decisions are reduced.",
      "Treat your first seven days as orientation. The objective is to finish every session feeling like you could have done a little more. If you end runs completely spent, your pacing is too high for this stage."
    ],
    actionPlan: [
      "Choose three fixed training days and lock them into your calendar.",
      "Complete a baseline walk-jog session and note your breathing and recovery in under two minutes after finishing.",
      "Get fitted shoes with enough toe room and stable heel lockdown.",
      "Create a weather fallback option: treadmill, indoor intervals, or route swap.",
      "Set your week-one success rule: complete all sessions, regardless of pace."
    ],
    coachingNotes: [
      "Progress comes from repeatability, not hero sessions.",
      "If your shins or calves are irritated, shorten stride and slow down before increasing rest days.",
      "A completed easy run beats a skipped hard run every time at beginner stage."
    ]
  },
  "couch-to-5k-running:1": {
    overview: [
      "Efficient mechanics are not about looking perfect, they are about lowering wasted movement and impact stress. You will use a few simple cues that help immediately without overthinking stride details.",
      "Keep your head tall, rib cage stacked over hips, and shoulders relaxed. Arm swing should be compact and rhythmic, helping cadence rather than crossing your body aggressively. Overstriding is the most common beginner issue; it usually appears when you push pace too early.",
      "Use the talk test. If you cannot speak short sentences, your effort is too high for base development. Easy running builds the engine that allows faster running later."
    ],
    actionPlan: [
      "Run with a light forward lean from ankles, not from the waist.",
      "Aim for short, quiet ground contact and avoid reaching in front.",
      "Breathe in controlled rhythm, using nose/mouth combination if needed.",
      "Record one short video of your run from the side and review posture.",
      "Use an easy-pace cap for all sessions this week."
    ],
    coachingNotes: [
      "Technique improves fastest when pace is easy.",
      "A stable trunk helps everything else: breathing, arm drive, and foot placement.",
      "If cadence drops dramatically near the end, the session was likely too hard."
    ]
  },
  "couch-to-5k-running:2": {
    overview: [
      "Warm-up quality determines session quality. A good warm-up raises tissue temperature, improves joint range, and gives your nervous system a movement rehearsal before impact loads increase.",
      "Dynamic mobility before running should focus on ankles, hips, and thoracic rotation. These regions often limit stride comfort in beginners and cause compensations in knees or lower back.",
      "You do not need a long warm-up, but it must be deliberate. Eight to ten focused minutes is enough for most runners."
    ],
    actionPlan: [
      "Complete a 3-minute brisk walk before any jog intervals.",
      "Perform dynamic swings, ankle pulses, and hip openers for 4-5 minutes.",
      "Add two short acceleration strides at comfortable effort.",
      "Start the first run interval slower than your normal easy pace.",
      "Keep a repeatable warm-up checklist in your notes app."
    ],
    coachingNotes: [
      "Skip static stretching before running; keep it for after sessions.",
      "Warm-ups reduce perceived effort in first intervals and improve control.",
      "If a joint feels restricted, add a targeted mobility drill instead of random stretches."
    ]
  },
  "couch-to-5k-running:3": {
    overview: [
      "The nine-week structure works because it increases stress in manageable steps. You are teaching your aerobic system, connective tissue, and confidence to adapt together. This is progressive overload in practice.",
      "Weeks 1-3 establish rhythm through run-walk intervals. Weeks 4-6 increase continuous running time while preserving easy effort. Weeks 7-9 shift toward sustained running so your first 5K feels achievable and controlled.",
      "Do not chase speed in this block. Success is measured by session completion, lower effort at the same pace, and smoother breathing across longer intervals."
    ],
    actionPlan: [
      "Use the published interval pattern exactly before making custom changes.",
      "Repeat a week if recovery is poor or if two sessions were missed.",
      "Keep one full rest day between harder progression days.",
      "Track perceived effort from 1-10 after each run.",
      "Plan a low-pressure 5K event date at the end of week 9."
    ],
    coachingNotes: [
      "Progression is linear on paper, but adaptation is individual in reality.",
      "A temporary plateau does not mean failure; it means adaptation is still occurring.",
      "If sleep quality drops, reduce intensity before reducing consistency."
    ]
  },
  "couch-to-5k-running:4": {
    overview: [
      "Understanding adaptation helps you trust the process. In early running blocks, improvements in breathing control and heart-rate recovery often appear before visible speed gains.",
      "Cardiovascular capacity, mitochondrial efficiency, tendon stiffness, and neuromuscular coordination all improve over repeated exposures. These changes need time and repeated moderate stress, not extreme sessions.",
      "Progressive overload should be conservative: increase one variable at a time, then hold steady to absorb the load."
    ],
    actionPlan: [
      "Increase either duration or density, but not both in the same week.",
      "Deload every 3-4 weeks by reducing total volume 15-25%.",
      "Use resting morning readiness and mood as recovery indicators.",
      "Add one low-impact cross-training option when legs are heavy.",
      "Keep protein and hydration consistent to support tissue adaptation."
    ],
    coachingNotes: [
      "Most injuries come from load spikes, not from running itself.",
      "You do not need to feel destroyed to be improving.",
      "Consistency over months beats intensity over days."
    ]
  },
  "couch-to-5k-running:5": {
    overview: [
      "Recovery is where adaptation is consolidated. Cool-down and mobility work improve circulation, downregulate the nervous system, and reduce next-day stiffness.",
      "After each run, transition with a short walk and calm breathing before static stretching. Focus on calves, hip flexors, quads, and posterior chain. Keep stretches gentle and controlled.",
      "A recovery habit does not need to be long to be effective. Ten focused minutes done consistently will outperform occasional long routines."
    ],
    actionPlan: [
      "Walk for 3-5 minutes immediately after each run.",
      "Perform 4-6 static stretches and hold each for 30-45 seconds.",
      "Use slow nasal exhale breathing for 2 minutes post-session.",
      "Hydrate within 30 minutes of finishing.",
      "Log soreness patterns so you can adjust load before niggles become injuries."
    ],
    coachingNotes: [
      "Recovery routines are performance tools, not optional extras.",
      "If one area is always tight, check technique and volume before stretching more.",
      "Good sleep is your highest-value recovery intervention."
    ]
  },
  "couch-to-5k-running:6": {
    overview: [
      "Long-term progress depends on systems, not motivation. The best habit architecture removes friction and keeps behavior easy to start on low-energy days.",
      "Use cues and defaults: same training time, prepared kit, and pre-selected route. Link your run to an existing routine so it happens with less decision-making.",
      "Setback recovery is a skill. Missing one session is normal; missing the next because of guilt is the real problem. Restart quickly at an easier level and rebuild momentum."
    ],
    actionPlan: [
      "Prepare your run kit the night before each session.",
      "Use a minimum baseline: 15 minutes counts as a completed run day.",
      "Attach running to a trigger habit such as post-work walk.",
      "Track streaks by weeks completed, not by perfection.",
      "Create a fallback micro-session for stressful days."
    ],
    coachingNotes: [
      "Identity language helps: you are becoming a consistent runner.",
      "Never miss twice is a useful behavior rule.",
      "Momentum is more fragile than fitness, so protect it first."
    ]
  },
  "couch-to-5k-running:7": {
    overview: [
      "Your race-week objective is to arrive fresh, not fitter. Keep legs moving with short easy sessions and avoid any new training stimulus that introduces soreness.",
      "Use a simple pacing plan. Start conservatively for the first kilometre, settle into a controlled rhythm, and only increase effort in the final third if breathing is stable.",
      "After completing the 5K, capture what worked and choose your next pathway: repeat 5K for speed, progress toward 10K, or blend running with structured strength work."
    ],
    actionPlan: [
      "Reduce total training volume by around 30-40% in race week.",
      "Lay out race kit and logistics 24 hours in advance.",
      "Use a short warm-up with dynamic drills before start time.",
      "Run first kilometre below excitement pace.",
      "Write your next 6-week plan within 48 hours of race completion."
    ],
    coachingNotes: [
      "Nerves are normal and can be reframed as readiness.",
      "Even pacing usually beats aggressive starts in first races.",
      "Finishing with confidence is the key milestone, not finish time."
    ]
  },
  "running-strength-mobility:0": {
    overview: [
      "Strength training for runners should be simple, repeatable, and specific to movement demands. This module builds lower-body and trunk patterns that improve durability and running economy.",
      "Prioritize quality over load. Squat, hinge, split stance, calf loading, and anti-rotation are the core patterns. You do not need high exercise variety to progress at beginner stage.",
      "Two focused sessions per week are enough to create transfer if sequencing and recovery are managed well."
    ],
    actionPlan: [
      "Run a two-day template with 4-6 core exercises each session.",
      "Keep 1-3 repetitions in reserve on most sets.",
      "Load calves progressively with full range control.",
      "Pair trunk stability with unilateral leg work.",
      "Place heavy strength sessions away from long run days."
    ],
    coachingNotes: [
      "DOMS is normal early on, but should decrease by week three.",
      "Strength supports form late in runs when fatigue appears.",
      "Progress load slowly while preserving movement quality."
    ]
  },
  "running-strength-mobility:1": {
    overview: [
      "Mobility work should target restrictions that actually affect your stride and posture. For runners, ankles, hips, and thoracic spine usually provide the highest return.",
      "Use controlled mobility flows, not random static stretching. The goal is usable range with control, especially before sessions where quality movement matters.",
      "Prehab routines are effective when short enough to repeat. A 12-15 minute sequence done weekly can prevent recurring issues and improve training continuity."
    ],
    actionPlan: [
      "Use a 3-zone mobility flow: ankle, hip, thoracic.",
      "Add controlled articular rotations for joints with recurring stiffness.",
      "Perform prehab on rest days or after easy runs.",
      "Track left-right asymmetries and prioritize the weaker side.",
      "Repeat one routine for 4 weeks before adding complexity."
    ],
    coachingNotes: [
      "Mobility without strength is unstable; pair both in your week.",
      "Do not chase extreme flexibility that does not transfer to running.",
      "Small daily inputs beat occasional long sessions."
    ]
  },
  "running-strength-mobility:2": {
    overview: [
      "Integration is where many runners struggle. This module teaches load management so strength and running complement each other rather than compete for recovery capacity.",
      "Plan your week around key run sessions first, then place strength where it supports rather than sabotages quality. Keep high neural load days separated and monitor readiness markers.",
      "Progress in blocks. Build volume, hold, then deload. This rhythm lets you sustain training for months instead of cycling through overreach and interruption."
    ],
    actionPlan: [
      "Define priority sessions for the week before adding extras.",
      "Distribute load so harder days are followed by lighter days.",
      "Use one deload week every fourth week.",
      "Adjust immediately if sleep, mood, or resting readiness decline.",
      "Review weekly data and make one change at a time."
    ],
    coachingNotes: [
      "Training should feel challenging but controllable.",
      "If performance drops for multiple sessions, reduce load early.",
      "Your best plan is the one you can execute consistently."
    ]
  }
};

function getModuleContent(courseSlug: string, moduleIndex: number, module: CourseModule): ModuleContentBlock {
  const key = `${courseSlug}:${moduleIndex}`;
  const mapped = moduleContentByKey[key];
  if (mapped) {
    return mapped;
  }

  return {
    overview: [
      `${module.title} focuses on practical execution and consistency. Use this module to build confidence through repeatable, sustainable training actions.`,
      "Complete the lessons in order and capture a short reflection after each session so you can identify what is working and what needs adjustment."
    ],
    actionPlan: module.lessons.map((lesson) => `${lesson.title}: ${lesson.description}`),
    coachingNotes: [
      "Keep effort controlled and repeatable.",
      "Prioritize session completion over intensity spikes.",
      "Review progress weekly and adjust one variable at a time."
    ]
  };
}

function isAzureAuthConfigured(): boolean {
  return Boolean(
    azureAuthConfig.authorityBase &&
      azureAuthConfig.clientId &&
      azureAuthConfig.signInPolicy &&
      azureAuthConfig.signUpPolicy
  );
}

function parseHashParameter(hash: string, key: string): string {
  const cleaned = hash.startsWith("#") ? hash.slice(1) : hash;
  const params = new URLSearchParams(cleaned);
  return params.get(key) ?? "";
}

function decodeJwtPayload(token: string): Record<string, string> | null {
  const segments = token.split(".");
  if (segments.length < 2) {
    return null;
  }

  try {
    const payload = segments[1].replace(/-/g, "+").replace(/_/g, "/");
    const decoded = atob(payload);
    return JSON.parse(decoded) as Record<string, string>;
  } catch {
    return null;
  }
}

function createAzureAuthorizeUrl(policy: string): string {
  const nonce = crypto.randomUUID();
  const state = crypto.randomUUID();
  const base = `${azureAuthConfig.authorityBase}/${policy}/oauth2/v2.0/authorize`;
  const params = new URLSearchParams({
    client_id: azureAuthConfig.clientId ?? "",
    response_type: "id_token",
    redirect_uri: azureAuthConfig.redirectUri,
    response_mode: "fragment",
    scope: "openid",
    nonce,
    state,
    prompt: "login"
  });

  return `${base}?${params.toString()}`;
}

function useAzureCourseAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const configured = isAzureAuthConfigured();

  useEffect(() => {
    const tokenFromHash = parseHashParameter(window.location.hash, "id_token");
    if (tokenFromHash) {
      const payload = decodeJwtPayload(tokenFromHash);
      const email = payload?.emails ?? payload?.email ?? payload?.preferred_username ?? "";
      const normalizedEmail = Array.isArray(email) ? email[0] : email;
      const nextUser: AuthUser = {
        name: payload?.name ?? "Course Member",
        email: normalizedEmail || "unknown@example.com"
      };
      localStorage.setItem(authStorageKey, JSON.stringify(nextUser));
      setUser(nextUser);
      history.replaceState(null, "", window.location.pathname + window.location.search);
      return;
    }

    const storedUser = localStorage.getItem(authStorageKey);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser) as AuthUser);
      } catch {
        localStorage.removeItem(authStorageKey);
      }
    }
  }, []);

  function signIn() {
    if (!configured || !azureAuthConfig.signInPolicy) {
      return;
    }
    window.location.href = createAzureAuthorizeUrl(azureAuthConfig.signInPolicy);
  }

  function signUp() {
    if (!configured || !azureAuthConfig.signUpPolicy) {
      return;
    }
    window.location.href = createAzureAuthorizeUrl(azureAuthConfig.signUpPolicy);
  }

  function signOut() {
    localStorage.removeItem(authStorageKey);
    setUser(null);
  }

  return { user, configured, signIn, signUp, signOut };
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-1.96c-3.2.69-3.87-1.35-3.87-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.69.08-.69 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.35.96.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.72 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.47.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.78 0c2.19-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.76.12 3.05.73.8 1.18 1.83 1.18 3.09 0 4.45-2.69 5.42-5.26 5.71.41.36.78 1.07.78 2.17v3.21c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.2 1.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M5.2 3.5a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8ZM3.7 8.8h3v11h-3v-11Zm5 0h2.9v1.6h.1c.4-.8 1.4-1.9 3-1.9 3.2 0 3.8 2.1 3.8 4.8v6.5h-3v-5.8c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.9h-3v-11Z"
      />
    </svg>
  );
}

function SocialLinks({ showGitHub = true }: { showGitHub?: boolean }) {
  return (
    <div className="social-links" aria-label="Global social links">
      <a href="https://www.instagram.com/its.lees.life/" target="_blank" rel="noreferrer" aria-label="Instagram">
        <InstagramIcon className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/leedale/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <LinkedInIcon className="social-icon" />
      </a>
      {showGitHub ? (
        <a href="https://github.com/leedale1981" target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon className="social-icon" />
        </a>
      ) : null}
    </div>
  );
}

function Layout({ children, site }: { children: ReactNode; site: SiteConfig }) {
  const year = useMemo(() => new Date().getFullYear(), []);
  const { pathname } = useLocation();

  useEffect(() => {
    if (site.variant !== "fitness") return;
    window.scrollTo(0, 0);
    const page = pathname === "/pricing" ? "Pricing & Packages" : pathname === "/contact" ? "Contact" : "Colchester Personal Trainer & Online Coach";
    document.title = `${page} | Lee Dale Performance`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Face-to-face personal training in Colchester, Essex, and online coaching with Lee Dale. Explore weekly coaching packages or email an enquiry.");
  }, [pathname, site.variant]);

  return (
    <div className={`page-shell site-variant-${site.variant}`}>
      <div className="site-frame">
        <header className="topbar">
          <NavLink className="brand" to="/">
            {site.variant === "fitness" ? (
              <span className="fitness-brand-mark" aria-hidden="true">LD<span>.</span></span>
            ) : (
              <span className="tech-brand-mark" aria-hidden="true">LD<span>.</span></span>
            )}
            <span>
              <strong>{site.brandName}</strong>
              <small>{site.brandSubtitle}</small>
            </span>
          </NavLink>

          {site.navItems.length > 0 ? (
            <nav className="site-nav" aria-label="Primary">
              {site.navItems.map((item) => (
                <NavItem key={item.to} to={item.to}>{item.label}</NavItem>
              ))}
            </nav>
          ) : null}

          <div className="header-actions">
            {site.variant === "fitness" ? (
              <a className="fitness-button fitness-header-cta" href={fitnessBookingUrl} target="_blank" rel="noreferrer">
                Let’s talk <span aria-hidden="true">↗</span>
              </a>
            ) : <a className="tech-button tech-header-cta" href={techBookingUrl} target="_blank" rel="noreferrer">Let’s talk <span aria-hidden="true">↗</span></a>}
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer-panel">
          <div className="footer-links">
            <p>© {year} Lee Dale.{site.variant === "fitness" ? " Face-to-face coaching in Colchester · Online coaching." : " React 19, Vite and Nginx."}</p>
            <SocialLinks showGitHub={site.showGitHub} />
          </div>
        </footer>
      </div>
    </div>
  );
}

function NavItem({ to, children }: { to: string; children: ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
      end={to === "/"}
    >
      {children}
    </NavLink>
  );
}

function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="hero-panel">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lead-text">{text}</p>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <section className="home-hero-split">
        <section className="hero-panel">
          <p className="eyebrow">Lead Software Engineer | Level 3 Personal Trainer</p>
          <h1>Software Engineering, Leadership, Coaching and Fitness</h1>
          <p className="lead-text">
            I build secure, scalable platforms and lead engineering teams. Outside of tech, I coach
            fitness and run — the same discipline and accountability applies across all arenas.
          </p>
        </section>

        <section className="panel home-visual-panel home-hero-visual">
          <div className="home-visual-grid" aria-label="AI coding, fitness, software development, mindset and goals">
            {homeVisualThemes.map((item) => (
              <article className="home-visual-tile" key={item.name}>
                <img src={item.src} alt={item.name} className="home-visual-image" />
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="section-grid home-grid">
        <article className="panel feature-panel">
          <p className="tagline">{profileTagline}</p>
          <p>{profileDescription}</p>
          <div className="cta-row">
            <NavLink className="btn btn-solid" to="/tech">
              Explore Tech Work
            </NavLink>
            <NavLink className="btn btn-ghost" to="/fitness">
              Fitness
            </NavLink>
          </div>
        </article>

        <article className="panel subtle-panel">
          <h2>AI Assisted Software Development</h2>
          <div className="hashtag-chip-list" aria-label="AI coding tags">
            {aiHashtags.map((tag) => (
              <span key={tag} className="hashtag-chip">{tag}</span>
            ))}
          </div>
          <p>
            I help teams and engineers implement AI coding tools into real development workflows,
            with practical setup and delivery patterns for tools like GitHub Copilot and Claude Code.
          </p>

          <h2>Mindset Coaching</h2>
          <div className="hashtag-chip-list" aria-label="Mindset coaching tags">
            {mindsetHashtags.map((tag) => (
              <span key={tag} className="hashtag-chip">{tag}</span>
            ))}
          </div>
          <p>
            I have achieved both an <strong>BSc</strong>, and a <strong>MSc</strong> part time while working a full-time job, a 
            <strong> Private Pilot&apos;s Licence (PPL-A)</strong>, and qualified as a 
            <strong> PADI Master Scuba Diver</strong>, while maintaining high fitness into my 40s.
            This has helped me build a repeatable mindset for setting and achieving meaningful goals,
            and I help others develop the same approach.
          </p>
        </article>
      </section>

      <section className="section-grid two-col-grid consultation-grid">
        <article className="panel consultation-panel">
          <p className="eyebrow consultation-eyebrow">Tech Consultancy</p>
          <h2>Book a software consultation session</h2>
          <p>
            Book a video consultation to discuss software engineering, architecture, team leadership,
            AI coding workflows, GitHub Copilot rollout, and Claude Code adoption in your workspace.
          </p>
          <a className="btn btn-solid" href={techBookingUrl} target="_blank" rel="noreferrer">
            Book Session
          </a>
          <p className="booking-note">Booking service: Calendly</p>
        </article>

        <article className="panel consultation-panel">
          <p className="eyebrow consultation-eyebrow">Fitness + Mindset</p>
          <h2>Book a free initial consultation</h2>
          <p>
            Free initial video consultation for fitness and mindset coaching. Ideal for beginner runners,
            strength foundations, confidence, and consistency planning.
          </p>
          <a className="btn btn-solid" href={fitnessBookingUrl} target="_blank" rel="noreferrer">
            Book Session
          </a>
          <p className="booking-note">Booking service: Calendly</p>
        </article>
      </section>

      <section className="panel logo-strip-panel">
        <div className="cert-logo-strip" aria-label="Certification logos">
          {techCertifications.map((logo) => (
            <img key={logo.name} src={logo.src} alt={logo.name} title={logo.name} className="cert-logo" />
          ))}
          <img
            src={origymLogo}
            alt="Focus Awards"
            title="Level 3 Personal Trainer"
            className="cert-logo"
          />
          <img
            src={cimspaLogo}
            alt="CIMSPA"
            title="CIMSPA"
            className="cert-logo cimspa-logo"
          />
        </div>
      </section>
    </>
  );
}

function TechPage() {
  return (
    <div className="tech-landing">
      <section className="tech-hero" aria-labelledby="tech-heading">
        <img className="tech-hero-photo" src={homeSoftwareDevImage} alt="Software development workspace" fetchPriority="high" />
        <div className="tech-hero-content">
          <p className="tech-kicker">Software engineering · Cyber security · AI</p>
          <h1 id="tech-heading">Build with purpose.<br />Design for scale.<br /><em>Move forward.</em></h1>
          <p className="tech-hero-intro">Secure software. Clear architecture. Practical AI. I help teams turn complex challenges into working systems that last.</p>
          <div className="tech-hero-actions">
            <a className="tech-button" href={techBookingUrl} target="_blank" rel="noreferrer">Book a consultation <span aria-hidden="true">↗</span></a>
            <a className="tech-text-link" href="#expertise">Explore my work <span aria-hidden="true">↓</span></a>
          </div>
          <p className="tech-hero-note">Hands-on engineering. Thoughtful leadership. Real progress.</p>
        </div>
        <div className="tech-photo-caption"><span aria-hidden="true">01 /</span> Better systems. Stronger teams.</div>
      </section>
      <div className="tech-trust-strip" aria-label="Experience and qualifications">
        <div><strong>Over 25 years</strong><span>Experience as a software engineer</span></div>
        <div><strong>MSc</strong><span>Cyber security & digital forensics</span></div>
        <div><strong>CITP</strong><span>Chartered IT Professional</span></div>
      </div>
      <section className="tech-services tech-section" id="expertise" aria-labelledby="expertise-heading">
        <div className="tech-section-heading">
          <div><p className="tech-kicker">Engineering with intent</p><h2 id="expertise-heading">Strong foundations.<br />Smarter delivery.</h2></div>
          <p>Practical support for the systems you build, the tools you use and the teams behind them.</p>
        </div>
        <div className="tech-service-grid">
          <article className="tech-service"><span className="tech-service-number">01 / ENGINEERING</span><h3>Software &<br />architecture</h3><p>Business-critical C# and .NET platforms, Azure, event-driven architecture and modernisation grounded in commercial goals.</p><a href={techBookingUrl} target="_blank" rel="noreferrer">Discuss your platform <span aria-hidden="true">↗</span></a></article>
          <article className="tech-service"><span className="tech-service-number">02 / AI WORKFLOWS</span><h3>AI assisted<br />development</h3><p>Bring GitHub Copilot and Claude Code into everyday engineering with practical workflows, secure practices and measurable productivity gains.</p><a href={techBookingUrl} target="_blank" rel="noreferrer">Explore AI adoption <span aria-hidden="true">↗</span></a></article>
          <article className="tech-service"><span className="tech-service-number">03 / LEADERSHIP</span><h3>Secure systems.<br />Confident teams.</h3><p>Application security, DevOps and delivery leadership. Improve deployment maturity, mentor engineers and reduce vendor dependency.</p><a href={techBookingUrl} target="_blank" rel="noreferrer">Talk about your team <span aria-hidden="true">↗</span></a></article>
        </div>
      </section>
      <section className="tech-about tech-section" aria-labelledby="tech-about-heading">
        <div className="tech-coach-photo">
          <img src={homeAiCodingImage} alt="AI assisted software development" loading="lazy" />
          <div className="tech-coach-label"><strong>LEE DALE</strong><span>Lead Software Engineer · CITP</span></div>
        </div>
        <div className="tech-about-copy">
          <p className="tech-kicker">Experience behind the engineering</p>
          <h2 id="tech-about-heading">Technical depth.<br /><span>Practical perspective.</span></h2>
          {profileDescription.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p>I am also a PhD student at Edinburgh Napier University, with a research focus on secure coding with AI assistants.</p>
          <NavLink className="tech-text-link" to="/academic">Explore qualifications & research <span aria-hidden="true">↗</span></NavLink>
        </div>
      </section>
      <section className="tech-process tech-section" aria-labelledby="credentials-heading">
        <div className="tech-section-heading"><div><p className="tech-kicker">Always learning</p><h2 id="credentials-heading">Knowledge that<br />supports the work.</h2></div><p>Cloud, security, software design, quantum computing and AI.</p></div>
        <div className="tech-cert-grid">
          {techCertifications.map((cert) => (
            <div key={cert.name} className="tech-cert-item">
              <img src={cert.src} alt="" loading="lazy" />
              <span>{cert.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="tech-services tech-section" id="projects" aria-labelledby="projects-heading">
        <div className="tech-section-heading"><div><p className="tech-kicker">Curiosity in practice</p><h2 id="projects-heading">Ideas built.<br />Lessons learned.</h2></div><p>Side projects, open-source tools and experiments beyond the day job.</p></div>
        <a className="tech-arcade" href="https://leesarcade.co.uk" target="_blank" rel="noreferrer">
          <img src={leesArcadeImage} alt="Lee's Arcade" loading="lazy" />
          <div><h3>Lee’s Arcade <span aria-hidden="true">↗</span></h3><p>Game development, experiments and interactive builds.</p><span>Explore leesarcade.co.uk</span></div>
        </a>
        <div className="tech-service-grid tech-project-grid">
          {sideProjects.map((project, index) => (
            <article className="tech-service" key={project.url}>
              <span className="tech-service-number">{String(index + 1).padStart(2, "0")} / PROJECT</span>
              <h3>{project.name}</h3><p>{project.summary}</p>
              <a href={project.url} target="_blank" rel="noreferrer">View repository <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>
      <section className="tech-final-cta" aria-labelledby="tech-booking-heading">
        <p className="tech-kicker">Let’s build what’s next</p>
        <h2 id="tech-booking-heading">A conversation.<br />A clearer way forward.</h2>
        <p>Bring your software, architecture or AI workflow challenge. Let’s talk it through.</p>
        <a className="tech-button" href={techBookingUrl} target="_blank" rel="noreferrer">Book a consultancy session <span aria-hidden="true">↗</span></a>
        <span className="tech-cta-note">Video consultation · Choose a time on Calendly</span>
      </section>
    </div>
  );
}

function FitnessPage() {
  return (
    <div className="fitness-landing">
      <section className="fitness-hero" aria-labelledby="fitness-heading">
        <img className="fitness-hero-photo" src={runningImage} alt="Athletes training with battle ropes in a gym" fetchPriority="high" />
        <div className="fitness-hero-content">
          <p className="fitness-kicker">Colchester personal trainer · Online coach</p>
          <h1 id="fitness-heading">Build strength.<br />Find your stride.<br /><em>Keep going.</em></h1>
          <p className="fitness-hero-intro">Face-to-face personal training in Colchester, Essex, and online coaching wherever you are. Build strength, find your running rhythm and make healthier habits part of everyday life.</p>
          <div className="fitness-hero-actions">
            <a className="fitness-button" href={fitnessBookingUrl} target="_blank" rel="noreferrer">Book a free consultation <span aria-hidden="true">↗</span></a>
            <NavLink className="fitness-text-link" to="/pricing">Explore coaching & prices <span aria-hidden="true">→</span></NavLink>
          </div>
          <p className="fitness-hero-note">Your starting point is enough. Let’s build from there.</p>
        </div>
        <div className="fitness-photo-caption"><span aria-hidden="true">01 /</span> Small steps. Stronger every day.</div>
      </section>

      <div className="fitness-trust-strip" aria-label="Qualifications and coaching approach">
        <div><strong>Level 3</strong><span>Qualified Personal Trainer</span></div>
        <div><strong>CIMSPA</strong><span>Professional member</span></div>
        <div><strong>Your pace.</strong><span>Your goals. Your progress.</span></div>
      </div>

      <section className="fitness-services fitness-section" id="coaching" aria-labelledby="coaching-heading">
        <div className="fitness-section-heading">
          <div><p className="fitness-kicker">Coaching built around you</p><h2 id="coaching-heading">A stronger you.<br />In and out of the gym.</h2></div>
          <p>Whether you’re starting fresh or finding your rhythm again, we’ll focus on practical steps you can keep taking.</p>
        </div>
        <div className="fitness-service-grid">
          <article className="fitness-service">
            <span className="fitness-service-number">01 / STRENGTH</span>
            <h3>Feel stronger.<br />Move better.</h3>
            <p>Build a solid foundation with fitness plans for beginners and intermediate exercisers, shaped around your goals and starting point.</p>
            <a href={fitnessBookingUrl} target="_blank" rel="noreferrer">Let’s build your strength <span aria-hidden="true">↗</span></a>
          </article>
          <article className="fitness-service">
            <span className="fitness-service-number">02 / RUNNING</span>
            <h3>From first steps<br />to your first 5K.</h3>
            <p>Find your feet with achievable running plans. Build confidence and consistency, whether you’re a complete beginner or getting back to it.</p>
            <a href={fitnessBookingUrl} target="_blank" rel="noreferrer">Find your running rhythm <span aria-hidden="true">↗</span></a>
          </article>
          <article className="fitness-service">
            <span className="fitness-service-number">03 / MINDSET</span>
            <h3>Build the habits.<br />Keep the momentum.</h3>
            <p>Turn good intentions into a routine that works. Get support with realistic goals, accountability and making room for fitness in everyday life.</p>
            <a href={fitnessBookingUrl} target="_blank" rel="noreferrer">Take your next step <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>

      <section className="fitness-about fitness-section" aria-labelledby="about-heading">
        <div className="fitness-coach-photo">
          <img src={leeRunningImage} alt="Lee Dale running in a road race" loading="lazy" width="3000" height="4000" />
          <div className="fitness-coach-label"><strong>LEE DALE</strong><span>Your coach. In your corner.</span></div>
        </div>
        <div className="fitness-about-copy">
          <p className="fitness-kicker">Meet your coach</p>
          <h2 id="about-heading">Real life.<br />Real commitment.<br /><span>Lasting progress.</span></h2>
          <p>I’m Lee, a Level 3 Personal Trainer and CIMSPA member based in Colchester, Essex. I work with clients face to face in Colchester and online, helping them build strength, discover running and develop habits they can stick with.</p>
          <p>Fitness is a big part of my own life. I run for Orion Harriers running club, enjoy longer runs and train consistently throughout the year. My approach to coaching is the same: achievable steps, a clear purpose and consistency over intensity.</p>
          <div className="fitness-credentials">
            <div><img src={origymLogo} alt="Focus Awards" loading="lazy" /><span>OriGym qualified<br /><strong>Level 3 Personal Trainer</strong></span></div>
            <div><img src={cimspaLogo} alt="CIMSPA" loading="lazy" /><span>Professional membership<br /><strong>CIMSPA member</strong></span></div>
          </div>
          <div className="fitness-running-links">
            <a className="fitness-text-link" href="https://www.strava.com/athletes/2209153" target="_blank" rel="noreferrer">Follow my training on Strava <span aria-hidden="true">↗</span></a>
            <a className="fitness-text-link" href="https://www.powerof10.uk/Home/Athlete/43e38ca7-852e-43df-b04f-b00419e8543a" target="_blank" rel="noreferrer">View my PowerOf10 profile <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="fitness-process fitness-section" aria-labelledby="process-heading">
        <div className="fitness-section-heading"><div><p className="fitness-kicker">Your next chapter starts here</p><h2 id="process-heading">One conversation.<br />A clear way forward.</h2></div><p>You don’t need to have it all figured out. We’ll start with where you are today.</p></div>
        <ol className="fitness-process-grid">
          <li><span>01</span><h3>Let’s talk</h3><p>Book a free initial video consultation. Tell me what you want to achieve and what’s been getting in the way.</p></li>
          <li><span>02</span><h3>Find your focus</h3><p>We’ll discuss your starting point, your schedule and the kind of coaching that could work for you.</p></li>
          <li><span>03</span><h3>Take the next step</h3><p>Leave the conversation with a clearer direction and practical next steps towards your goals.</p></li>
        </ol>
      </section>

      <section className="fitness-faq fitness-section" aria-labelledby="faq-heading">
        <div><p className="fitness-kicker">Good questions</p><h2 id="faq-heading">Before you<br />take the leap.</h2></div>
        <div className="fitness-faq-list">
          <details><summary>Where do you coach?</summary><p>I’m based in Colchester, Essex, for face-to-face coaching. I also offer online coaching, with sessions by video and a plan to follow wherever you train. We’ll agree the location or online format before you book.</p></details>
          <details><summary>How much does coaching cost?</summary><p>Face-to-face coaching in Colchester is £40 for a 60-minute session, or £36 per week on a package. Online coaching is 25% cheaper: £30 per hour or £27 per week on a package. All packages include one 60-minute session each week and save 10% against single sessions in the same format. <NavLink to="/pricing">See all packages and total prices</NavLink>, or <NavLink to="/contact">email me with a question</NavLink>.</p></details>
          <details><summary>Do I need to be fit to get started?</summary><p>No. My coaching includes beginners and people returning to fitness. We start with your current ability and build from there.</p></details>
          <details><summary>What happens in the free consultation?</summary><p>It’s an initial video conversation about your goals, fitness background and schedule. We’ll talk through your starting point and practical next steps.</p></details>
          <details><summary>Can you help me get into running?</summary><p>Yes. I coach beginner runners with structured, achievable plans, whether your goal is your first 5K or building a regular running habit.</p></details>
        </div>
      </section>

      <section className="fitness-final-cta" aria-labelledby="booking-heading">
        <p className="fitness-kicker">Start where you are</p>
        <h2 id="booking-heading">Your next step?<br />Let’s take it together.</h2>
        <p>Tell me your goals. We’ll work out where to begin.</p>
        <a className="fitness-button" href={fitnessBookingUrl} target="_blank" rel="noreferrer">Book your free consultation <span aria-hidden="true">↗</span></a>
        <span className="fitness-cta-note">Free initial video consultation · Book a time that suits you</span>
      </section>
    </div>
  );
}

function CoursesPage() {
  const { user, configured, signIn, signUp, signOut } = useAzureCourseAuth();

  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="Fitness learning paths with practical coaching and video walkthroughs"
        text="Structured course content for beginner runners and developing athletes, with lesson notes, technique demos, and clear weekly progression."
      />

      <section className="panel course-auth-panel">
        <h2>Member access</h2>
        <p>
          Use Azure email sign-up/sign-in to register and access course enrollment. This is designed for Azure AD B2C user flows.
        </p>
        {!configured ? (
          <p className="status error">
            Azure auth is not configured yet. Add VITE_AZURE_B2C_AUTHORITY_BASE, VITE_AZURE_B2C_CLIENT_ID,
            VITE_AZURE_B2C_SIGNIN_POLICY, and VITE_AZURE_B2C_SIGNUP_POLICY in your environment.
          </p>
        ) : null}
        {user ? (
          <div className="course-auth-state">
            <p><strong>Signed in:</strong> {user.email}</p>
            <button className="btn btn-ghost" type="button" onClick={signOut}>Sign out</button>
          </div>
        ) : (
          <div className="cta-row">
            <button className="btn btn-solid" type="button" onClick={signUp} disabled={!configured}>Sign up with email</button>
            <button className="btn btn-ghost" type="button" onClick={signIn} disabled={!configured}>Log in with email</button>
          </div>
        )}
      </section>

      <section className="course-grid">
        {fitnessCourses.map((course) => (
          <article className="panel course-card" key={course.slug}>
            <img src={getCourseImage(course.slug)} alt={`${course.title} stock image`} className="course-card-image" />
            <p className="eyebrow">{course.level}</p>
            <h2>{course.title}</h2>
            <p>{course.subtitle}</p>
            <p className="course-meta">{getCourseMinutes(course)} minutes · {course.modules.length} modules</p>
            <ul className="plain-list">
              {course.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
            <NavLink className="btn btn-solid" to={`/courses/${course.slug}`}>
              Open Course
            </NavLink>
          </article>
        ))}
      </section>
    </>
  );
}

function CourseDetailPage() {
  const { slug } = useParams();
  const { user, configured, signIn, signUp } = useAzureCourseAuth();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [completedModuleIndexes, setCompletedModuleIndexes] = useState<number[]>([]);

  const course = fitnessCourses.find((item) => item.slug === slug);

  useEffect(() => {
    if (!slug || !user?.email) {
      setIsEnrolled(false);
      setCompletedModuleIndexes([]);
      return;
    }

    setIsEnrolled(isEnrolledInCourse(user.email, slug));
    setCompletedModuleIndexes(getCompletedModuleIndexes(user.email, slug));
  }, [slug, user?.email]);

  function enroll() {
    if (!slug || !user?.email) {
      return;
    }

    const enrollmentMap = readJsonMap<Record<string, string[]>>(enrollmentStorageKey) ?? {};
    const currentCourses = enrollmentMap[user.email] ?? [];
    if (!currentCourses.includes(slug)) {
      enrollmentMap[user.email] = [...currentCourses, slug];
      localStorage.setItem(enrollmentStorageKey, JSON.stringify(enrollmentMap));
      setIsEnrolled(true);
    }
  }

  if (!course) {
    return (
      <section className="panel">
        <h2>Course not found</h2>
        <p>The requested course could not be located.</p>
        <NavLink className="btn btn-solid" to="/courses">Back to courses</NavLink>
      </section>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Course"
        title={course.title}
        text={course.subtitle}
      />

      <section className="panel course-auth-panel">
        <h2>Enrollment</h2>
        {!configured ? (
          <p className="status error">
            Azure auth must be configured before enrollment can be enabled.
          </p>
        ) : null}
        {user ? (
          <>
            <p><strong>Signed in as:</strong> {user.email}</p>
            {isEnrolled ? (
              <p className="course-enrolled">You are enrolled in this course.</p>
            ) : (
              <button className="btn btn-solid" type="button" onClick={enroll}>Enroll now</button>
            )}
          </>
        ) : (
          <div className="cta-row">
            <button className="btn btn-solid" type="button" onClick={signUp} disabled={!configured}>Sign up with email</button>
            <button className="btn btn-ghost" type="button" onClick={signIn} disabled={!configured}>Log in with email</button>
          </div>
        )}
      </section>

      <section className="course-module-stack">
        <article className="panel">
          <h2>Course outcomes</h2>
          <ul className="plain-list">
            {course.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
          <p className="course-meta">Total learning time: {getCourseMinutes(course)} minutes</p>
          <p className="course-meta">
            Progress: {completedModuleIndexes.length}/{course.modules.length} modules completed
          </p>
        </article>

        <section className="course-module-card-grid">
          {course.modules.map((module, moduleIndex) => (
            <article className="panel module-card" key={module.title}>
              <img
                src={getModuleThumbnail(course.slug, moduleIndex)}
                alt={`${module.title} video thumbnail placeholder`}
                className="module-thumbnail"
              />
              <div className="module-card-copy">
                <p className="eyebrow">Module {moduleIndex + 1}</p>
                <h2>{module.title}</h2>
                <p>{module.summary}</p>
                <p className="course-meta">{getModuleMinutes(module)} minutes</p>
                <p className="course-meta">
                  {completedModuleIndexes.includes(moduleIndex) ? "Completed" : "Not completed"}
                </p>
                <NavLink className="btn btn-solid" to={`/courses/${course.slug}/modules/${moduleIndex}`}>
                  Open module
                </NavLink>
              </div>
            </article>
          ))}
        </section>
      </section>
    </>
  );
}

function CourseModulePage() {
  const { slug, moduleIndex } = useParams();
  const { user, configured, signIn, signUp } = useAzureCourseAuth();
  const parsedModuleIndex = Number(moduleIndex);

  const course = fitnessCourses.find((item) => item.slug === slug);
  const module = course && Number.isInteger(parsedModuleIndex) ? course.modules[parsedModuleIndex] : undefined;
  const [completedIndexes, setCompletedIndexes] = useState<number[]>([]);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    if (!course || !user?.email) {
      setCompletedIndexes([]);
      setIsEnrolled(false);
      return;
    }

    setCompletedIndexes(getCompletedModuleIndexes(user.email, course.slug));
    setIsEnrolled(isEnrolledInCourse(user.email, course.slug));
  }, [course, user?.email]);

  if (!course || !module || !Number.isInteger(parsedModuleIndex) || parsedModuleIndex < 0) {
    return (
      <section className="panel">
        <h2>Module not found</h2>
        <p>The requested module could not be located.</p>
        <NavLink className="btn btn-solid" to="/courses">Back to courses</NavLink>
      </section>
    );
  }

  const content = getModuleContent(course.slug, parsedModuleIndex, module);
  const totalModules = course.modules.length;
  const completion = completedIndexes.length;
  const completionPct = progressPercent(totalModules, completion);
  const thisModuleComplete = completedIndexes.includes(parsedModuleIndex);
  const allComplete = completion === totalModules;

  function markModuleComplete() {
    if (!user?.email || !course) {
      return;
    }

    const next = normalizeModuleIndexes([...completedIndexes, parsedModuleIndex]);
    saveCompletedModuleIndexes(user.email, course.slug, next);
    setCompletedIndexes(next);
  }

  return (
    <>
      <PageHero eyebrow="Module" title={module.title} text={module.summary} />

      <section className="course-module-layout">
        <aside className="panel module-progress-sidebar">
          <h2>{course.title}</h2>
          <p className="course-meta">{completion}/{totalModules} modules complete</p>
          <div className="module-progress-track" aria-label="Course progress">
            <span className="module-progress-fill" style={{ width: `${completionPct}%` }} />
          </div>

          <nav className="module-nav-list" aria-label="Course module navigation">
            {course.modules.map((item, index) => (
              <NavLink
                key={item.title}
                to={`/courses/${course.slug}/modules/${index}`}
                className={({ isActive }) =>
                  isActive ? "module-nav-link module-nav-link-active" : "module-nav-link"
                }
              >
                <span>{index + 1}. {item.title}</span>
                <strong>{completedIndexes.includes(index) ? "Done" : "Open"}</strong>
              </NavLink>
            ))}
          </nav>

          {allComplete && user?.email ? (
            <div className="module-certificate-panel">
              <h3>Course complete</h3>
              <p>
                You have completed every module. Claim your completion certificate via {certificateProviderName}.
              </p>
              <a
                className="btn btn-solid"
                href={buildCertificateUrl(course.slug, user.email)}
                target="_blank"
                rel="noreferrer"
              >
                Download certificate
              </a>
            </div>
          ) : null}
        </aside>

        <article className="panel module-content-panel">
          <div className="module-video-shell">
            <iframe
              title={`${module.title} video`}
              src={toEmbedUrl(getModuleVideoUrl(module))}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {!user ? (
            <section className="course-auth-panel">
              <h3>Log in to save progress</h3>
              {!configured ? (
                <p className="status error">Azure auth is not configured yet for module progress tracking.</p>
              ) : (
                <div className="cta-row">
                  <button className="btn btn-solid" type="button" onClick={signUp}>Sign up with email</button>
                  <button className="btn btn-ghost" type="button" onClick={signIn}>Log in with email</button>
                </div>
              )}
            </section>
          ) : !isEnrolled ? (
            <section className="course-auth-panel">
              <h3>Enrollment required</h3>
              <p>Enroll on the main course page before saving module completion.</p>
              <NavLink className="btn btn-ghost" to={`/courses/${course.slug}`}>Return to course</NavLink>
            </section>
          ) : null}

          <section className="module-text-block">
            <h3>Module overview</h3>
            {content.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section className="module-text-block">
            <h3>Action plan</h3>
            <ul className="plain-list">
              {content.actionPlan.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="module-text-block">
            <h3>Coaching notes</h3>
            <ul className="plain-list">
              {content.coachingNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="module-lesson-reference">
            <h3>Module lessons</h3>
            <div className="course-lesson-list">
              {module.lessons.map((lesson) => (
                <article className="course-lesson-item" key={lesson.title}>
                  <div>
                    <h3>{lesson.title}</h3>
                    <p>{lesson.description}</p>
                    <p className="course-meta">{lesson.minutes} minutes</p>
                  </div>
                  <img
                    src={getModuleThumbnail(course.slug, parsedModuleIndex)}
                    alt={`${lesson.title} thumbnail placeholder`}
                    className="module-lesson-thumb"
                  />
                </article>
              ))}
            </div>
          </section>

          <div className="cta-row">
            <button
              className="btn btn-solid"
              type="button"
              disabled={!user || !isEnrolled || thisModuleComplete}
              onClick={markModuleComplete}
            >
              {thisModuleComplete ? "Module completed" : "Mark module complete"}
            </button>
            <NavLink className="btn btn-ghost" to={`/courses/${course.slug}`}>
              Back to course overview
            </NavLink>
          </div>
        </article>
      </section>
    </>
  );
}

function AcademicPage() {
  return (
    <>
      <PageHero
        eyebrow="Academic"
        title="Formal study in cyber security, digital forensics, computing and physics."
        text="Academic foundations that support practical engineering, secure design and systems thinking."
      />
      <section className="section-grid two-col-grid">
        <article className="panel">
          <h2>Qualifications</h2>
          <div className="qualification-list">
            {academicQualifications.map((item) => (
              <div className="qualification-item" key={item.name}>
                <img src={item.logo} alt={item.institution} className="qualification-logo" />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <h2>Academic work</h2>
          <div className="academic-work-list">
            {academicWork.map((item) => (
              <a
                className={item.prominent ? "work-item prominent-work-item" : "work-item"}
                href={item.href}
                key={item.title}
                target="_blank"
                rel="noreferrer"
              >
                <img src={item.icon} alt={item.kind} className="doc-icon" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.kind} document</p>
                </div>
              </a>
            ))}
          </div>
        </article>
      </section>

      <section className="panel">
        <h2>Credentials and Memberships</h2>
        <div className="credential-list">
          {credentialsAndMemberships.map((item) => (
            <div className="credential-item" key={item.title}>
              <img src={item.logo} alt={item.organisation} className="credential-logo" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.organisation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function App() {
  const variant: SiteVariant = import.meta.env.MODE === "fitness" ? "fitness" : "tech";
  const site = siteConfigs[variant];

  useEffect(() => {
    document.body.dataset.theme = variant;
    if (variant === "tech") document.title = "Lee Dale | Lead Software Engineer";

    return () => {
      delete document.body.dataset.theme;
    };
  }, [variant]);

  return (
    <BrowserRouter>
      <Layout site={site}>
        <Routes>
          {variant === "fitness" ? (
            <>
              <Route path="/" element={<FitnessPage />} />
              <Route path="/pricing" element={<FitnessPricingPage />} />
              <Route path="/contact" element={<FitnessContactPage bookingUrl={fitnessBookingUrl} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          ) : (
            <>
              <Route path="/" element={<TechPage />} />
              <Route path="/academic" element={<AcademicPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
