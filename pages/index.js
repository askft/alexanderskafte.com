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
                <div className="link">
                  <Link key={i} href={link.url}>
                    {link.title}
                  </Link>
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
            foods, web 1.0, nomadic steppe cultures and some more.
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
            <h2>Technical</h2>
            <p>
              Let's take a look at a few projects I've done, both personal and
              university-related.
            </p>
          </div>
        </div>

        <Project
          title="Anonymous Hyper-Real-Time Chat"
          date="November 2020 – current"
        >
          <p>
            On the one hand we have the real-time chat, which is just a normal
            chat: the kind that we all know and use; on the other hand we have
            the <b>hyper-real-time chat</b>, which shows each message as it is
            being typed. It may not sound like a big deal but in fact it makes
            conversation extremely fun and engaging. By design this kind of chat
            encourages a more synchronous type of conversation, much like that
            which we engage in offline.
          </p>
          <p>
            Additionally the chat allows for anonymity but with the option to
            identify oneself via a so-called "tripcode"—the result of running a
            user-supplied secret through a hash algorithm.
          </p>
          <p>
            The advantages of an anonymous hyper-real-time chat are manifold:{" "}
            <b>(I)</b> no user registration is required so anyone can join the
            conversation instantly, <b>(II)</b> anonymity naturally defeats
            credentialism by shifting the focus onto quality of content,{" "}
            <b>(III)</b> the "hyper" component makes conversation move forward
            very fast even if only a couple of people are typing and <b>(IV)</b>{" "}
            since you see what people type in real time, "talking past each
            other" becomes less of an issue.
          </p>
          <p>
            A demo will be available shortly. Built with{" "}
            <b>Socket.IO, React, Node, SQLite3 and NGINX</b>.
          </p>
        </Project>

        <Project title="soma.cx" date="November 2020">
          <p>
            I wanted a more fun way of sharing various notes of mine, so I made
            this cozy site filled with great content in a form that takes you
            back to the early days of browsing the web. Perhaps some ironically
            I built it with Next.js, a very modern framework.{" "}
            <Link href="https://soma.cx">Check it out!</Link>
          </p>
        </Project>

        <Project title="Go Behave" date="December 2018">
          <p>
            Go Behave is a behavior tree library in Go. Please refer to the{" "}
            <Link href="https://github.com/askft/go-behave">
              project repository
            </Link>{" "}
            for more information.
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
