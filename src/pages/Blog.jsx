import React from 'react';
import Header from '../components/Header';
import BlogCard from '../components/BlogCard';
import BlogDescription from '../components/BlogDescription';
import blog1 from '../assets/blog/blog1.png';
import blog2 from '../assets/blog/blog2.png';
import blog3 from '../assets/blog/blog3.png';
import blogCloud from '../assets/blog/blog-cloud.png';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Blog = () => {
  const blogCards = [
    {
      id: 1,
      image: blog1,
      title: "How automation is reshaping trade finance: A look into the future of program servicing",
      author: "Matthew D.",
      date: "20.07.2025",
      description: "The trade finance landscape is undergoing a significant transformation, driven by advancements in automation and digital infrastructure. As traditional processes become increasingly outdated, institutions are shifting towards intelligent, automated solutions that streamline operations and reduce manual intervention.",
      onReadMore: () => console.log('Read more about automation')
    },
    {
      id: 2,
      image: blog2,
      title: "End-to-End visibility in trade finance: Why It matters more than ever",
      author: "David M.",
      date: "28.07.2025",
      description: "In today's fast-paced financial environment, the ability to track every document, transaction, and process from initiation to completion is crucial. End-to-end visibility provides transparency, reduces risks, and enables better decision-making across the entire trade finance ecosystem.",
      onReadMore: () => console.log('Read more about visibility')
    },
    {
      id: 3,
      image: blog3,
      title: "The rise of Intelligent Ecosystems: How TPS, FMT, CMT & GMT work together seamlessly",
      author: "Maria A.",
      date: "27.07.2025",
      description: "Financial ecosystems are evolving, and standalone tools are no longer sufficient. The integration of TPS, FMT, CMT, and GMT creates a comprehensive solution that addresses all aspects of trade finance, from processing to compliance and monitoring.",
      onReadMore: () => console.log('Read more about ecosystems')
    }
  ];

  const featuredArticle = {
    title: "Building a Connected Trade Finance Stack: Why APIs - and AI - Matter",
    description: "In trade finance, speed and certainty hinge on how well your systems talk to each other. By pairing TPS with KS-TF tools—FMT for financial workflows, CMT for compliance, and the AI-assisted OMT for operations—institutions move from manual handoffs to orchestrated, end-to-end processing. API connections pull billing data directly from ERP, sync payment updates from program accounts, and ingest COF/FX rates from trusted sources, while TPS monitors credit limits, validates documents, and surfaces real-time reporting in one portal. The result is fewer errors, clearer audit trails, and a faster path from onboarding to settlement. For banks and fintechs scaling Distribution and Payables Financing, a connected, AI-enabled stack isn't just an upgrade—it's the foundation for resilient, compliant growth.",
    image: blogCloud,
    onReadMore: () => console.log('Read more about APIs and AI')
  };

  return (
    <>
    <div className="min-h-screen bg-[var(--bg-color)]">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Blog Cards Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogCards.map((card) => (
              <BlogCard
                key={card.id}
                image={card.image}
                title={card.title}
                author={card.author}
                date={card.date}
                description={card.description}
                onReadMore={card.onReadMore}
              />
            ))}
          </div>
        </section>

        {/* Featured Article Section */}
        <section>
          <BlogDescription
            title={featuredArticle.title}
            description={featuredArticle.description}
            image={featuredArticle.image}
            onReadMore={featuredArticle.onReadMore}
          />
        </section>
      </main>
    </div>
    <ContactSection />
    <Footer />
    </>
  );
};

export default Blog;
