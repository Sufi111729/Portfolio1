// export default function About() {
//   const timeline = [
//     {
//       year: "2022",
//       title: "The Craft",
//       subtitle: "Full Stack Java Developer",
//       institution: "Professional Training & Certification",
//       story: "Mastering the art of full-stack development",
//       funFact: "Built first REST API and felt like a digital architect",
//       icon: "⚡",
//       skills: "Spring Boot, React, MySQL, REST APIs",
//       achievement: "Industry-ready development expertise",
//     },
//     {
//       year: "2024-Present",
//       title: "Ready to Build",
//       subtitle: "Graduate Engineer & Code Craftsman",
//       institution: "Seeking New Opportunities",
//       story: "Ready to innovate and create meaningful solutions",
//       funFact: "Dreams of building systems that connect people",
//       icon: "🚀",
//       skills: "System Design, Team Collaboration, Innovation",
//       achievement: "Prepared for cutting-edge technology challenges",
//     },
//   ];

//   return (
//     <section className="about-section">
//       <div className="section-header">
//         <h2 className="section-title">
//           My <span className="title-accent">Journey</span>
//         </h2>
//         <p className="section-subtitle">
//           From learning to building — ready to create meaningful solutions.
//         </p>
//       </div>

//       <div className="timeline">
//         {timeline.map((item, index) => (
//           <div key={item.year} className="timeline-item">
//             <div className="timeline-marker">
//               <span className="timeline-icon">{item.icon}</span>
//               <span className="timeline-year">{item.year}</span>
//             </div>
            
//             <div className="timeline-content">
//               <div className="timeline-header">
//                 <h3 className="timeline-title">{item.subtitle}</h3>
//                 <span className="timeline-institution">{item.institution}</span>
//                 <span className="timeline-tag">{item.title}</span>
//               </div>
              
//               <p className="timeline-story">"{item.story}"</p>
              
//               <div className="timeline-details">
//                 <p className="timeline-skills">
//                   <strong>Key Skills:</strong> {item.skills}
//                 </p>
//                 <p className="timeline-achievement">
//                   <strong>Achievement:</strong> {item.achievement}
//                 </p>
//               </div>
              
//               <p className="timeline-funfact">
//                 <strong>Fun fact:</strong> {item.funFact}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="about-quote">
//         <p className="quote-text">"Clean code is poetry in motion"</p>
//         <p className="quote-subtext">Building systems that matter • Ready to innovate</p>
//       </div>
//     </section>
//   );
// }