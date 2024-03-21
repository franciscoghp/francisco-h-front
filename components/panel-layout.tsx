import { PropsWithChildren } from "react";
import { PanelHeader } from "./panel-header";

export default function PanelLayout({ children }: PropsWithChildren<any>) {
  return (
    <div className="bg-purple-800 min-h-screen">
      <PanelHeader />
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div >
  )
}