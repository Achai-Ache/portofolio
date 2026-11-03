import type { ProfileData, Project, TechItem, ExperienceItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Achai Ridho Dhavita',
  tagline: 'Biology Student & Environmental Science Enthusiast',
  education: 'Biologi (S1) • Universitas Airlangga',
  status: 'Terbuka untuk kolaborasi biologi dan lingkungan',
  bio: 'Mahasiswa Biologi Universitas Airlangga yang tertarik pada biodiversitas, ekologi, mikrobiologi, dan hubungan ekosistem dengan kehidupan sehari-hari.',
  experienceStart: 'Mahasiswa Biologi',
  avatarUrl: '/avatar.svg',
  interests: [
    'Ekologi dan biodiversitas',
    'Mikrobiologi',
    'Ilmu lingkungan',
    'Konservasi',
    'Keanekaragaman hayati',
    'Biologi pangan'
  ],
  contact: {
    email: 'achaidhavita71@gmail.com',
    github: 'https://github.com/ryhndastra',
    linkedin: 'https://linkedin.com/in/achai-astra',
    location: 'Indonesia'
  }
};

export const techStackData: TechItem[] = [
  {
    name: 'TypeScript',
    category: 'frontend',
    layer: 'client',
    iconKey: 'typescript',
    color: '#3178C6',
    roleTag: 'Type Contracts',
    usageContext: 'Type-safe contracts across full-stack applications and component props',
    projectLinks: ['cimart', 'kalorin-ai']
  },
  {
    name: 'React',
    category: 'frontend',
    layer: 'client',
    iconKey: 'react',
    color: '#0284c7',
    roleTag: 'Component UI',
    usageContext: 'Component-driven UI, state management, custom hooks, and interactive flows',
    projectLinks: ['cimart', 'kalorin-ai']
  },
  {
    name: 'Next.js',
    category: 'frontend',
    layer: 'client',
    iconKey: 'nextdotjs',
    color: '#0f172a',
    roleTag: 'App Framework',
    usageContext: 'Server-side rendering, static generation, and edge routing',
    projectLinks: ['cimart']
  },
  {
    name: 'Flutter',
    category: 'mobile',
    layer: 'client',
    iconKey: 'flutter',
    color: '#0284c7',
    roleTag: 'Native Mobile',
    usageContext: 'Cross-platform native mobile apps for iOS and Android with 60fps reactive UI',
    projectLinks: ['villanakey']
  },
  {
    name: 'Tailwind CSS v4',
    category: 'frontend',
    layer: 'client',
    iconKey: 'tailwindcss',
    color: '#06b6d4',
    roleTag: 'Design Tokens',
    usageContext: 'Modern utility-first styling, design tokens, and fluid responsive layouts',
    projectLinks: ['cimart', 'kalorin-ai']
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    layer: 'client',
    iconKey: 'javascript',
    color: '#eab308',
    roleTag: 'Scripting Core',
    usageContext: 'Core web scripting, DOM events, and asynchronous event loops',
    projectLinks: ['cimart']
  },

  // backend engine layer
  {
    name: 'Laravel',
    category: 'backend',
    layer: 'backend',
    iconKey: 'laravel',
    color: '#ef4444',
    roleTag: 'MVC & REST Engine',
    usageContext: 'Robust REST APIs, Inertia backend routing, authentication, and transaction handling',
    projectLinks: ['cimart']
  },
  {
    name: 'Node.js',
    category: 'backend',
    layer: 'backend',
    iconKey: 'nodejs',
    color: '#22c55e',
    roleTag: 'Server Runtime',
    usageContext: 'High-throughput microservices, real-time WebSockets, and build automation tooling',
    projectLinks: ['kalorin-ai']
  },

  // database and cloud persistence layer
  {
    name: 'PostgreSQL',
    category: 'backend',
    layer: 'database',
    iconKey: 'postgresql',
    color: '#2563eb',
    roleTag: 'Relational Core',
    usageContext: 'Relational data modeling, complex queries, indexing, and transactional integrity',
    projectLinks: ['kalorin-ai']
  },
  {
    name: 'Supabase',
    category: 'backend',
    layer: 'database',
    iconKey: 'supabase',
    color: '#10b981',
    roleTag: 'Cloud Postgres & Auth',
    usageContext: 'Managed Postgres backend, row-level security policies, real-time subscriptions, and auth',
    projectLinks: ['kalorin-ai']
  },
  {
    name: 'MySQL',
    category: 'backend',
    layer: 'database',
    iconKey: 'mysql',
    color: '#0284c7',
    roleTag: 'Transactional DB',
    usageContext: 'E-commerce relational database schemas, ACID transactions, and optimized indexing',
    projectLinks: ['cimart']
  },
  {
    name: 'Firebase',
    category: 'backend',
    layer: 'database',
    iconKey: 'firebase',
    color: '#f59e0b',
    roleTag: 'NoSQL & Real-Time Sync',
    usageContext: 'Cloud Firestore real-time calendar syncing, FCM push notifications, and Auth',
    projectLinks: ['villanakey', 'cimart']
  },
  {
    name: 'Prisma ORM',
    category: 'backend',
    layer: 'database',
    iconKey: 'prisma',
    color: '#6366f1',
    roleTag: 'Type-Safe ORM',
    usageContext: 'Type-safe database migrations, declarative schema modeling, and optimized queries',
    projectLinks: ['kalorin-ai']
  },

  // infrastructure and devops layer
  {
    name: 'Linux',
    category: 'tools',
    layer: 'devops',
    iconKey: 'linux',
    color: '#eab308',
    roleTag: 'System OS',
    usageContext: 'Primary Unix environment, Bash scripting, system service management, and workflow',
    projectLinks: ['cimart', 'villanakey', 'kalorin-ai']
  },
  {
    name: 'Docker',
    category: 'tools',
    layer: 'devops',
    iconKey: 'docker',
    color: '#0284c7',
    roleTag: 'Containerization',
    usageContext: 'Containerized deployment, multi-stage builds, and consistent staging environments',
    projectLinks: ['cimart']
  },
  {
    name: 'Git',
    category: 'tools',
    layer: 'devops',
    iconKey: 'git',
    color: '#f97316',
    roleTag: 'Version Control',
    usageContext: 'Version control, feature branching workflows, code reviews, and CI/CD pipelines',
    projectLinks: ['cimart', 'villanakey', 'kalorin-ai']
  },
  {
    name: 'Vercel',
    category: 'tools',
    layer: 'devops',
    iconKey: 'vercel',
    color: '#0f172a',
    roleTag: 'Edge Deployment',
    usageContext: 'Edge deployment, continuous integration, and global CDN delivery for web apps',
    projectLinks: ['kalorin-ai']
  }
];

export const projectsData: Project[] = [
  {
    id: 'cimart',
    title: 'CiMart (CibendaMart)',
    subtitle: 'Rural E-Commerce Platform for Desa Cibenda, Pangandaran',
    category: 'community',
    summary: 'Inisiatif kolaborasi kampus dan Desa Cibenda untuk mendukung pengenalan komoditas lokal, termasuk hasil pertanian, peternakan, perikanan, dan produk UMKM.',
    description: 'Karya lintas bidang yang mengangkat potensi komoditas dan kegiatan ekonomi Desa Cibenda, Pangandaran. Konteksnya bersinggungan dengan sistem pangan lokal dan hubungan masyarakat dengan sumber daya alam.',
    architecture: [
      'Mengangkat hasil pertanian, peternakan, dan perikanan sebagai bagian dari potensi desa',
      'Memperkenalkan produk dan komoditas UMKM lokal kepada masyarakat yang lebih luas',
      'Menjadi konteks untuk memahami keterkaitan sumber daya alam dan kehidupan masyarakat'
    ],
    stack: ['Pertanian', 'Peternakan', 'Perikanan', 'Komoditas lokal', 'UMKM'],
    highlights: [
      'Inisiatif resmi atas penugasan Warek & Prodi Biologi',
      'Mendukung komoditas sembako, pertanian, peternakan, perikanan, dan kerajinan',
      'Sistem pembayaran digital instan dan pemetaan akurat level desa'
    ],
    challenges: 'Menghubungkan beragam jenis komoditas lokal dan kebutuhan masyarakat dalam satu inisiatif kolaboratif.',
    role: 'Inisiatif kolaborasi kampus dan desa',
    demoUrl: 'https://cimart.desa.id',
    isPrivateRepo: true,
    privateRepoReason: 'Repository privat karena hak cipta institusi & kerahasiaan data',
    imageUrl: '/projects/CibendaMart.png',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Konteks', value: 'Pangan lokal' },
      { label: 'Komoditas', value: 'Pertanian & perikanan' },
      { label: 'Kolaborasi', value: 'Kampus & desa' }
    ]
  },
  {
    id: 'kalorin-ai',
    title: 'kalorinAi',
    subtitle: 'Platform Web Nutrisi & Tracking Kalori Berbasis Computer Vision AI',
    category: 'food',
    summary: 'Proyek lintas bidang tentang nutrisi dan pangan yang mengeksplorasi pencatatan asupan, komposisi makanan, dan rekomendasi menu harian.',
    description: 'Proyek capstone yang dikembangkan bersama tim enam orang. Fokus temanya adalah hubungan makanan, asupan gizi, dan kebiasaan konsumsi sehari-hari; ini merupakan proyek digital bertema nutrisi, bukan penelitian biologi.',
    architecture: [
      'Mengangkat tema gizi dan komposisi makanan dalam konteks kebiasaan konsumsi',
      'Mendorong perhatian pada asupan energi dan makronutrien',
      'Menyajikan gagasan rekomendasi menu sebagai bagian dari literasi pangan'
    ],
    stack: ['Nutrisi', 'Pangan', 'Makronutrien', 'Literasi gizi'],
    highlights: [
      'Capstone Project Dicoding CodingCamp 2026 Powered by DBS Foundation',
      'Deteksi citra makanan otomatis untuk kalkulasi makronutrien instan',
      'Sistem insight harian dan rekomendasi personal berbasis AI'
    ],
    challenges: 'Menyusun tema pangan dan nutrisi menjadi pengalaman yang mudah dipahami bersama tim lintas disiplin.',
    role: 'Proyek capstone lintas bidang',
    githubUrl: 'https://github.com/ryhndastra/kalorin-ai',
    demoUrl: 'https://kalorin-ai.vercel.app',
    imageUrl: '/projects/kalorinLogo.png',
    imageFit: 'contain',
    featured: true,
    metrics: [
      { label: 'Tim', value: '6 anggota' },
      { label: 'Tema', value: 'Nutrisi & pangan' },
      { label: 'Fokus', value: 'Literasi gizi' }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'edu-airlangga',
    period: '2023 - Sekarang',
    role: 'S1 Biologi',
    organization: 'Universitas Airlangga (Angkatan 2023)',
    badge: 'Pendidikan Formal',
    category: 'education',
    description:
      'Menempuh pendidikan Sarjana Biologi di Universitas Airlangga. Ketertarikan akademik mencakup ekologi, mikrobiologi, keanekaragaman hayati, dan ilmu lingkungan.',
    highlights: [
      'Mahasiswa Biologi angkatan 2023',
      'Minat pada ekologi dan keanekaragaman hayati',
      'Tertarik pada mikrobiologi dan ilmu lingkungan'
    ],
    tech: ['Biologi', 'Ekologi', 'Mikrobiologi', 'Ilmu Lingkungan', 'Biodiversitas']
  }
];
