// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.guitarlessonsharrogate.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.guitarlessonsharrogate.com/","title_tag":"Guitar Lessons Harrogate Wetherby | Steve Grant Guitar","meta_description":"One to one Guitar Lessons Harrogate for beginners and intermediate. Acoustic and Electric guitar tuition near Wetherby and Knaresborough with tutor Steve Grant."},{"page_url":"https://www.guitarlessonsharrogate.com/testimonials","title_tag":"Guitar Teacher Harrogate Reviews | Steve Grant Guitar","meta_description":"Read testimonials for Guitar Teacher Harrogate Steve Grant. See why students recommend his one to one guitar lessons in Harrogate, Wetherby and Knaresborough."},{"page_url":"https://www.guitarlessonsharrogate.com/about-steve","title_tag":"Guitar Tutor Harrogate & Wetherby | Steve Grant Guitar","meta_description":"Professional Guitar Tutor Harrogate. Steve Grant offers beginners and intermediate guitar lessons near Wetherby and Knaresborough from his home studio in Spofforth."},{"page_url":"https://www.guitarlessonsharrogate.com/about-you","title_tag":"Beginners Guitar Lessons Harrogate | Steve Grant Guitar","meta_description":"Beginners Guitar Lessons Harrogate for Electric and Acoustic guitar. One to one tuition with Guitar Tutor Harrogate Steve Grant. Learn for fun, relaxation or bands."},{"page_url":"https://www.guitarlessonsharrogate.com/workshops","title_tag":"Electric & Acoustic Guitar Lessons Harrogate | Workshops","meta_description":"Group Electric and Acoustic Guitar Lessons Harrogate. Fun guitar workshops for beginners to advanced players near Wetherby and Knaresborough with Steve Grant."},{"page_url":"https://www.guitarlessonsharrogate.com/contact","title_tag":"One to One Guitar Lessons Harrogate | Contact Steve","meta_description":"Contact Guitar Teacher Harrogate Steve Grant for one to one guitar lessons near Wetherby and Knaresborough. Book Electric or Acoustic Guitar Lessons in Harrogate."}],"keywords":["guitar lessons harrogate","guitar teacher harrogate","guitar tutor harrogate","beginners guitar lessons harrogate","electric guitar lessons harrogate","acoustic guitar lessons harrogate","music lessons harrogate","guitar lessons wetherby","guitar lessons knaresborough","one to one guitar lessons harrogate"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.guitarlessonsharrogate.com/#localbusiness",
  "name": "Guitar Lessons Harrogate",
  "url": "https://www.guitarlessonsharrogate.com/",
  "description": "One-to-one guitar lessons for beginners and intermediate players in Harrogate, Wetherby and Knaresborough with professional musician and tutor Steve Grant. Acoustic and electric guitar, all ages and styles welcome.",
  "image": [
    "https://static.wixstatic.com/media/2cb292_695c707cfaba4bd6a8c722a2e105aae5~mv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/2cb292_695c707cfaba4bd6a8c722a2e105aae5%7Emv2.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/2cb292_695c707cfaba4bd6a8c722a2e105aae5~mv2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/2cb292_695c707cfaba4bd6a8c722a2e105aae5%7Emv2.jpg",
  "telephone": "+44-7595-154415",
  "email": "stevejgrant@me.com",
  "priceRange": "£40-£50",
  "address": {
    "@type": "PostalAddress",
    "postalCode": "HG3",
    "addressCountry": "GB"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Harrogate"
    },
    {
      "@type": "City",
      "name": "Wetherby"
    },
    {
      "@type": "City",
      "name": "Knaresborough"
    },
    {
      "@type": "AdministrativeArea",
      "name": "North Yorkshire"
    },
    {
      "@type": "Country",
      "name": "United Kingdom"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  ],
  "sameAs": [
    "https://www.firsttutors.com/",
    "https://www.tutora.co.uk/",
    "https://www.musicteachers.co.uk/"
  ],
  "founder": {
    "@type": "Person",
    "name": "Steve Grant",
    "description": "Professional musician and guitar tutor offering one-to-one guitar lessons for beginners and intermediates from a home studio in Spofforth, near Harrogate, Wetherby and Knaresborough.",
    "telephone": "+44-7595-154415",
    "email": "stevejgrant@me.com"
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "One-to-one 45-minute guitar lesson",
      "price": "40",
      "priceCurrency": "GBP",
      "category": "Guitar lesson",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "One-to-one 60-minute guitar lesson",
      "price": "50",
      "priceCurrency": "GBP",
      "category": "Guitar lesson",
      "availability": "https://schema.org/InStock"
    }
  ],
  "serviceType": "Guitar lessons for beginners and intermediate players",
  "knowsAbout": [
    "guitar lessons Harrogate",
    "guitar lessons Wetherby",
    "guitar lessons Knaresborough",
    "beginner guitar lessons",
    "intermediate guitar lessons",
    "acoustic guitar lessons",
    "electric guitar lessons",
    "guitar workshops",
    "guitar tutor Harrogate",
    "guitar teacher Wetherby",
    "guitar teacher Knaresborough"
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
