import React from "react";

export type SectionRefs = {
  Threebox: React.RefObject<HTMLDivElement | null>;
  Utilitybox: React.RefObject<HTMLDivElement | null>;
  Digitalworldbox: React.RefObject<HTMLDivElement | null>;
  Transparancybox: React.RefObject<HTMLDivElement | null>;
  Thetoken: React.RefObject<HTMLDivElement | null>;
};

export interface LayoutProps {
  sectionRefs: SectionRefs;
  children: React.ReactNode;
}
