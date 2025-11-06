// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-serving-as-a-reviewer-for-neurips-2023",
          title: '📝 Serving as a reviewer for NeurIPS 2023.',
          description: "",
          section: "News",},{id: "news-excited-to-share-that-our-paper-on-continual-learning-in-mslt-was-accepted-at-naacl-2025",
          title: '🚀 Excited to share that our paper on continual learning in MSLT was...',
          description: "",
          section: "News",},{id: "news-serving-as-a-reviewer-for-neurips-2025",
          title: '📝 Serving as a reviewer for NeurIPS 2025.',
          description: "",
          section: "News",},{id: "news-our-joint-paper-with-tu-e-is-available-pearl",
          title: '📄 Our joint paper with TU/e is available: PEARL.',
          description: "",
          section: "News",},{id: "news-️-thrilled-to-announce-that-i-ll-be-heading-to-ranlp-2025-in-varna-bulgaria-to-present-our-paper",
          title: '✈️ Thrilled to announce that I’ll be heading to RANLP 2025 in Varna,...',
          description: "",
          section: "News",},{id: "news-excited-to-share-that-our-sonar-slt-paper-was-accepted-at-wmt-2025",
          title: '🚀 Excited to share that our SONAR-SLT paper was accepted at WMT 2025!...',
          description: "",
          section: "News",},{id: "news-two-preprints-are-now-available-one-on-hallucination-detection-and-another-on-automatic-evaluation",
          title: '📄 Two preprints are now available, one on hallucination detection and another on...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%61%6B%69%62%79%7A%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/shakibyzn", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shakib-yazdani", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=afvFKdwAAAAJ&hl", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
