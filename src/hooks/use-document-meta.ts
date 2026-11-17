import { useEffect } from "react";

export const SITE_URL = "https://prasada-vishwesh-portfolio.lovable.app";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

interface DocumentMeta {
  title: string;
  description: string;
  /** Route path, e.g. "/projects/smart-chief". Used for the canonical and og:url. */
  path?: string;
  image?: string;
  noindex?: boolean;
}

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

/**
 * Keeps <title>, description, canonical, Open Graph and Twitter tags in sync with the current route.
 * The site is a client-rendered SPA, so each page declares its own metadata here.
 */
export const useDocumentMeta = ({ title, description, path = "/", image = DEFAULT_IMAGE, noindex = false }: DocumentMeta) => {
  useEffect(() => {
    const url = `${SITE_URL}${path === "/" ? "/" : path}`;
    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
    setCanonical(url);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
  }, [title, description, path, image, noindex]);
};
