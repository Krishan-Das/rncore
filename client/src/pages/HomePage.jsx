import React, { useState } from "react";
import {
  BookOpen,
  Code2,
  Database,
  Key,
  Layers,
  ChevronRight,
  Copy,
  Check,
  ShieldCheck,
  Zap,
  Search,
  Server,
  Globe,
  Terminal,
  Rocket,
  KeyRound
} from "lucide-react";
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

  const snippets = {
    javascript: `import axios from "axios";

const client = axios.create({
  baseURL: "https://api.rncore.dev/v2",
  headers: {
    Authorization: "Bearer rn_live_94820a8d712f",
    "Content-Type": "application/json"
  }
});

// Fetch all todo resources
const { data } = await client.get("/todos");
console.log(data);`,

    curl: `curl -X GET "https://api.rncore.dev/v2/todos" \\
  -H "Authorization: Bearer rn_live_94820a8d712f" \\
  -H "Content-Type: application/json"`,

    python: `import requests

url = "https://api.rncore.dev/v2/todos"
headers = {
    "Authorization": "Bearer rn_live_94820a8d712f",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.json())`
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex">

        {/* Sticky Left Sidebar */}
        <DocsSidebar/>

        {/* Main Documentation Body */}
        <main className="flex-1 px-6 py-10 lg:px-12 max-w-4xl">

          {/* Section 1: Overview */}
          <Overview/>
          <hr className="my-10 border-slate-200 dark:border-zinc-800" />
          
          <QuickStart/>
          <hr className="my-10 border-slate-200 dark:border-zinc-800" />
          
          <ApiKeyAuth/>
          <hr className="my-10 border-slate-200 dark:border-zinc-800" />
          
          <V1PublicApi/>
          <hr className="my-10 border-slate-200 dark:border-zinc-800" />
          
          <V2PersonalApi/>
          <hr className="my-10 border-slate-200 dark:border-zinc-800" />
          
          <ResponseFormat/>
          <hr className="my-10 border-slate-200 dark:border-zinc-800" />
          
          <ErrorHandling/>
          <hr className="my-10 border-slate-200 dark:border-zinc-800" />
          
          <ExamplesSection/>
          <hr className="my-10 border-slate-200 dark:border-zinc-800" />
        
          <ArchitectureSection/>
          <hr className="my-10 border-slate-200 dark:border-zinc-800" />

        </main>
      </div>
    </div>
  );
};

export default HomePage;