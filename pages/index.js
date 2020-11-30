import Head from "next/head";
import Link from "next/link";

const links = [
  { url: "https://github.com/askft", title: "GitHub" },
  { url: "https://www.linkedin.com/in/alexanderskafte/", title: "LinkedIn" },
  { url: "https://instagram.com/alexanderskafte/", title: "Instagram" },
];

const email =
  "&#097;&#108;&#101;&#120;&#097;&#110;&#100;&#101;&#114;&#115;&#107;&#097;" +
  "&#102;&#116;&#101;&#064;&#112;&#114;&#111;&#116;&#111;&#110;&#109;&#097;" +
  "&#105;&#108;&#046;&#099;&#111;&#109;";

export default function HomePage() {
  return (
    <div className="page">
      <Head>
        <title>Alexander Skafte</title>
      </Head>

      <div className="header">
        <div className="wrapper">
          <div className="topbar">
            <h1>
              <Link href="/">
                <a>Alexander Skafte</a>
              </Link>
            </h1>
            <div className="nav">
              <div className="link">
                <Link href="/projects">
                  <a>Projects</a>
                </Link>
              </div>
              {links.map((link, i) => (
                <div key={i} className="link">
                  <MyLink href={link.url}>{link.title}</MyLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="wrapper">
          <p>
            Software engineer and a M.Sc. student at Lund University currently
            working on a master's thesis in machine learning and natural
            language processing.
          </p>
          <p>
            Interested in systems, languages, people, decentralization,
            nutrition, breathing, training, music, photography, traditional
            foods, web 1.0 and some more.
            {/* nomadic steppe cultures */}
          </p>
          <p>
            Check out my <Link href="/projects">projects</Link>!
          </p>
          <p>
            Wanna chat? You can contact me on{" "}
            <span dangerouslySetInnerHTML={{ __html: email }} /> or via
            LinkedIn.
          </p>
          <img className="image" src="/me.jpg" alt="Photo of me" />
        </div>
      </div>
    </div>
  );
}

const MyLink = ({ children, ...rest }) => (
  <a target="_blank" rel="noreferrer" {...rest}>
    {children}
  </a>
);
