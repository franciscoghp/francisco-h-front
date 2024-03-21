import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
      <main>
        {children}
      </main>
  )
}