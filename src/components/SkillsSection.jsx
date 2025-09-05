import htmlcssLogo from '../assets/htmlcss.jpeg';
import bootstrapLogo from '../assets/boot.jpeg';
import jsLogo from '../assets/javascript.png';
import tsLogo from '../assets/ts.png';
import reactLogo from '../assets/react.png';
import javaLogo from '../assets/java.png';
import pythonLogo from '../assets/python.jpeg';
import gitLogo from '../assets/git.png';
import vscodeLogo from '../assets/vs.jpeg';


const skills=[
  {name:"HTML/CSS", logo: htmlcssLogo, level:95},
  {name:"BOOTSTRAP/TAILWIND CSS", logo: bootstrapLogo, level:95},
  {name:"JAVASCRIPT", logo: jsLogo, level:80},
  {name:"TYPESCRIPT", logo: tsLogo, level:95},
  {name:"REACT", logo: reactLogo, level:80},
  {name:"JAVA", logo: javaLogo, level:100},
  {name:"PYTHON", logo: pythonLogo, level:95},
  {name:"GIT/GITHUB", logo: gitLogo, level:95},
  {name:"VS CODE", logo: vscodeLogo, level:75}
]

export const SkillsSection=()=>{
  return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        My <span className="text-primary">Skills</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill,key)=>(
          
          <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
            <div className="flex flex-col items-center mb-4 gap-2">
              <img
                src={skill.logo}
                alt={skill.name + " logo"}
                className="w-25 h-29 object-contain"
                loading="lazy"
              />
              <h3 className="font-semibold text-xl mt-2">{skill.name}</h3>
            </div>
  <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
    <div
      className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
      style={{width: skill.level+"%"}}
    />
  </div>
</div>

        ))}
      </div>


    </div>
        <div className="max-w-4xl mx-auto mt-50 my-12 p-6 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 rounded-2xl shadow-lg text-white text-center font-semibold text-lg md:text-2xl tracking-wide">
          I am passionately mastering<br></br> <span className="text-yellow-400">Data Structures and Algorithms</span> in <span className="text-yellow-400">Java</span>, <br></br>
          striving for excellence in this ever-evolving field. <br></br>With a solid foundation in <span className="underline decoration-yellow-300">algorithmic thinking</span> and problem-solving, I am dedicated to crafting efficient, elegant solutions that push the boundaries of technology.
        </div>
  </section>
}