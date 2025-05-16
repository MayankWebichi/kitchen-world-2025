import React, { useState } from 'react';
import SectionTitle from './common/SectionTitle';

type ProjectCategory = 'all' | 'modular-kitchen' | 'wardrobe' | 'interior' | 'before-after';

interface Project {
  id: number;
  title: string;
  category: ProjectCategory[];
  image: string;
  description: string;
}

// List of all image filenames in the images folder, excluding leader.jpeg
const imageFilenames = [
  "WhatsApp Image 2025-05-12 at 4.51.53 PM.jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.52 PM.jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.45 PM.jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.44 PM (1).jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.44 PM.jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.43 PM.jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.42 PM (1).jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.42 PM.jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.41 PM.jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.40 PM (2).jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.40 PM (1).jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.40 PM.jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.39 PM (1).jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.39 PM.jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.38 PM (1).jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.38 PM.jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.37 PM (1).jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.37 PM.jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.36 PM.jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.35 PM (1).jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.35 PM.jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.34 PM.jpeg",
  "WhatsApp Image 2025-05-12 at 4.51.33 PM.jpeg"
];

// Helper to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Shuffle and select images for projects
const shuffledImages = shuffleArray(imageFilenames);

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'modular-kitchen', label: 'Modular Kitchens' },
    { id: 'wardrobe', label: 'Wardrobes' },
    { id: 'interior', label: 'Interior Design' },
    { id: 'before-after', label: 'Before & After' }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Kitchen Showcase",
      category: ['modular-kitchen'],
      image: `images/${shuffledImages[0]}`,
      description: "A modern kitchen with premium finishes and smart storage solutions."
    },
    {
      id: 2,
      title: "Elegant Kitchen Transformation",
      category: ['modular-kitchen', 'before-after'],
      image: `images/${shuffledImages[1]}`,
      description: "Complete transformation of a traditional kitchen into a contemporary space."
    },
    {
      id: 3,
      title: "Spacious Family Kitchen",
      category: ['modular-kitchen'],
      image: `images/${shuffledImages[2]}`,
      description: "A spacious kitchen designed for family gatherings and efficient workflow."
    },
    {
      id: 4,
      title: "Luxury Interior Design",
      category: ['interior'],
      image: `images/${shuffledImages[3]}`,
      description: "Luxury living room and kitchen interior with custom lighting and decor."
    },
    {
      id: 5,
      title: "Kitchen Makeover",
      category: ['modular-kitchen', 'before-after'],
      image: `images/${shuffledImages[4]}`,
      description: "A dramatic kitchen makeover with new cabinetry and appliances."
    },
    {
      id: 6,
      title: "Premium Modular Kitchen",
      category: ['modular-kitchen'],
      image: `images/${shuffledImages[5]}`,
      description: "Premium modular kitchen with high-end finishes and innovative storage."
    },
    {
      id: 7,
      title: "Urban Apartment Interior",
      category: ['interior'],
      image: `images/${shuffledImages[6]}`,
      description: "Complete interior design for a modern urban apartment, focusing on space optimization."
    },
    {
      id: 8,
      title: "Compact Kitchen Design",
      category: ['modular-kitchen'],
      image: `images/${shuffledImages[7]}`,
      description: "Efficient kitchen design maximizing functionality in a compact space."
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeCategory));

  return (
    <section id="portfolio" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Our Portfolio"
          subtitle="Explore our latest projects and transformations"
        />
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mt-8 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as ProjectCategory)}
              className={`px-5 py-2 m-2 rounded-full transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-square">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                <p className="text-white/80 text-sm mt-1">{project.description}</p>
                <div className="mt-3">
                  <span className="text-xs text-white/70 bg-white/20 px-3 py-1 rounded-full">
                    {project.category.includes('modular-kitchen') ? 'Kitchen' : 
                     project.category.includes('wardrobe') ? 'Wardrobe' : 
                     project.category.includes('interior') ? 'Interior' : 'Before & After'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <div className="max-w-5xl w-full rounded-lg overflow-hidden bg-white" onClick={(e) => e.stopPropagation()}>
              <div className="relative aspect-video">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
                  onClick={() => setSelectedProject(null)}
                >
                  &times;
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-neutral-800">{selectedProject.title}</h3>
                <p className="text-neutral-600 mt-2">{selectedProject.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.category.map((cat) => (
                    <span key={cat} className="text-sm bg-neutral-100 px-3 py-1 rounded-full text-neutral-700">
                      {cat === 'modular-kitchen' ? 'Modular Kitchen' : 
                       cat === 'wardrobe' ? 'Wardrobe' : 
                       cat === 'interior' ? 'Interior Design' : 'Before & After'}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;