import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <Image
          aria-hidden
          src="/svg/chickens/03-chick.svg"
          alt="Chucken"
          width={101}
          height={0}
        />

        <h1 style={{fontSize: "2rem"}}>
          Good Politics
        </h1>

        <h2 style={{fontSize: "1.5rem"}}>
          AI Generated Posts from Podcasts
        </h2>

        <p>
        Sir/Madam, what you are looking at is an Open Source project designed to extract coherent social media content from podcasts using OpenAI. 
        You’re welcome.
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/javascript-pro/good-politics"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/svg/favicon.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Open Source Code
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://goldlabel.pro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/svg/favicon.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          by Goldlabel
        </a>
        
      </footer>
    </div>
  );
}
