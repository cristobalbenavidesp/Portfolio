import AnchorButton from "./components/ui/AnchorButton";
import AnchorDarkButton from "./components/ui/AnchorDarkButton";
import {SiLinkedin, SiGithub, SiReact, SiTailwindcss} from "react-icons/si"
import ProjectCard from "./components/ProjectCard";
import TodoPreview from "./assets/todo_preview.png"
import TriviaPreview from './assets/trivia_preview.png'
import H1 from "./components/ui/H1";
import type { ReactElement } from "react";
import P from "./components/ui/P";
import AnchorLink from "./components/ui/AnchorLink";

export default function App(): ReactElement {
  return (
    <div className="h-full bg-gradient-to-b from-[#2774B9] via-[#2774B9] to-[#398ae7] pb-20">
      <section className="bg-no-repeat bg-layeredPeaks pb-20 px-5 pt-20">
        <strong className="text-5xl font-bold text-white">I&apos;m Cristobal Benavides, a frontend developer</strong>
        <section className="flex gap-4 mt-20">
          <AnchorButton href="https://linkedin.com">
            <span>Linkedin</span>
            <SiLinkedin/>
          </AnchorButton>
          <AnchorDarkButton href="https://github.com/cristobalbenavidesp">
            <span>Github</span>
            <SiGithub/>
          </AnchorDarkButton>
        </section>
      </section>
      
      <H1>Projects</H1>
      <section className="w-full grid place-items-center">
        <ProjectCard title="#todo" desc="A challenge from devChallenges.io" imgSource={TodoPreview} href="https://neon-paprenjak-b949e3.netlify.app/">
          <SiReact className="text-[#3191ff]"/>
          <SiTailwindcss className="text-[#2cbbd4]"/>
        </ProjectCard>
        <ProjectCard title="#trivia" desc="A simple trivia game in which you have to answer as many questions without getting it wrong, the question changes every 10 seconds, so you have to think fast." imgSource={TriviaPreview} href="https://amazing-concha-0e0357.netlify.app/">
          <SiReact className="text-[#3191ff]"/>
          <SiTailwindcss className='text-[#2cbbd4]'/>
        </ProjectCard>
      </section>
      <H1>About Me</H1>
      <P>Since I was a child, I have been excited by the idea of having the ability to do things from scratch, thus being able to create things that do not yet exist, for this reason, when I discovered programming, I knew that it was what I should dedicate myself to. </P>
      <H1>Contact Me</H1>
      <P>You can download my CV by clicking on <AnchorLink href="aaa">this link</AnchorLink> and contact me via <AnchorLink href="aaa">linkedin</AnchorLink> or by completing the following form.</P>
      <form className="w-full px-5 flex flex-col items-center mt-14 gap-3">
        <input className="p-2 w-[18rem]"/>
        <input className="p-2 w-[18rem]"/>
        <textarea className="p-2 w-[18rem] resize-none h-[10rem]"/>
        <button className="border mt-5 bg-white/70 hover:bg-white/80 border-neutral-700 py-2 flex w-36 place-content-center justify-center gap-3 place-items-center backdrop-blur-md rounded-xl text-lg font-semibold text-black">Submit</button>
      </form>
    </div>
  )
}