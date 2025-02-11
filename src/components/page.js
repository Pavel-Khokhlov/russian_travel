import { coverImage, language } from "../utils/data";
import { brandLogo, cityTrip, copyRight, coverLink, coverSubtitle, coverTitle, footerLinks, html, introLists, introTitle, leadCapture, leadSubtitle, leadTitle, title } from "../utils/config";

// Fn to define real current path to obj data
function getByPath(obj, path) {
  let parts = path.split(".");
  let current = obj;
  for (let i = 0; i < parts.length; i++) {
    current = current[parts[i]];
    if (!current)
      break;
  }
  return current;
}

// Fn to get random index of array
function getRandomIndex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min ) + min);
}

export function renderPage() {
  const lang = html.lang;
  const currentPath = getByPath(language, lang);
  brandLogo.src = currentPath.logo.link;
  brandLogo.alt = currentPath.logo.alt;
  title.innerHTML = currentPath.title;
  leadTitle.innerHTML = currentPath.title;
  leadSubtitle.innerHTML = currentPath.leadSubtitle;
  leadCapture.innerHTML = currentPath.leadCapture;
  cityTrip.src = currentPath.city.link;
  cityTrip.alt = currentPath.city.alt;
  introTitle.innerHTML = currentPath.introTitle;
  introLists.forEach((list, i) => {
    list.innerHTML = currentPath.introLists[i]
  });
  coverTitle.innerHTML = currentPath.coverTitle;
  coverSubtitle.innerHTML = currentPath.coverSubtitle;
  coverLink.style.backgroundImage = `url(${coverImage[getRandomIndex(0, coverImage.length)]})`;
  footerLinks.forEach((link, i) => {
    link.innerHTML = currentPath.links[i]
  });
  copyRight.innerHTML = currentPath.copyRight;
}
