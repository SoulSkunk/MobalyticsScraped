import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/#" className="btn btn-ghost text-xl">
            Moba Scraped
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Dev</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/kylian-broccolichi-015141271/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://broccolichi-kylian-portfolio.vercel.app">
                      Portfolio
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="https://github.com/SoulSkunk">Code</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
