export const skillGroups = [
  {
    id: 'people',
    label: 'Non-Technical',
    title: 'Non-Technical Skills',
    groups: [{ label: 'Kolaborasi & Profesional', items: [
      'Critical Thinking', 'Communication', 'Teamwork & Collaboration', 'Leadership',
      'Problem Solving', 'Time Management', 'Public Speaking', 'Attention to Detail',
      'Organizational Skills'
    ] }]
  },
  {
    id: 'technical',
    label: 'Technical',
    title: 'Technical Skills',
    groups: [
      { label: 'Biology & Laboratory', items: [
        'Microbiology', 'Molecular Biology (PCR)', 'Laboratory Techniques', 'Vegetation Inventory',
        'Biodiversity Identification', 'Environmental Sampling'
      ] },
      { label: 'Research & Data', items: [
        'Scientific Literature Review', 'Scientific Writing', 'Research Proposal Development',
        'Data Analysis', 'Basic Spatial Mapping (QGIS)', 'Biological Sequence Analysis (BLAST)'
      ] },
      { label: 'Media & Administration', items: [
        'Graphic Design', 'Documentation & Editing', 'Social Media Management',
        'Event Administration', 'Microsoft Office'
      ] }
    ]
  },
  {
    id: 'tools',
    label: 'Software & Tools',
    title: 'Software & Tools',
    groups: [{ label: 'Perangkat yang digunakan', items: [
      'Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Google Docs',
      'Google Sheets', 'Canva', 'CapCut', 'IBM SPSS', 'QGIS', 'BLAST'
    ] }]
  }
] as const;

export interface CertificateRecord {
  name: string;
  organizer: string;
  year: string;
  image: string;
  url: string;
}

export const certificates: CertificateRecord[] = [];

export const organizations = [
  {
    name: 'UKM Penalaran Universitas Airlangga',
    period: '2024–Present',
    roles: ['Staff Media & Information (Mendinfo)', 'Public Relations', 'Publication & Documentation', 'Medical Coordinator']
  },
  {
    name: 'Himpunan Mahasiswa Biologi (HIMA) UNAIR',
    period: '2024–Present',
    roles: ['Member of Scientific Division']
  },
  {
    name: 'Kelompok Studi Serangga (Neoptera)',
    period: '',
    roles: ['Active Member']
  }
] as const;

export const committees = [
  { role: 'Staff Ahli Medis', event: 'Pendekar Fest', year: '2026' },
  { role: 'Medical Coordinator', event: 'UKM Events', year: '' },
  { role: 'Staff Keilmuan', event: 'Seminar & Workshop', year: '' },
  { role: 'Medical Staff', event: 'OSPEK Pendekar', year: '2025' },
  { role: 'Publication, Documentation & Design Committee', event: '', year: '' }
] as const;

export const awards = [
  { title: 'Google Student Ambassador', year: '2026', category: 'Student Ambassador' },
  { title: 'Semifinalist, PKM UNAIR (PKM-PM)', year: '2025', category: 'Research & Community' },
  { title: 'FST Young Entrepreneur', year: '2026', category: 'Funding Recipient' },
  { title: 'OSN Biology', year: '', category: 'Biology' },
  { title: 'KSM Biology', year: '', category: 'Biology' },
  { title: 'Porseni UNAIR', year: '', category: 'Graphic Design' },
  { title: 'PKM FST Cup', year: '', category: 'Competition' }
] as const;

export const volunteerPrograms = [
  {
    name: 'Gerakan Desa BEM Universitas Airlangga',
    role: 'Medical Team Member',
    year: '2026',
    description: 'Kegiatan pengabdian masyarakat yang menggabungkan dukungan kesehatan, edukasi, dan kepedulian lingkungan.',
    activities: ['Free Livestock Injection Program', 'Community Health Education', 'Dental Health Education', 'Environmental Greening Program'],
    documentation: ''
  },
  {
    name: 'Environmental Conservation Activities',
    role: 'Volunteer',
    year: '',
    description: 'Kegiatan konservasi dan edukasi lingkungan berbasis partisipasi masyarakat.',
    activities: ['Planting 200 Trees at Puthuk Sempu', 'Solar Panel Installation', 'Community-Based Environmental Education'],
    documentation: ''
  },
  {
    name: 'Medical & Community Support',
    role: 'Medical Support Volunteer',
    year: '',
    description: 'Dukungan kesehatan dan kesiapsiagaan dalam kegiatan mahasiswa serta aktivitas pengabdian masyarakat.',
    activities: ['Health Assistance During Student Events', 'Medical Support and Emergency Preparedness', 'Community Service Activities'],
    documentation: ''
  }
] as const;