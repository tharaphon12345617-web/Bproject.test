"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BprojectLogo from "@/src/LOGO/BPROJECT.png";

type UserType = {
  fullName: string;
  email: string;
  level: string;
  province: string;
  isApproved: boolean;
};

export default function HeaderClient({ user }: { user: UserType | null }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  async function handleLogout() {
    await fetch("/api/logout");
    window.location.href = "/login";
  }

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-1 px-6">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={BprojectLogo}
            alt="BPROJECT logo"
            width={160}
            height={160}
            quality={75}
            className="h-16 w-16 rounded-2xl object-contain sm:h-20 sm:w-35"
          />
          <span className="sr-only">BPROJECT</span>
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
        >
          <span className="sr-only">Toggle navigation menu</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-6 text-dark/80 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/contact">Contact</Link>

          {!user ? (
            <Link href="/login" className="text-primary font-semibold">
              Login
            </Link>
          ) : (
            <div className="flex items-center gap-4">

              <div className="text-right">
                <p className="text-sm font-semibold text-primary">
                  {user.fullName}
                </p>
                <p className="text-xs text-gray-500">
                  {user.level}
                </p>
              </div>

              <span
                className={`text-xs px-2 py-1 rounded ${
                  user.isApproved
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {user.isApproved ? "Approved" : "Pending"}
              </span>

              <Link href="/profile" className="text-primary font-semibold">
                Profile
              </Link>

              <button
                onClick={handleLogout}
                className="text-red-500 font-semibold"
              >
                Logout
              </button>
            </div>
          )}
        </nav>
      </div>

      <div className={`md:hidden fixed inset-0 z-40 bg-slate-950/40 transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setMenuOpen(false)} />
      <div ref={menuRef} className={`md:hidden relative z-50 overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ${menuOpen ? "max-h-[calc(100vh-6rem)] overflow-y-auto" : "max-h-0"}`}>
        <div className="flex flex-col gap-3 px-6 py-4">
          {!user && (
            <Link href="/login" onClick={() => setMenuOpen(false)} className="block rounded-2xl bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-500">
              Login
            </Link>
          )}
          <Link href="/" onClick={() => setMenuOpen(false)} className="block rounded-2xl px-4 py-3 text-slate-900 transition hover:bg-slate-100">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block rounded-2xl px-4 py-3 text-slate-900 transition hover:bg-slate-100">About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="block rounded-2xl px-4 py-3 text-slate-900 transition hover:bg-slate-100">Services</Link>
          <Link href="/portfolio" onClick={() => setMenuOpen(false)} className="block rounded-2xl px-4 py-3 text-slate-900 transition hover:bg-slate-100">Portfolio</Link>
          <Link href="/jobs" onClick={() => setMenuOpen(false)} className="block rounded-2xl px-4 py-3 text-slate-900 transition hover:bg-slate-100">Jobs</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block rounded-2xl px-4 py-3 text-slate-900 transition hover:bg-slate-100">Contact</Link>
          {user && (
            <div className="space-y-4">
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{user.fullName}</p>
                <p className="mt-1 text-xs text-slate-500">{user.level}</p>
                <span className={`mt-3 inline-block rounded-full px-2 py-1 text-[11px] ${user.isApproved ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}>
                  {user.isApproved ? "Approved" : "Pending"}
                </span>
              </div>
              <Link href="/profile" onClick={() => setMenuOpen(false)} className="block rounded-2xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-100">Profile</Link>
              <button onClick={handleLogout} className="w-full rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100">Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}