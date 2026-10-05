import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const expertiseDetails = [
  {
    slug: "business-development",
    title: "BUSINESS DEVELOPMENT",
    subtitle: "Building meaningful partnerships across the media ecosystem",
    desc: "With a focus on international markets, Shambhoo identifies strategic growth opportunities and builds lasting relationships between studios, creators, and platforms worldwide.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=80",
    img2: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    paragraphs: [
      "Effective business development in the animation and VFX ecosystem requires more than just making connections; it requires an intrinsic understanding of the production pipeline and commercial realities.",
      "Over a career spanning three decades, Shambhoo has successfully executed business acquisition, marketing, and sales strategies across dozens of markets in over 30 nations.",
      "Whether it involves securing multi-million dollar co-productions, driving international IP sales, or interfacing with major networks like TV Asahi and Shin-Ei Doga (Japan), the focus is always on creating win-win scenarios that allow creative studios to scale efficiently."
    ]
  },
  {
    slug: "strategy",
    title: "STRATEGY",
    subtitle: "Connecting creative capabilities with commercial objectives",
    desc: "From content IP development to studio acquisition analysis, the focus is on creating long-term commercial viability for creative ideas without compromising artistic integrity.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
    img2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    paragraphs: [
      "In a rapidly changing media landscape, strategy is the bridge between a great idea and a successful product. Strategic consulting involves deep business analysis, evaluating studio acquisitions, and modeling content monetization.",
      "Key experiences include advising major players such as Reliance MediaWorks, Maya Entertainment, and Pentamedia Graphics on operational scaling and long-term positioning.",
      "Strategic operations also extend to costing, budgeting with granular input breakdowns, delivery analysis, bottleneck planning, and resolving conflicts to ensure high-stakes projects are delivered flawlessly."
    ]
  },
  {
    slug: "animation",
    title: "ANIMATION",
    subtitle: "Deep understanding of production and creative workflows",
    desc: "Having managed thousands of minutes of television animation and numerous feature films, Shambhoo brings a granular understanding of 2D, 3D, and VFX pipelines.",
    img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1920&q=80",
    img2: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    paragraphs: [
      "The true art of animation production lies in balancing creative ambition with schedule and budget constraints. Shambhoo has led teams executing 7 feature films and myriad TV series often in highly challenging conditions.",
      "This extensive portfolio includes directing India's 2006 Oscar entry 'Legend of Buddha' and providing production oversight for complex projects like 'Ramayana: The Epic' (3D), 'Krishana Aur Kamsa' (2D Flash), and 'Ninja Hattori'.",
      "From traditional hand-drawn pipelines to modern 3D and hybrid workflows, the ability to foresee bottlenecks and optimize delivery systems has been a consistent hallmark."
    ]
  },
  {
    slug: "media-entertainment",
    title: "MEDIA & ENTERTAINMENT",
    subtitle: "Navigating a rapidly evolving landscape",
    desc: "Experience across multiple facets of the entertainment industry, adapting to shifts in content distribution, audience consumption, and platform requirements.",
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1920&q=80",
    img2: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1200&q=80",
    paragraphs: [
      "The entertainment industry is no longer confined to traditional theatrical and broadcast models. It has expanded into Vertical OTT, YouTube ecosystems, micro-dramas, and interactive social media formats.",
      "By understanding the specific demands of each platform, Shambhoo has helped studios format and package their IP to maximize reach and revenue across diverse channels.",
      "The strategy involves a holistic approach to media products: ensuring that a single piece of intellectual property can be successfully adapted for feature films, episodic series, and digital-first platforms."
    ]
  },
  {
    slug: "industry-network",
    title: "INDUSTRY NETWORK",
    subtitle: "Connecting studios, producers, and creators",
    desc: "Leveraging over three decades of industry presence to broker connections that transform isolated creative entities into collaborative global powerhouses.",
    img: "https://images.unsplash.com/photo-1511649475669-e288648b2339?auto=format&fit=crop&w=1920&q=80",
    img2: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    paragraphs: [
      "A strong industry network is not built overnight; it is cultivated through years of consistent delivery, mutual respect, and successful collaborations.",
      "Shambhoo's network spans top-tier studios and broadcasters across Asia, Europe, and North America. This includes hands-on experience navigating the complexities of co-productions, pre-sales, and pitching at international markets.",
      "Whether it is finding the right co-production partner for a new IP or assembling a specialized team of VFX artists for a demanding feature film, the right connections are leveraged to bring creative visions to reality."
    ]
  },
  {
    slug: "emerging-technology",
    title: "EMERGING TECHNOLOGY",
    subtitle: "Exploring how AI is changing storytelling",
    desc: "Actively investigating the integration of Artificial Intelligence and next-generation pipelines into traditional workflows to scale episodic content and redefine production models.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80",
    img2: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    paragraphs: [
      "The next major evolution in media production is being driven by Artificial Intelligence and machine learning. Adapting to this shift is critical for studios looking to maintain a competitive edge.",
      "Shambhoo is at the forefront of exploring how generative media, AI-assisted animation, and automated production pipelines can drastically reduce costs and time-to-market without sacrificing creative quality.",
      "From creating virtual characters to developing ultra-fast workflows for vertical OTT content, the focus is on utilizing technology as an enabler to tell more stories, faster, and to wider audiences."
    ]
  }
];

export function generateStaticParams() {
  return expertiseDetails.map((expertise) => ({
    slug: expertise.slug,
  }));
}

export default function ExpertiseDetail({ params }: { params: { slug: string } }) {
  const data = expertiseDetails.find((item) => item.slug === params.slug);

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen selection:bg-accent selection:text-primary relative bg-primary">
      <div className="vignette-overlay"></div>
      <Navbar />

      <section className="relative min-h-[60vh] flex flex-col justify-end pb-20 pt-40 px-6">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={data.img}
            alt={data.title}
            fill
            className="object-cover opacity-40 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-transparent"></div>
          <div className="film-grain"></div>
        </div>

        <div className="container mx-auto relative z-10 max-w-5xl">
          <Link href="/#expertise" className="text-xs font-bold tracking-[0.2em] text-accent uppercase flex items-center gap-2 mb-8 hover:text-secondary transition-colors">
            <div className="w-4 h-px bg-current"></div>
            Back to Expertise
          </Link>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-secondary drop-shadow-2xl mb-6">
            {data.title}
          </h1>
          <p className="text-xl md:text-3xl text-secondary/80 font-light leading-relaxed drop-shadow-md">
            {data.subtitle}
          </p>
        </div>
      </section>

      <section className="py-24 bg-primary relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 border-t border-accent/30 pt-8">
              <h3 className="text-xs tracking-[0.2em] uppercase text-accent font-bold mb-6">Overview</h3>
              <p className="text-lg text-secondary/70 font-light leading-[1.8]">
                {data.desc}
              </p>
            </div>
            
            <div className="lg:col-span-8 border-l border-secondary/10 pl-0 lg:pl-12 space-y-10">
              <h3 className="text-2xl font-serif text-secondary mb-8">Detailed Expertise</h3>
              
              {/* Dynamic Image in Content Body */}
              <div className="relative w-full h-[400px] mb-12 rounded-lg overflow-hidden shadow-2xl border border-secondary/10">
                <Image
                  src={data.img2}
                  alt={`${data.title} details`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {data.paragraphs.map((para, i) => (
                <p key={i} className="text-lg md:text-xl text-secondary/80 font-light leading-relaxed">
                  {para}
                </p>
              ))}
              
              <div className="mt-16 pt-12 border-t border-secondary/10">
                <p className="text-secondary/50 font-light italic">
                  In the animation and entertainment industry, possessing a deep understanding of these disciplines ensures that creative projects don&apos;t just exist as ideas - they are structured, funded, and distributed effectively to reach global audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
