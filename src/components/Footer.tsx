export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950 py-12 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 font-bold text-sm">
            L
          </div>
          <span className="text-slate-400 text-sm font-medium">
            Lulin &copy; {new Date().getFullYear()}
          </span>
        </div>
        
        <div className="text-sm text-slate-500">
          Built with Next.js & Tailwind CSS. Hosted on Vercel.
        </div>
      </div>
    </footer>
  );
}
