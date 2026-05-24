// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-software",
          title: "Software",
          description: "Open-source work in LLMs, agentic AI, and computational chemistry.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/software/";
          },
        },{id: "news-started-phd-journey-at-ucla",
          title: 'Started PhD journey at UCLA',
          description: "",
          section: "News",},{id: "news-presented-my-work-on-cu-dissolution-at-the-acs-fall-2024-conference-in-denver-co",
          title: 'Presented my work on Cu dissolution at the ACS Fall 2024 conference in...',
          description: "",
          section: "News",},{id: "news-presented-my-work-on-cu-dissolution-at-prime-2024-conference-in-honolulu-hawaii",
          title: 'Presented my work on Cu dissolution at PRiME 2024 Conference in Honolulu, Hawaii...',
          description: "",
          section: "News",},{id: "news-received-dissertation-year-award-at-ucla",
          title: 'Received Dissertation Year Award at UCLA',
          description: "",
          section: "News",},{id: "news-new-paper-published-in-catalysis-science-amp-amp-technology-dft-study-of-electrochemical-acetone-amination-on-ag-cathodes-revealing-the-mechanism-and-the-unexpected-role-of-pb-trace-impurities-in-facilitating-hydrogen-transfer-doi",
          title: 'New paper published in Catalysis Science &amp;amp;amp; Technology — DFT study of electrochemical...',
          description: "",
          section: "News",},{id: "news-excited-to-join-ses-ai-corp-as-a-research-intern-for-six-months",
          title: 'Excited to join SES AI Corp as a Research Intern for six months!...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%61%6E%69%67%75%61%6E@%75%63%6C%61.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yaniguan", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yaniguan", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=eb_DB84AAAAJ&hl=en", "_blank");
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
