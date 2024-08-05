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

      <Header />

      <div className="image-section">
        <div className="wrapper">
          <div className="image" />
        </div>
      </div>

      <Main />
    </div>
  );
}

const Header = () => (
  <div className="header">
    <div className="wrapper">
      <div className="topbar">
        <h1>
          <Link href="/">
            <a>Alexander Skafte</a>
          </Link>
        </h1>
        <div className="nav">
          {/* <div className="link">
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </div> */}
          {links.map((link, i) => (
            <div key={i} className="link">
              <MyLink href={link.url}>{link.title}</MyLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Main = () => (
  <div className="main">
    <div className="wrapper">
      <p>Hello!</p>
      <p>
        I'm a full-stack software engineer interested in communication networks,
        decentralized systems, health, music and photography.
      </p>
      {/* <p>
        Check out my <Link href="/projects">projects</Link>!
      </p> */}
      <p>
        Wanna chat? You can contact me on{" "}
        <span dangerouslySetInnerHTML={{ __html: email }} /> or via LinkedIn.
      </p>
    </div>
  </div>
);

const MyLink = ({ children, ...rest }) => (
  <a target="_blank" rel="noreferrer" {...rest}>
    {children}
  </a>
);
