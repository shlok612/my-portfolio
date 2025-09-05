import { Code, Github } from "lucide-react"

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