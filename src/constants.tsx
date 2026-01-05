import { Project, Skill } from './types';


import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript,
} from 'react-icons/si';


export const BASE_URL = '/RF-portfolio1/';

export const MY_NAME = "Radka";
export const MY_ROLE = "Učím se tvořit přehledné a vizuálně atraktivní webové aplikace.";

export const ABOUT_ME = {
  title: "O mně",
  description: (
    <>
      <p className="mb-4">
        Jsem juniorní frontend developerka s dlouholetými zkušenostmi v oblasti vizuální komunikace. Programování mě začalo bavit natolik, 
        že se mu chci věnovat naplno a <strong className="text-text-primary">hledám pracovní příležitost v oblasti webového vývoje</strong>. 
      </p>
      <p className="mb-4">
        Aktivně se vzdělávám v technologiích frontendu (HTML, CSS, JavaScript, React) a pokud to projekt vyžaduje, tak i v základech backendu a databází. 
        Mám za sebou úspěšně ukončený kurz <strong className="text-text-primary">Pythonu</strong> (Engeto) a nyní procházím kurzem <strong className="text-text-primary"> Reactu </strong> 
        (Engeto). Své znalosti dále rozvíjím na reálných projektech a k praktickému rozvoji využívám online zdroje, včetně práce s AI.
      </p>      
      <p className="mb-4">          
        Díky zkušenostem z (nejen) vlastních webových projektů <strong className="text-text-primary">se na vývoj dívám v širších souvislostech</strong> – z pohledu 
        uživatele, značky i obchodních cílů. Rozumím principům UX, UI i SEO.
      </p>
      <p className="mb-4">  
        Mám praktické zkušenosti s <strong className="text-text-primary">úpravami kódu na platformě Shoptet </strong>(HTML, CSS, úpravy šablon, kódování bannerů) a s optimalizací webů pro konverze i 
        vyhledávače. Projekt nevnímám pouze očima vývojáře, ale také uživatele a obchodníka.
      </p>
      <p className="mb-4">
        Spojuji <strong className="text-text-primary">kreativitu designéra s analytickým a technickým myšlením vývojáře</strong>. Baví mě hledat funkční 
        a esteticky čistá řešení, učit se nové technologie a chápat projekty v širších souvislostech.
      </p>
      <p>
        Hledám pozici <strong className="text-text-primary">frontend developerky</strong> (případně fullstack) s možností profesního růstu, ideálně 
        <strong className="text-text-primary"> on-site v Brně a okolí </strong> nebo remote.
      </p>
    </>
  )
};

const mainIconClass = "w-12 h-12";

export const SKILL_CATEGORIES: { [key: string]: { title: string; skills: Skill[] } } = {
  frontend: {
    title: 'Hlavní frontend dovednosti',
    skills: [
      { name: 'React', icon: <SiReact className={`${mainIconClass} text-[#61DAFB]`} /> },
      { name: 'HTML', icon: <SiHtml5 className={`${mainIconClass} text-[#E34F26]`} /> },
      { name: 'CSS', icon: <SiCss3 className={`${mainIconClass} text-[#1572B6]`} /> },
      { name: 'JavaScript', icon: <SiJavascript className={`${mainIconClass} text-[#F7DF1E]`} /> },
      { name: 'TypeScript', icon: <SiTypescript className={`${mainIconClass} text-[#3178C6]`} /> },
    ],
  },
  backend: {
    title: 'Základy backendu',
    skills: [
      { name: 'Python' },
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
      { name: 'Google Analytics' },
      { name: 'Looker Studio' },
      { name: 'SEO' },
      { name: 'reklamy Meta' },
    ],
  },
  other: {
    title: 'Další',
    skills: [
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
    description: "Komplexní e-commerce řešení s administrací produktů, správou objednávek a odesíláním emailových potvrzení. Při přijetí objednávky vygeneruje výpůjční smlouvou s objednnými položkami a údaji zákazníka a odešle PDF emailem provozovateli i zákazníkovi. Kontrola dostupnosti položek v kalendáři na základě počtu vybavení v databázi.",
    imageUrl: "./images/pujcovnaoutdooru1.jpg",
    tags: [ "React", "Typescript", "AI", "PostgreSQL", "GitHub", "UI", "Deployment"],
    liveUrl: "https://www.pujcovnaoutdooru.cz/",
    repoUrl: "https://github.com/Ra-Fil/pujcovnaoutdooru.git"
  },

  {
    id: "rf-portfolio",
    title: "Webová prezentace dovedností",
    description: "Jednostránková prezentace mých dovedností a vytvořených projektů.",
    imageUrl: `./images/rf-portfolio.jpg`,
    tags: ["React", "AI", "JavaScript", "HTML", "github" ],
    repoUrl: "https://github.com/Ra-Fil/RF-portfolio1.git",
    liveUrl: "https://ra-fil.github.io/RF-portfolio1/",
  },

  {
    id: "zet-app",
    title: "Formulář pro zaznamenání požadavku",
    description: "Zákazník po vyplnění a přidání příloh odešle formulář emailem firmě a v kopii zákazníkovi. Po přihlášení do admin možnost správy událostí, stažení souborů události, zaznamenávání stavu. Aplikaci ladím a dokončuji.",
    imageUrl: `./images/zetapp.jpg`,
    tags: ["Typescript", "AI", "JavaScript", "UI" , "PostgreSQL", "HTML", "github", "Tailwind" ],
    repoUrl: "https://github.com/Ra-Fil/treti_projekt.git"
  },

  {
    id: "shoptet-banners",
    title: "Sekce vložených bannerů pro Shoptet (Classic)",
    description: "Responzivní bannery a widget pro Instagram na míru pro šablonu Classic na platformě Shoptet.",
    imageUrl: "./images/abyto1.jpg",
    tags: ["AI", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://www.abyto.cz/",
  },

  {
    id: "shoptet-disco",
    title: "Bannery a Instagram widget pro Shoptet (Disco)",
    description: "Bannery a widget pro Instagram na míru pro šablonu Disco na Shoptetu.",
    imageUrl: `./images/sofiababy1.jpg`,
    tags: ["JavaScript", "HTML", "CSS", "AI"],
    liveUrl: "https://www.sofiababy.cz/",
  },

  {
    id: "scraping-tool",
    title: "Nástroj pro scrapping",
    description: "Závěrečný projekt v rámci kurzu Python Engeto. Scrapuje výsledky z webových stránek a ukládá je do CSV.",
    imageUrl: `./images/scrapper1.jpg`,
    tags: ["Python"],
    repoUrl: "https://github.com/Ra-Fil/treti_projekt.git"
  },

];  

export const CONTACT = {
  email: "r.filipova@email.cz",
  linkedin: "https://www.linkedin.com/in/radka-filipova"
};
