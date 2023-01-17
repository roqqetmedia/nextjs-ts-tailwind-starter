import { Fragment, ReactNode } from "react";
import { Footer, Header, Seo } from "@/components/common";

interface PrimaryLayoutProps {
  children: ReactNode;
  meta?: {
    title?: string;
    description?: string;
  };
}

export function PrimaryLayout({ meta, children }: PrimaryLayoutProps) {
  return (
    <Fragment>
      <Seo {...meta} />
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
