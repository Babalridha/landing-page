export interface NewsItem {
  slug: string;
  title: string;
  subtitle?: string;
  tag: string;
  iconName: string;
  type: string;
  image: string;
  date: string;
  content: string; // HTML content
  readTime: string;
}

export const newsItems: NewsItem[] = [
  {
    slug: 'brisc-13-closing-ceremony',
    title: 'BRISC 13 Closing Ceremony',
    tag: 'YouTube',
    iconName: 'youtube',
    type: 'video',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800',
    date: 'June 10, 2026',
    readTime: '5 min watch',
    content: `
      <p class="mb-4">We are delighted to announce the successful completion and closing ceremony of BRISC 13, our flagship summer intensive program. This year's ceremony was broadcast live and features reflections from both mentors and students who joined us from across the globe.</p>
      
      <p class="mb-4">Over the course of the intensive, participants engaged in deep study of theology, history, and practical community leadership. The ceremony highlights key achievements, student presentations, and a concluding address by our Head of Institute, Shaykh Amini.</p>
      
      <p class="mb-4">Watch the full ceremony recording on YouTube to experience the culmination of this rigorous academic and spiritual journey.</p>
      
      <div class="my-8 rounded-2xl overflow-hidden aspect-video shadow-lg">
        <iframe class="w-full h-full min-h-[300px] md:min-h-[450px]" src="https://www.youtube.com/embed/ndSxGP6isU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    `
  },
  {
    slug: 'lofty-stations',
    title: 'The Lofty Stations',
    subtitle: 'By Shaykh Abbas Qummi',
    tag: 'Publication',
    iconName: 'book',
    type: 'book',
    image: 'https://images.unsplash.com/photo-1544640808-32ca72ac7f37?auto=format&fit=crop&q=80&w=800',
    date: 'May 28, 2026',
    readTime: '4 min read',
    content: `
      <p class="mb-4">Bab al-Ridha publications is proud to announce the release of the English translation of "The Lofty Stations" (Manazil al-Akhirah) by the legendary scholar Shaykh Abbas Qummi.</p>
      
      <p class="mb-4">This classical text offers a profound journey through the stages of the afterlife, drawing extensively from Quranic verses and the traditions of the Ahlulbayt. Carefully translated and annotated for the contemporary English-speaking reader, this work serves as an essential manual for spiritual self-reckoning and soul purification.</p>
      
      <p class="mb-4">Copies are now available for purchase globally through our publications portal. Check the link below to get your copy today.</p>
    `
  },
  {
    slug: 'islamic-philosophy',
    title: 'Islamic Philosophy',
    subtitle: 'By Dr. Leganhausen',
    tag: 'Course',
    iconName: 'graduation-cap',
    type: 'course',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
    date: 'May 15, 2026',
    readTime: '8 min read',
    content: `
      <p class="mb-4">Enrolment is now open for our upcoming semester course: "Introduction to Islamic Philosophy" led by the esteemed professor Dr. Gary Leganhausen.</p>
      
      <p class="mb-4">This course will walk students through the major historical epochs of Islamic philosophical thought, covering the peripatetic (Mashsha'i), illuminationist (Ishraqi), and transcendent (Hikmat al-Muta'aliyah) traditions. Students will explore key philosophical problems such as the nature of existence, knowledge, and the relationship between faith and reason.</p>
      
      <p class="mb-4">Lectures will be held weekly starting next month via our Online Learning Platform (OLP). Register now to secure your spot.</p>
    `
  },
  {
    slug: 'mashhad-trip-highlights',
    title: 'Mashhad Trip Highlights',
    tag: 'Event',
    iconName: 'map-pin',
    type: 'event',
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=800',
    date: 'April 22, 2026',
    readTime: '3 min read',
    content: `
      <p class="mb-4">Students from our core leadership program recently concluded a spiritual pilgrimage and academic seminar in the holy city of Mashhad, Iran.</p>
      
      <p class="mb-4">The highlights video and photo gallery capture the intense spiritual atmosphere at the Holy Shrine of Imam Ali al-Ridha (a.s.), along with academic workshops conducted in collaboration with local research institutions. Students participated in round-table discussions on modern theological challenges and visited historical landmarks.</p>
      
      <p class="mb-4">We are grateful to all coordinators and hosts who made this transformative experience possible for our cohort.</p>
    `
  }
];
