import { Code, Github, Monitor, Server, Database } from "lucide-react";

export const ProjectsSection=()=>{
  return (
  <section id="projects" className="py-24 px-4 relative">
    <div className="text-3xl md:text-4xl font-semibold mb-4 text-center ">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        Featured <span className="text-primary">Projects </span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Here are some of my recent projects, Looking forward to add more better projects in the future
      </p>
       
    </div>

    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-12 text-center">
        <img
          src="/mahindraclone.png"
          alt="Mahindra Website Screenshot"
          className="mx-auto mb-4 rounded-lg border border-gray-300 max-w-auto max-h-96"
        />
        <h3 className="text-2xl font-semibold mt-5">Mahindra Animated Website</h3>
        
        <p className="text-center text-muted-foreground mb-8 mt-5 max-w-2xl mx-auto text-xl"> Built by React, Tailwind CSS and GSAP</p>
        <a href="https://mahindra-clone.vercel.app/" target="_blank" rel="noopener noreferrer" className="cosmic-button px-8 py-4 text-2xl sm:text-xl ">Check it Out</a>
        <div className="flex justify-center gap-6 mt-8 text-gray-600">
          <Monitor size={32} title="Frontend (React)" />
          <Server size={32} title="Backend (Node.js)" />
          <Database size={32} title="Database" />
          
        </div>
      </div>



    <div className="text-center mt-12">
      <a className="btn w-fit flex items-center mx-auto gap-2 text-xl sm:text-2xl" href="https://github.com/shlok612" target="_blank">
        Check my Github <Github /> </a>
    </div>
    <div className="text-center mt-12">
      <a className="btn2 w-fit flex items-center mx-auto gap-2 text-xl sm:text-2xl" href="https://leetcode.com/u/shlok_612/" target="_blank">
        My Leetcode <Code /> </a>
    </div>
    
  </section>
  )
}