import { BookOpen, Code, GraduationCap, MapPin } from 'lucide-react';
import ShlokCV from '../assets/shlok.cv.pdf';

export const AboutSection=()=>{
  return <section id="about" className="py-24 px-4 relative">
    {""}
    <div className="container mx-auto max-w-5xl">

      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        About <span className="text-primary">Me </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-4xl font-semibold">Passionate Web Developer </h3>
          <p className="text-2xl text-muted-foreground">
            I specialize in creating responsive and modern web applications with an experience of over a year to it.

          </p>

          <p className="text-2xl text-muted-foreground">
            I'm a quick learner and a curious one too, i like to constantly learn new technologies in the web landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button px-8 py-4 text-2xl sm:text-2xl">Get in touch</a>
            <a href={ShlokCV} target="_blank"
              rel="noopener noreferrer"className="px-8 py-4 rounded-full border border-primary text-xl sm:text-2xl text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a> 
                      </div>
        </div>
        <div className='grid grid-cols-1 gap-6 '>
          <div className='bg-card/80 rounded-xl gradient-border  p-6 card-hover '>
            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-full bg-primary/10'>
              <BookOpen className="h-6 w-6 text-primary"/>
              </div>
              <div className='text-left'>
                <h4 className='font-semibold text-xl'>High School</h4>
                <p className='text-lg text-muted-foreground'>Euro International School (Delhi)</p>
              </div>
            </div>

          </div>
          <div className='bg-card/80 rounded-xl gradient-border p-6 card-hover'>
            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-full bg-primary/10'>
              <GraduationCap className="h-6 w-6 text-primary"/></div>
              <div className='text-left'>
                <h4 className='font-semibold text-xl'>B.Tech undergrad at</h4>
                <p className='text-lg text-muted-foreground'>Institute of Technical Education and Research</p>
              </div>
            </div>

          </div>
          <div className='bg-card/80 rounded-xl gradient-border p-6 card-hover'>
            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-full bg-primary/10'>
              <MapPin className="h-6 w-6 text-primary"/></div>
              <div className='text-left'>
                <h4 className='font-semibold text-xl'>Currently in</h4>
                <p className='text-lg text-muted-foreground'>Bhubaneshwar, Odisha</p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  </section>
}