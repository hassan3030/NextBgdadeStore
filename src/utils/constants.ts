// constants variables
export const ARTICLE_PER_PAGE = 6;

const PRODUCTION_DOMAIN = "https://cloud-hosting-project-course.vercel.app";
const DEVELOPMENT_DOMAIN = "http://localhost:3000";

// change between build and production mode

export const DOMAIN = process.env.NODE_ENV === 'production' 
    ? PRODUCTION_DOMAIN
    : DEVELOPMENT_DOMAIN;