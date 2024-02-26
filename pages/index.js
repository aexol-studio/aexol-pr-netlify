import Head from "next/head";
import Header from "@components/Header";
import { apps } from "../data/appsData";
import { tools } from "../data/saasData";
import { oses } from "../data/osData";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Aexol products</title>
    <meta name="google-site-verification" content="L-ySu0Ae6UkIZWs4iz_q1zMkHSYn3mIIBKf8BtXxaKo" />
      </Head>

      <main>
        <div>
          <Header title="Aexol products" />
        </div>
        <hr />
        <ul>
          <h2>Saas tools:</h2>
          {tools.map((saas, index) => (
            <li key={index}>
              <a href={saas.link} target="_blank" rel="noopener">
                {saas.name} ({saas.category})
              </a>
            </li>
          ))}
        </ul>
        <ul>
          <h2>Open-source:</h2>
          {oses.map((os, index) => (
            <li key={index}>
              <a href={os.link} target="_blank" rel="noopener">
                {os.name} ({os.category})
              </a>
            </li>
          ))}
        </ul>
        <ul>
          <h2>Mobile apps:</h2>
          {apps.map((app, index) => (
            <li key={index}>
              <a href={app.link} target="_blank" rel="noopener">
                {app.name} ({app.category})
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
