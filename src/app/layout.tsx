import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const sans=Geist({variable:"--font-geist-sans",subsets:["latin"]});
const mono=Geist_Mono({variable:"--font-geist-mono",subsets:["latin"]});
export const metadata:Metadata={title:"Lulin Shen — Software & Product Engineer",description:"Software engineer building thoughtful products at the intersection of engineering, AI, and learning."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className="scroll-smooth"><body className={`${sans.variable} ${mono.variable}`}><Navbar/><main>{children}</main><Footer/></body></html>}
