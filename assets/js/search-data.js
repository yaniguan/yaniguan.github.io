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
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "My publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "My PhD and other projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Please check my CV here, updated Jan 31 2025",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
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
          section: "News",},{id: "projects-working-electrode-dissolution-and-stability",
          title: 'Working Electrode Dissolution and Stability',
          description: "Origin of copper dissolution under electrocatalytic reduction conditions involving amines (DOI 10.1039/D4SC01944J)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-electric-double-layer-structures-and-properties",
          title: 'Electric Double Layer Structures and Properties',
          description: "Probing the Electric Double-Layer Capacitance to Understand the Reaction Environment in Conditions of Electrochemical Amination of Acetone, (DOI 10.1021/acsami.4c14134)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-electrochemial-hydrogenation-of-imine-reactivity",
          title: 'Electrochemial Hydrogenation of Imine Reactivity',
          description: "Explored the role of 1ppm Pb in the process of electrochemical hydrogenation of imine to amine (submitted)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
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
