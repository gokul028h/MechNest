// src/components/home/BlogSection.jsx
import React from "react";
import CardBox from "../common/CardBox";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";

export default function BlogSection() {
  const blogs = [
    {
      title: "The Engineer's Dilemma: Creo vs. SolidWorks in 2025",
      excerpt:
        "An in-depth comparison of two of the most powerful CAD tools on the market to help you decide which is right for your team's workflow.",
      image: img1,
      address:"https://formlabs.com/global/blog/gdt-geometric-dimensioning-and-tolerancing/?srsltid=AfmBOooLeJQYAmumE7bNtHyh5gIYBKdnEwV__xQtNzmBIRIPETReK1IB",
    },
    {
      title: "Optimizing Part Durability with ANSYS Fatigue Analysis",
      excerpt:
        "Discover how we use finite element analysis to predict product lifespan, prevent failures, and enhance durability in demanding applications.",
      image: img3,
      address:"https://www.ansys.com/products/structures/ansys-ncode-designlife#:~:text=Optimize%20Product%20Fatigue%20Life%20for,Easy%2Dto%2DUse%20User%20Interface",
    },
    {
      title: "5 Tips for Effective Geometric Dimensioning & Tolerancing (GD&T)",
      excerpt:
        "A practical guide to mastering GD&T, ensuring your manufacturing drawings are clear, concise, and reduce production errors.",
      image: img2,
      address:"https://en.wikipedia.org/wiki/Geometric_dimensioning_and_tolerancing",
    },
  ];

  return (
    <section id="blog" className="blog-section py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-3">
            Latest Insights from Our Blog
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded mb-4" />
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto text-lg">
            Stay updated with industry trends, expert articles, and company news
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, idx) => (
            <CardBox key={idx} as="article" className="overflow-hidden">
              <img src={blog.image} alt={blog.title} loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{blog.title}</h3>
                <p className="text-gray-700 mt-2">{blog.excerpt}</p>
                <a href={blog.address} target="_blank" rel="noopener noreferrer" className="text-blue-600 mt-2 inline-block font-semibold">
                  Read More &rarr;
                </a>
              </div>
            </CardBox>
          ))}
        </div>
      </div>
    </section>
  );
}
