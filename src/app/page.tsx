import { Audience } from "@/components/Audience";
import { Benefits } from "@/components/Benefits";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Audience />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
