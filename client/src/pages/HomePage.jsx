import React, { useEffect, useState } from "react";
import Overview from "./docs/Overview";
import QuickStart from "./docs/QuickStart";
import DocsSidebar from "../components/docs/DocsSidebar";
import ApiKeyAuth from "./docs/ApiKeyAuth";
import V1PublicApi from "./docs/V1PublicApi";
import V2PersonalApi from "./docs/V2PersonalApi";
import ResponseFormat from "./docs/ResponseFormat";
import ErrorHandling from "./docs/ErrorHandling";
import ExamplesSection from "./docs/ExamplesSection";
import ArchitectureSection from "./docs/ArchitectureSection";

const HomePage = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("javascript");

  const copyCode = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.replace("#", "");
        const section = document.getElementById(id);

        section?.scrollIntoView({
          behavior: "smooth",
        });
      }, 500);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>
          RNCore - Free REST API for React, Flutter & JavaScript Developers
        </title>

        <meta
          name="description"
          content="Build frontend projects faster with free REST APIs. RNCore provides ready-to-use APIs with authentication, database storage and developer-friendly documentation."
        />

        <meta
          name="keywords"
          content="free REST API, dummy API, React API, Flutter API, frontend practice API, developer API"
        />

        <meta
          property="og:title"
          content="RNCore - Free REST API for Developers"
        />

        <meta
          property="og:description"
          content="Build frontend projects faster with ready-to-use REST APIs."
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row">

          {/* Left Sidebar */}
          <DocsSidebar />

          {/* Main Content Area */}
          <main className="flex-1 min-w-0 px-4 py-8 sm:px-6 lg:px-12 max-w-4xl">

            <Overview />
            <hr className="my-10 border-slate-200 dark:border-zinc-800" />

            <QuickStart />
            <hr className="my-10 border-slate-200 dark:border-zinc-800" />

            <ApiKeyAuth />
            <hr className="my-10 border-slate-200 dark:border-zinc-800" />

            <V1PublicApi />
            <hr className="my-10 border-slate-200 dark:border-zinc-800" />

            <V2PersonalApi />
            <hr className="my-10 border-slate-200 dark:border-zinc-800" />

            <ResponseFormat />
            <hr className="my-10 border-slate-200 dark:border-zinc-800" />

            <ErrorHandling />
            <hr className="my-10 border-slate-200 dark:border-zinc-800" />

            <ExamplesSection />
            <hr className="my-10 border-slate-200 dark:border-zinc-800" />

            <ArchitectureSection />
            <hr className="my-10 border-slate-200 dark:border-zinc-800" />

          </main>
        </div>
      </div>
    </>
  );
};

export default HomePage;