import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Projects />

      {/* Contact Section placeholder */}
      <section id="contact" className="py-24 relative z-10 text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-400 mb-8">
            Interested in collaborating or discussing the intersection of tech
            and education? I&apos;m currently open for new opportunities.
          </p>
          <a
            href="mailto:sllsll27@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors border border-slate-700"
          >
            Say Hello
          </a>
        </div>
      </section>
    </div>
  );
}
