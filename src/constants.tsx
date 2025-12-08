import { Project, Skill } from './types';

import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, 
  SiNodedotjs, SiPython, SiPostgresql, 
  SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiCanva,
  SiGoogleanalytics, SiGooglesearchconsole, SiMeta, SiGithub
} from 'react-icons/si';
import { 
  FaShopify, FaEnvelopeOpenText, FaBullhorn, FaChartLine, FaMobileAlt, FaPalette, FaPenNib 
} from 'react-icons/fa';

// Cesta nastavena na název repozitáře pro GitHub Pages
export const BASE_URL = '/RF-portfolio1/';

export const MY_NAME = "Radka";
export const MY_ROLE = "Učím se tvořit přehledné a vizuálně atraktivní webové aplikace.";

export const ABOUT_ME = {
  title: "O mně",
  description: (
    <>
      <p className="mb-4">
        Jsem grafická designérka s dlouholetými zkušenostmi v oblasti vizuální komunikace. Programování mě začalo bavit natolik, že se mu chci věnovat naplno a <strong className="text-text-primary">hledám pracovní příležitost v oblasti webového vývoje</strong>.
      </p>
      <p className="mb-4">
        Aktivně se vzdělávám v technologiích frontendu (HTML, CSS, JavaScript, React) i v základech backendu a databází. Mám za sebou úspěšně ukončené kurzy <strong className="text-text-primary">Pythonu</strong> a 
        <strong className="text-text-primary"> Reactu</strong> (Engento.cz). Využívám online zdroje k praktickému rozvoji, včetně práce s AI.
      </p>
      <p className="mb-4">
        Díky provozování a správě (nejen) vlastního e-shopu mám široký záběr – od online marketingu, UX, UI, SEO, analytiku až po úpravy kódu v prostředí <strong className="text-text-primary">Shoptet</strong> (HTML, CSS, kódování bannerů, úpravy šablon).
      </p>
      <p className="mb-4">
        Spojuji <strong className="text-text-primary">kreativitu designéra s analytickým a technickým myšlením vývojáře</strong>. Baví mě hledat funkční a esteticky čistá řešení, učit se nové technologie a chápat projekty v širších souvislostech.
      </p>
      <p>
        Hledám pozici <strong className="text-text-primary">junior frontend developerky</strong> (případně fullstack) s možností profesního růstu, ideálně <strong className="text-text-primary">remote nebo on-site v Brně a okolí</strong>.
      </p>
    </>
  )
};

// Společná třída pro hlavní ikony
const mainIconClass = "w-12 h-12";
// Společná třída pro menší ikony v seznamech
const smallIconClass = "w-5 h-5";

export const SKILL_CATEGORIES: { [key: string]: { title: string; skills: Skill[] } } = {
  frontend: {
    title: 'Hlavní frontend dovednosti',
    skills: [
      { name: 'HTML', icon: mainSkillIcon },
      { name: 'CSS', icon: mainSkillIcon },
      { name: 'JavaScript', icon: mainSkillIcon },
      { name: 'React', icon: mainSkillIcon },
      { name: 'TypeScript', icon: mainSkillIcon },
    ],
  },
  backend: {
    title: 'Základy backendu',
    skills: [
      { name: 'Node.js' },
      { name: 'Python' },
      { name: 'PostgreSQL' },
    ],
  },
  graphics: {
    title: 'Grafika pro online i offline',
    skills: [
      { name: 'Adobe Photoshop' },
      { name: 'Illustrator' },
      { name: 'InDesign' },
      { name: 'CorelDRAW' },
      { name: 'Canva' },
    ],
  },
  marketing: {
    title: 'Marketing',
    skills: [
      { name: 'Ecomail' },
      { name: 'Leadhub' },
      { name: 'Boldem' },
      { name: 'Google Analytics 4' },
      { name: 'Looker Studio' },
      { name: 'SEO' },
      { name: 'reklamy Meta' },
    ],
  },
  other: {
    title: 'Další',
    skills: [
      { name: 'AI' },
      { name: 'Shoptet' },
      { name: 'Responsivní design' },
      { name: 'UX/UI základy' },
      { name: 'GitHub' },
    ],
  },
};

export const PROJECTS: Project[] = [
  {
    id: "outdoor-rental",
    title: "Půjčovna outdoorového vybavení",
    description: "Komplexní e-commerce řešení s administrací produktů, správou objednávek a odesíláním emailových potvrzení s vygenerovanou smlouvou zákazníkovi. Kontrola dostupnosti položek v kalendáři na základě počtu vybavení na skladě.",
    imageUrl: `/public/images/pujcovnaoutdooru.jpg`,
    tags: ["React", "Node.js", "PostgreSQL", "GitHub", "UX"],
    liveUrl: "https://pujcovnaoutdooru.cz/",
    repoUrl: "https://github.com/radkafilipova/pujcovna-outdooru"
  },
  {
    id: "shoptet-banners",
    title: "Sekce vložených bannerů pro Shoptet",
    description: "Responzivní vložené bannery pro Shoptet Classic",
    imageUrl: `/images/pujcovnaoutdooru.jpg`,
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: "shoptet-disco",
    title: "Bannery a Instagram widget pro Shoptet (Disco)",
    description: "Implementace responzivních bannerů a widgetu pro Instagram na míru pro šablonu Disco na platformě Shoptet.",
    imageUrl: `/components/images/RF1.jpg`,
    tags: ["JavaScript", "HTML", "CSS", "AI"],
  },
  {
    id: "case-recording-app",
    title: "Firemní aplikace pro zaznamenání případu pomocí formuláře",
    description: "Vkládání textu, fotografií, do vstupního formuláře. Po odeslání se formulář odešle. V sekci admin možnost správy zaznamenané události, zaznamenávání stavu.",
    imageUrl: `./images/RF1.jpg`,
    tags: ["React", "JavaScript", "HTML", "CSS", "Deployment", "AI"],
  },
  {
    id: "scraping-tool",
    title: "Nástroj pro scrapping",
    description: "Závěrečný projekt v rámci kurzu Engeto. Scrapuje výsledky z webových stránek a ukládá je do CSV.",
    imageUrl: `${BASE_URL}images/RF1.jpg`,
    tags: ["Python"],
    repoUrl: "https://github.com/radkafilipova/engeto-scraper"
  }
];

export const CONTACT = {
  email: "r.filipova@email.cz",
  linkedin: "https://linkedin.com/in/radka-filipova"
};