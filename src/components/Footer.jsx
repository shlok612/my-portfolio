import { ArrowUpFromDot } from "lucide-react"

export const Footer=()=>{
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center ">
     <p className="text-sm text-xl text-muted-foreground">
        &copy; {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} <b>Shlok Katiyar, All rights are mine.</b>
      </p>

      <a href="#me" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"><ArrowUpFromDot /></a>
    </footer>
  )
}