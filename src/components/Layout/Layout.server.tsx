import { JSX } from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header.client";

export default function Layout(): JSX.Element {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
