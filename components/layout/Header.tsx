'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-display text-2xl font-bold text-primary-600">
              Dadalicious
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="/menu"
              className="text-neutral-600 transition-colors hover:text-primary-600"
            >
              Menu
            </Link>
            <Link
              href="/about"
              className="text-neutral-600 transition-colors hover:text-primary-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-neutral-600 transition-colors hover:text-primary-600"
            >
              Contact
            </Link>
            <Link
              href="/orders"
              className="text-neutral-600 transition-colors hover:text-primary-600"
            >
              Orders
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center space-x-4 md:flex">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">Order Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 text-neutral-600 hover:text-primary-600 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-neutral-200 py-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/menu"
                className="text-neutral-600 transition-colors hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/about"
                className="text-neutral-600 transition-colors hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-neutral-600 transition-colors hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/orders"
                className="text-neutral-600 transition-colors hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Orders
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button size="sm">Order Now</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
