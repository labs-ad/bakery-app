import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-primary-600 text-xl font-bold">
              Makkar Bakers
            </h3>
            <p className="text-sm text-neutral-600">
              Handmade, egg-free cakes made with love and local ingredients for
              your special celebrations.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="hover:text-primary-600 text-neutral-400 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="hover:text-primary-600 text-neutral-400 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.292C3.897 14.475 3.365 13.024 3.365 11.5s.532-2.975 1.763-4.195C6.001 6.033 7.152 5.543 8.449 5.543s2.448.49 3.321 1.292c1.231 1.22 1.763 2.671 1.763 4.195s-.532 2.975-1.763 4.195c-.873.802-2.024 1.292-3.321 1.292z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-neutral-900">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/menu"
                className="hover:text-primary-600 text-sm text-neutral-600 transition-colors"
              >
                Our Menu
              </Link>
              <Link
                href="/about"
                className="hover:text-primary-600 text-sm text-neutral-600 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary-600 text-sm text-neutral-600 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/orders"
                className="hover:text-primary-600 text-sm text-neutral-600 transition-colors"
              >
                Order Tracking
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold text-neutral-900">Customer Service</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/faq"
                className="hover:text-primary-600 text-sm text-neutral-600 transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/shipping"
                className="hover:text-primary-600 text-sm text-neutral-600 transition-colors"
              >
                Shipping Info
              </Link>
              <Link
                href="/returns"
                className="hover:text-primary-600 text-sm text-neutral-600 transition-colors"
              >
                Returns
              </Link>
              <Link
                href="/privacy"
                className="hover:text-primary-600 text-sm text-neutral-600 transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-neutral-900">Get in Touch</h4>
            <div className="space-y-2 text-sm text-neutral-600">
              <p>📧 hello@dadalicious.com</p>
              <p>📱 (555) 123-4567</p>
              <p>
                📍 123 Bakery Street
                <br />
                Sweet City, SC 12345
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-600">
          <p>© 2024 Makkar Bakers. Made with ❤️ for your special moments.</p>
        </div>
      </div>
    </footer>
  )
}
