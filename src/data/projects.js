import genWeb1 from "../assets/GenWeb1.png";
import genWeb2 from "../assets/GenWeb2.png";
import genWeb3 from "../assets/GenWeb3.png";
import genWeb4 from "../assets/GenWeb4.png";
import uber from "../assets/uber.png";
import uber1 from "../assets/uber1.png";
import uber2 from "../assets/uber2.png";
import uber3 from "../assets/uber3.png";
import chat1 from "../assets/img1.JPG";
import chat2 from "../assets/img2.JPG";
import chat3 from "../assets/img3.JPG";
import chat4 from "../assets/photo1.JPG";

export const projects = [
  {
    slug: "loanbook-fintech",
    title: "LoanBook Fintech Platform",
    shortTitle: "LoanBook",
    role: "End-to-end loan management system for financial institutions",
    description:
      "Developed an end-to-end loan management system for Kotak Mahindra, BSS, and Digamber, automating field agent approval workflows previously handled manually. Designed and implemented an encrypted offline loan management workflow using Room and Coroutines to meet financial security compliance requirements.",
    details:
      "Built under Clean Architecture with Jetpack Compose UI, using Room for local data persistence and Coroutines for asynchronous operations. Implemented encrypted offline storage to ensure data security even when device is compromised.",
    challenge:
      "The main challenge was implementing secure offline data storage that complies with financial industry security regulations while maintaining seamless synchronization when network connectivity is restored.",
    solution:
      "Used AES encryption for Room database, implemented background sync with WorkManager, and created a robust conflict resolution strategy for offline changes.",
    images: [genWeb1, genWeb2, genWeb3],
    accent: "#0066CC",
    tags: ["Kotlin", "Jetpack Compose", "Room", "Coroutines", "Clean Architecture", "RESTful APIs"],
  },
  {
    slug: "poolbrain",
    title: "PoolBrain",
    shortTitle: "PoolBrain",
    role: "Swimming pool maintenance management tool",
    description:
      "Built a management tool with responsive, multi-view UIs using RecyclerView and Room, enabling reliable offline data access for swimming pool maintenance professionals. Architected the app using MVVM with LiveData and Kotlin Coroutines to manage asynchronous background tasks, ensuring clean, testable code separation.",
    details:
      "Created a professional-grade application for pool maintenance technicians featuring offline-first design, comprehensive reporting, and equipment tracking capabilities.",
    challenge:
      "Ensuring reliable data synchronization between local storage and remote servers while handling intermittent network connectivity in outdoor pool environments.",
    solution:
      "Implemented Room database with proper relationship mapping, used Coroutines for background operations, and designed a robust sync strategy with exponential backoff retry mechanism.",
    images: [genWeb4, uber1, uber2],
    accent: "#00AA55",
    tags: ["Kotlin", "MVVM", "LiveData", "Room", "Coroutines", "RecyclerView", "Offline Sync"],
  },
  {
    slug: "ninja-focus",
    title: "Ninja Focus",
    shortTitle: "Ninja Focus",
    role: "Mindfulness and meditation app for children",
    description:
      "Developed a mindfulness and meditation app with background audio playback and custom Fragment Manager-driven animations, delivering an engaging, child-friendly user experience. Integrated Firebase Cloud Messaging for push notifications and designed smooth UI transitions to increase user engagement with new content.",
    details:
      "Created an immersive meditation experience specifically designed for children, featuring gamification elements, progress tracking, and parental controls.",
    challenge:
      "Creating smooth, engaging animations that work well on lower-end devices while maintaining battery efficiency for extended meditation sessions.",
    solution:
      "Used hardware-accelerated animations, optimized asset loading, and implemented adaptive quality settings based on device capabilities.",
    images: [chat1, chat2, chat3],
    accent: "#FF6B35",
    tags: ["Kotlin", "Java", "Media Player", "Animations", "Firebase Cloud Messaging", "Fragment Manager"],
  },
  {
    slug: "rakuten-cloud",
    title: "Rakuten Cloud Platform",
    shortTitle: "Rakuten Cloud",
    role: "Cloud infrastructure management platform",
    description:
      "Implemented features using both Java and Kotlin, ensuring smooth integration between the two languages. Integrated RESTful APIs to retrieve network data, implemented with Retrofit and OkHttp.",
    details:
      "Built a comprehensive cloud management platform with microservices architecture, featuring service monitoring, deployment automation, and scalability management tools.",
    challenge:
      "Ensuring seamless interoperability between Java and Kotlin components while maintaining consistent coding standards across the codebase.",
    solution:
      "Established clear interface contracts, used Kotlin's Java interoperability features effectively, and implemented comprehensive integration testing.",
    images: [chat4, uber3, genWeb1],
    accent: "#0052CC",
    tags: ["Java", "Kotlin", "Retrofit", "OkHttp", "Room", "SQLite", "Background Services", "Custom Views"],
  },
  {
    slug: "net-velocity",
    title: "Net Velocity",
    shortTitle: "Net Velocity",
    role: "Network speed testing application",
    description:
      "Built a speed test app measuring both cellular and WiFi network performance. Handled multithreading to run network speed tests and other operations asynchronously.",
    details:
      "Created a professional network diagnostic tool that provides accurate bandwidth measurements, latency testing, and connection quality analysis for both mobile and WiFi networks.",
    challenge:
      "Ensuring accurate network measurements while avoiding interference from background processes and handling various network types and conditions.",
    solution:
      "Used priority threads for network operations, implemented proper socket management, and applied statistical averaging techniques for more reliable results.",
    images: [uber, genWeb2, genWeb3],
    accent: "#0088CC",
    tags: ["Java", "Kotlin", "Native Sensors", "GPS", "Multithreading", "Runtime Permissions", "Media APIs"],
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);