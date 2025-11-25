import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobsData = [
    {
      availability: "available",
      pay: 65,
      pic: "https://i.pinimg.com/736x/45/7e/23/457e23ba64ca4d2d0c3d7d35dda1a356.jpg",
      name: "Jane Nelson",
      designation: "Senior React Developer",
      company: "TechNexus Corp",
      tag1: "React",
      tag2: "TypeScript",
      tag3: "Tailwind",
      expe: "+7",
      descr:
        "Leading complex frontend architecture projects and mentoring junior developers.",
    },
    {
      availability: "working",
      pay: 40,
      pic: "https://i.pinimg.com/1200x/cb/c4/0e/cbc40eabc9e328f1c2216e7fefccfcd7.jpg",
      name: "Marcus Alston",
      designation: "UI/UX Designer",
      company: "Freelancer",
      tag1: "Figma",
      tag2: "UX",
      tag3: "Prototyping",
      expe: "+5",
      descr:
        "Crafting beautiful, user-centered digital experiences for mobile and web platforms.",
    },
    {
      availability: "available",
      pay: 80,
      pic: "https://i.pinimg.com/736x/6b/2c/eb/6b2cebd4e8c1591fa6b2ec39e9b66a45.jpg",
      name: "Sarah Lee",
      designation: "Full Stack Engineer",
      company: "Innovate Solutions",
      tag1: "Node.js",
      tag2: "MongoDB",
      tag3: "AWS",
      expe: "+8",
      descr:
        "End-to-end development of scalable applications from database to interface.",
    },
    {
      availability: "available",
      pay: 55,
      pic: "https://i.pinimg.com/1200x/68/ac/05/68ac059b327bae4018f2fd7d190af0e5.jpg",
      name: "Raj Patel",
      designation: "Mobile App Developer",
      company: "Freelancer",
      tag1: "React",
      tag2: "Expo",
      tag3: "Redux",
      expe: "+4",
      descr:
        "Specialized in cross-platform mobile development with native performance.",
    },
    {
      availability: "working",
      pay: 70,
      pic: "https://i.pinimg.com/736x/da/03/86/da0386d9cdf5cdd0ceff7ec1b0c91f0a.jpg",
      name: "Emily W. Lira",
      designation: "Data Analyst",
      company: "DataStream Inc.",
      tag1: "Python",
      tag2: "SQL",
      tag3: "Tableau",
      expe: "+6",
      descr:
        "Transforming raw datasets into actionable business intelligence and visualizations.",
    },
    {
      availability: "available",
      pay: 45,
      pic: "https://i.pinimg.com/736x/78/4a/7e/784a7e1baf0fb1b8f6a0095e82cd2c12.jpg",
      name: "Tom C. Chen",
      designation: "Junior Java Developer",
      company: "SoftDev Labs",
      tag1: "Java",
      tag2: "Spring",
      tag3: "API",
      expe: "+2",
      descr:
        "Building robust, scalable back-end services for large enterprise applications.",
    },
    {
      availability: "working",
      pay: 90,
      pic: "https://i.pinimg.com/1200x/91/eb/aa/91ebaa57516a35ba0e4488e6e4782eaf.jpg",
      name: "Kwame Mbiti",
      designation: "DevOps Engineer",
      company: "GlobalHost LLC",
      tag1: "Kubernetes",
      tag2: "Docker",
      tag3: "Terraform",
      expe: "+10",
      descr:
        "Automating infrastructure, CI/CD pipelines, and cloud resource management.",
    },
    {
      availability: "available",
      pay: 60,
      pic: "https://i.pinimg.com/736x/48/03/d9/4803d9f765ddfd663aaf084a628d6be3.jpg",
      name: "Anna H. Holm",
      designation: "Technical Writer",
      company: "Freelancer",
      tag1: "Document",
      tag2: "Markdown",
      tag3: "Git",
      expe: "+3",
      descr:
        "Creating clear, concise technical documents and user manuals for software products.",
    },
    {
      availability: "available",
      pay: 75,
      pic: "https://i.pinimg.com/736x/42/8e/f9/428ef940df32343489d4a7d15300287b.jpg",
      name: "David Ochoa",
      designation: "Security Specialist",
      company: "SecureNet Defense",
      tag1: "Testing",
      tag2: "Cheking",
      tag3: "Compliance",
      expe: "+5",
      descr:
        "Ensuring application and infrastructure security against modern cyber threats.",
    },
    {
      availability: "working",
      pay: 50,
      pic: "https://i.pinimg.com/1200x/d0/e1/0b/d0e10b85d6774ae5746d049af6dd6298.jpg",
      name: "Zoe P. Smith",
      designation: "Frontend Developer",
      company: "CodeSpark Agency",
      tag1: "HTML/CSS",
      tag2: "JavaScript",
      tag3: "A11y",
      expe: "+4",
      descr:
        "Building accessible and performance-optimized frontends for modern websites.",
    },
  ];

  return (
    <div className="main">
      {jobsData.map(function (user, idx) {
        return (
          <div key={idx}>
            <Card user={user} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
