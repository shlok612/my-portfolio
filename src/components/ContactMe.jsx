import { Linkedin, Mail, Phone, SendHorizontal } from "lucide-react"
import { cn } from "../lib/utils"


export const ContactMe=()=>{


  const handleSubmit=(e)=>{
    e.preventDefault();

  }

  return (<section id="contact" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Get in <span className="text-primary">Touch</span>
      </h2>

      <p className="text-2xl text-center font-semibold text-muted-foreground mb-12 max-w-2xl mx-auto">
        I am open to Collaborations on web projects, feel free to reach me out.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        <div className="space-y-8 mt-8">
          <h3 className="text-3xl font-bold mb-6 ">Contact Information</h3>
          <div className="space-y-6 justify-center mb-6">
            <div className="flex items-start space-x-4 ">
              <div className="p-3 rounded-full bg-primary/10"><Mail className="h-10 w-10 text-primary "/>
              </div>
              <div><h4 className="font-semibold text-2xl ">Email</h4>
              <a href="mailto:shlokkatiyar@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-2xl ml-3">shlokkatiyar@gmail.com</a></div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10 "><Phone className="h-10 w-10 text-primary text-2xl"/>
              </div>
              <div><h4 className="font-semibold text-2xl ml-18">Phone no.</h4>
              <a href="tel:+919118843402" className="text-muted-foreground hover:text-primary transition-colors text-2xl ml-14">+91 9118843402</a></div>
            </div>
          </div>
          <div className="pt-8">
            <h4 className="text-3xl font-bold mb-6">Connect with me</h4>
            <div className="flex space-x-4 justify-center">
              <a href="https://www.linkedin.com/in/shlok-katiyar-4847bb362/" target="_blank">
                <Linkedin size={45}></Linkedin>
              </a>
              

            </div>
          </div>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-xs">
          <h3 className="text-3xl font-bold mb-6">Send a message</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-xl font-semibold mb-2">Your Name</label>
              <input type="text" id="name" name="name" required
              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary" placeholder="ex : shlok katiyar"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-xl font-semibold mb-2">Your Email</label>
              <input type="email" id="email" name="email" required
              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary" placeholder="ex : shlokkatiyar62@gmail.com"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-xl font-semibold mb-2">Your Message</label>
              <textarea id="message" name="message" required
              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none" placeholder="You're work is just amazing....."/>
            </div>
            <button typeof="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2 text-lg md:text-xl", )}>Send <SendHorizontal /></button>
          </form>
        </div>

      </div>
    </div>
  </section>)
}