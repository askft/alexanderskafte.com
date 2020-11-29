import Head from "next/head";

const links = [
  { url: "https://github.com/askft", title: "GitHub" },
  { url: "https://www.linkedin.com/in/alexanderskafte/", title: "LinkedIn" },
  { url: "https://instagram.com/alexanderskafte/", title: "Instagram" },
];

const email =
  "&#097;&#108;&#101;&#120;&#097;&#110;&#100;&#101;&#114;&#115;&#107;&#097;" +
  "&#102;&#116;&#101;&#064;&#112;&#114;&#111;&#116;&#111;&#110;&#109;&#097;" +
  "&#105;&#108;&#046;&#099;&#111;&#109;";

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Alexander Skafte</title>
      </Head>

      <div className="header">
        <div className="wrapper">
          <div className="topbar">
            <h1>Alexander Skafte</h1>
            <div className="nav">
              {links.map((link, i) => (
                <div key={i} className="link">
                  <Link href={link.url}>{link.title}</Link>
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
            Wanna chat? You can contact me on{" "}
            <span dangerouslySetInnerHTML={{ __html: email }} /> or via
            LinkedIn.
          </p>
        </div>
      </div>

      <div className="projects">
        <div className="wrapper">
          <div className="projects-intro">
            <h2>Projects</h2>
            <p>
              I like to explore what can be done with software and have done so
              over time by working on a few projects. Favorite languages/tools
              are <b>Golang</b>, <b>React</b>, <b>Node</b> and <b>C</b> and{" "}
              <b>Python</b>.
            </p>
            <p>
              Below are a few of my software hobby projects, along with some
              projects from university.
            </p>
          </div>
        </div>

        <Project
          title="Anonymous Hyper-Real-Time Chat"
          date="November 2020 – current"
        >
          <p>
            A chat which shows each user's message as it is being typed. It may
            not sound like a big deal but in fact it makes conversation
            extremely fun and engaging. By design this kind of chat encourages a
            synchronous type of conversation, much like that which we engage in
            offline.
          </p>
          <p>
            Additionally the chat allows for anonymity but with the option to
            identify oneself via a so-called "tripcode"—the result of running a
            user-supplied secret through a hash algorithm.
          </p>
          <p>
            The advantages of an anonymous hyper-real-time chat are manifold:{" "}
            <b>(I)</b> no user registration is required, so anyone can join the
            conversation instantly, <b>(II)</b> shifts the focus onto quality of
            content, naturally defeating credentialism, <b>(III)</b>{" "}
            conversation moves forward very fast even if only a couple of people
            are typing and <b>(IV)</b> since you see what people type in real
            time, "talking past each other" becomes less of an issue.
          </p>
          <p>
            <b>
              <Link href="/chat">A demo is available here!</Link>
            </b>{" "}
            Messages are removed after 12 hours. I'm <code>5VkEelUtSM</code>.
          </p>
          <p>
            Built with <b>Socket.IO</b>, <b>React</b>, <b>Node</b>,{" "}
            <b>SQLite3</b> and <b>NGINX</b>.
          </p>
        </Project>

        <Project title="soma dot cx" date="November 2020">
          <p>
            I wanted a more fun way of sharing various notes of mine, so I made
            this cozy site filled with great content in a form that takes you
            back to the early days of browsing the web. Perhaps somewhat
            ironically I built it with <b>Next.js</b>, a very modern framework.{" "}
            <Link href="https://soma.cx">Check it out!</Link>
          </p>
        </Project>

        <Project title="Go Behave" date="December 2018">
          <p>
            Go Behave is a behavior tree library in Golang. A behavior tree is a
            formalism for describing the behavior of an autonomous entity such
            as a robot or a non-player character in a video game. It allows for
            highly modular behavior design thanks to the composability of its
            nodes, and the formalism makes task switching and state management
            trivial. Please refer to the{" "}
            <Link href="https://github.com/askft/go-behave">
              project repository
            </Link>{" "}
            for more information.
          </p>
        </Project>

        <Project
          title="2D Video Game &amp; Engine"
          date="October 2018 – current"
        >
          <p>
            A video game in a homemade engine that allows for, among other
            features:
          </p>
          <ul>
            <li>
              <b>Artificial intelligence</b> via{" "}
              <Link href="https://github.com/askft/go-behave">
                behavior trees
              </Link>{" "}
              that can be defined in a custom-built simple declarative language,
              allowing for e.g. game designers without programming experience to
              design agents with intelligent behavior.
            </li>
            <li>
              Efficient <b>collision detection and resolution</b> via spatial
              partitioning.
            </li>
            <li>
              Loading and rendering of <b>tilemaps and tilesets</b> built using
              the{" "}
              <Link href="https://www.mapeditor.org/">Tiled Map Editor</Link>.
            </li>
            <li>
              <b>Easy development of features</b> thanks to a highly modular
              implementation of an{" "}
              <Link href="https://en.wikipedia.org/wiki/Entity–component–system">
                Entity-Component-System
              </Link>{" "}
              architecture.
            </li>
          </ul>
          <p>
            The code is private but I'll gladly discuss it with anyone curious.
          </p>
        </Project>

        <Project title="Kademlia" date="October 2018">
          <p>
            A Golang implementation of Kademlia, a distributed hash table for
            decentralized peer-to-peer computer networks. Unfinished, but code
            is available{" "}
            <Link href="https://github.com/askft/kademlia">here</Link>.
          </p>
        </Project>

        <Project title="Self-Balancing Robot" date="November–December 2017">
          <p>
            In a control systems project course, three other students and I
            built a self-balancing two-wheeled robot using LEGO Mindstorms
            components. We implemented and compared two different control
            strategies: PID control and linear-quadratic control. We compared
            two different filtering methods—Kalman filtering and complementary
            filtering—for the measurements taken by a gyroscope and an
            accelerometer. The control algorithms were implemented first in
            Simulink and then in leJOS on a LEGO Mindstorms EV3 microprocessor.
            The project report can be found <Link href="/lego.pdf">here</Link>.
          </p>
        </Project>

        <Project title="Extremum-Seeking Control" date="April–June 2017">
          <p>
            As the final project in an advanced course in control theory I chose
            to investigate an area of control engineering known as
            extremum-seeking control. While the aim of conventional control is
            to drive the output of a system to a predetermined reference value,
            the purpose of extremum-seeking control is to create a controller
            that finds an optimal reference value for a system to operate at.
            This type of control is often used within the process industry to
            optimize system performance and subsequently minimize resource
            usage. The project report can be found{" "}
            <Link href="/esc.pdf">here</Link>.
          </p>
        </Project>

        <Project
          title="Reduction of Static Noise in Real Time"
          date="February 2017"
        >
          <p>
            In a digital signal processing project course, a fellow student and
            I investigated and implemented an algorithm for reducing static
            audial noise in real time. The solution was implemented on a SHARC
            DSP. The project report can be found{" "}
            <Link href="/noise.pdf">here</Link>.
          </p>
        </Project>

        <Project title="Miscellaneous" date="Undated">
          <p>Just various stuff.</p>
          <ul>
            <li>
              <Link href="/unix.html">Unix Timestamp Converter</Link>
            </li>
            <li>
              <Link href="/money.html">Investment Return Calculator</Link>
            </li>
            <li>
              <Link href="/mandarin/index.html">
                Mandarin practice vocabulary from 2016
              </Link>
            </li>
          </ul>
        </Project>
      </div>
    </div>
  );
}

const Link = ({ children, ...rest }) => (
  <a target="_blank" rel="noreferrer" {...rest}>
    {children}
  </a>
);

const Project = ({ title, date, children, className, ...rest }) => (
  <div className={"project" + " " + className} {...rest}>
    <div className="wrapper">
      <div className="title">
        <h3>{title}</h3>
        <span className="date">{date}</span>
      </div>
      <div className="content">{children}</div>
    </div>
  </div>
);
