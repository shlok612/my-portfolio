import { ChevronDown } from "lucide-react"
import Shlokprof from '../assets/Shlokprof.jpg';

export const MeSection=()=>{
  return <section id="me"
  className="relative min-h-screen flex flex-col items-center justify-center px-4">
    <div className="container max-w-4xl mx-auto text-center z-10">
      
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div>
          <img
            src={Shlokprof}
            alt="Shlok Katiyar"
            className="mx-auto rounded-full w-56 h-56 md:w-64 md:h-64 object-cover" style={{ marginBottom: '2.5rem' }}
          />
        </div>
      </div>

      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="opacity-0 animate-fade-in">Hi, I'm </span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1">Shlok </span>
          <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Katiyar</span>
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground max-2-xl mx-auto opacity-0 animate-fade-in-delay-3">
          <i>I’m a passionate and curious learner currently pursuing my engineering degree. With a strong foundation in Java, Data Structures & Algorithms JavaScript, and React. I enjoy building projects that blend creativity with functionality.</i></p>
          <div>
            <a href="#projects" className="cosmic-button opacity-0 animate-fade-in-delay-4 px-8 py-2 text-lg md:text-xl">
              Have a Look at My Projects
            </a>
          </div>
      </div>
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"><span className="text-xl text-muted-foreground">Scroll</span><a href="#about"><ChevronDown /></a></div>
  </section>
}