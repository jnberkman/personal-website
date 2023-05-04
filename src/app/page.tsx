export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="hero p-28">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 animate-gradient-xy">
              Hi there!
            </h1>

            <p className="py-6">
              My name is Nathaniel Berkman, and I am a senior at Grace Church
              School in NYC. I am passionate about technology and finance, and
              in my free time, I love to play tennis, program, and spend time
              with my family and friends.
            </p>
            <p className="pb-6">
              Currently, I am working on a social impact investing project
              focusing on grantmaking for underserved community organizations
              with an emphasis on youth development.
            </p>
          </div>
        </div>
      </div>
      <footer className="footer footer-center text-base-content">
        <div>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://github.com/jnberkman"
              target="_blank"
              rel="noreferrer noopener"
              className="text-white hover:text-White"
            >
              <span className="sr-only">Github</span>
              <svg
                fill="white"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="mailto:jacknberkman@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-white hover:text-White"
            >
              <span className="sr-only">Mail</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
