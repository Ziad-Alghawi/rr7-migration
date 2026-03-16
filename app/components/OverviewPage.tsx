import React from "react";
import "@rescui/typography/lib/font-jb-sans-auto.css";

import { ThemeProvider } from "@rescui/ui-contexts";

import { HeaderSection } from "./header-section";
import { LatestFromKotlinSection } from "./latest-from-kotlin-section";
import { WhyKotlinSection } from "./why-kotlin-section";
import { UsageSection } from "./usage-section";
import { StartSection } from "./start-section";

import "../styles/index.scss";
import "../styles/grid.scss";

function OverviewPageContent() {
  return (
    <div className="overview-page">
      <HeaderSection />
      <LatestFromKotlinSection />
      <WhyKotlinSection />
      <UsageSection />
      <StartSection />
    </div>
  );
}

export default function OverviewPage() {
  return (
    <ThemeProvider theme="dark">
      <OverviewPageContent />
    </ThemeProvider>
  );
}