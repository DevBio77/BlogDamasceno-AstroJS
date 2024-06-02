import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog-damasceno.netlify.app/", // replace this with your deployed domain
  author: "Fabrício M. Damasceno",
  desc: "Blog do Damasceno é um Blog sobre Desenvolvimento onde eu compartilho a minha experiência como Desenvolvedor Full Stack com mais de 15 anos de experiência. DotNet, PHP, Javascript, NodeJS, React, DevOps, Full Stack",
  title: "Blog do Damasceno",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "pt", // html lang code. Set this empty and default will be "en"
  langTag: ["pt-BR"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/fabriciodamasceno/",
    linkTitle: `Linkedin: ${SITE.title}`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/fabriciodamasceno",
    linkTitle: `GitHub: ${SITE.title}`,
    active: true,
  },  
  {
    name: "YouTube",
    href: "https://github.com/fabriciodamasceno",
    linkTitle: `YouTube: ${SITE.title}`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://github.com/fabriciodamasceno",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  }, 
  {
    name: "Facebook",
    href: "https://github.com/fabriciodamasceno",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },   
  {
    name: "Mail",
    href: "mailto:fabricio@damasceno.dev",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://github.com/fabriciodamasceno",
    linkTitle: `Seguir ${SITE.title} o Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://github.com/fabriciodamasceno",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },  
  {
    name: "WhatsApp",
    href: "https://github.com/fabriciodamasceno",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/fabriciodamasceno",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/fabriciodamasceno",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/fabriciodamasceno",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/fabriciodamasceno",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/fabriciodamasceno",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/fabriciodamasceno",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/fabriciodamasceno",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/fabriciodamasceno",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/fabriciodamasceno",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/fabriciodamasceno",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/fabriciodamasceno",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },  
];
