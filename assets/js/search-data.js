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
  },{id: "nav-papers-amp-code",
          title: "Papers &amp; Code",
          description: "Peer-reviewed papers, preprints, and the software I build alongside them.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-who-is-bonded-to-whom",
        
          title: "Who is bonded to whom?",
        
        description: "Part 0, Overview: three stops through my UCLA PhD thesis, from water and capacitance to Cu dissolution, molecular hydrogen shuttles, and Cs-assisted CO2 activation",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/notes/coordination-at-electrochemical-interfaces/";
          
        },
      },{id: "post-borrowed-hydrogen-and-a-nearly-bare-cation",
        
          title: "Borrowed hydrogen and a nearly bare cation",
        
        description: "Part 3, Reactivity: Pb + Cs in CO2RR: hydride shuttles offer a route to amination, while partial Cs desolvation strengthens contact with activated CO2 in a separate Ag system",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/notes/borrowed-hydrogen-and-a-bare-cation/";
          
        },
      },{id: "post-when-the-cathode-dissolves",
        
          title: "When the cathode dissolves",
        
        description: "Part 2, Dissolution: amines help Cu exchange metallic neighbors for nitrogen ligands, so negative polarization reduces metal loss without always eliminating it",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/notes/when-the-cathode-dissolves/";
          
        },
      },{id: "post-capacitance-before-reduction",
        
          title: "Capacitance before reduction",
        
        description: "Part 1, Capacitance: acetone and methylamine change Cu double-layer capacitance in opposite directions, and the surrounding water explains why molecular polarizability is not enough",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/notes/capacitance-before-reduction/";
          
        },
      },{id: "post-a-summer-of-molecules-puddles-and-batteries",
        
          title: "A summer of molecules, puddles, and batteries",
        
        description: "Overview of a three-part series on my Applied Scientist internship at SES AI: molecules make up electrolytes, electrolytes go into batteries, and each part builds on the representations of the one before",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/notes/summer-of-molecules-puddles-batteries/";
          
        },
      },{id: "post-from-molecules-to-batteries",
        
          title: "From molecules to batteries",
        
        description: "Part 3, cells: the electrolyte formulations from Part 2 go into real batteries, and the molecule and electrolyte representations from Parts 1 and 2 stack up into a representation of the cell. Multiscale simulations around a 252-formulation experiment, alignment between scales, an aging world model that learns how a cell evolves instead of guessing one lifetime number, and a cell co-scientist that closes the series",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/notes/from-molecules-to-batteries/";
          
        },
      },{id: "post-teaching-a-puddle-to-dance",
        
          title: "Teaching a puddle to dance",
        
        description: "Part 2, electrolytes: the molecules recognized and represented in Part 1 become the salt, solvents and additives of a liquid. Extending a polarizable force field, a fitting loop that learns from its own failures, three heads that compress 40,000 molecular movies into one latent space, and an electrolyte co-scientist trained on all of it",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/notes/teaching-a-puddle-to-dance/";
          
        },
      },{id: "post-atom-is-atom-bond-is-bond",
        
          title: "Atom is atom, bond is bond",
        
        description: "Part 1, molecules: the first layer everything else in the series builds on. Teaching models to recognize molecules in real papers (hand-drawn ones too), check their own answers, and turn them into vectors and a multimodal database that the electrolytes of Part 2 are later mixed from",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/notes/atom-is-atom-bond-is-bond/";
          
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
          section: "News",},{id: "news-excited-to-join-ses-ai-corp-as-an-applied-scientist-intern-for-the-summer",
          title: 'Excited to join SES AI Corp as an Applied Scientist Intern for the...',
          description: "",
          section: "News",},{id: "news-started-three-equivariant-network-projects-for-chemistry-wignerflow-ylm-and-ouroboros",
          title: 'Started three equivariant-network projects for chemistry: WignerFlow, YLM, and Ouroboros.',
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
