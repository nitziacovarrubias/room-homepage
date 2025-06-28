
import { ReactNode } from "react";

export default function Section({children, ...props}: { classes?: string; children: ReactNode }) {
  return (
    <section {...props}>
      {children}
    </section>
  );
}
