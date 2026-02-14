export default function Footer() {
  return (
    <footer className="bg-navy py-12 border-t border-ivory/10">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="text-lg font-bold text-ivory tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Pennington
              </span>
              <span
                className="text-lg font-light text-gold tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Hennessy
              </span>
            </div>
            <p
              className="text-ivory/50 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "'Source Serif 4', serif" }}
            >
              Coaching, training and consulting for lawyers and professional services firms.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs uppercase tracking-[0.2em] text-gold mb-4"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Innovation", href: "#innovation" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-ivory/50 text-sm hover:text-gold transition-colors"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs uppercase tracking-[0.2em] text-gold mb-4"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Contact
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:jamie@penningtonhennessy.com"
                className="block text-ivory/50 text-sm hover:text-gold transition-colors"
                style={{ fontFamily: "'Source Serif 4', serif" }}
              >
                jamie@penningtonhennessy.com
              </a>
              <a
                href="tel:07887536309"
                className="block text-ivory/50 text-sm hover:text-gold transition-colors"
                style={{ fontFamily: "'Source Serif 4', serif" }}
              >
                07887 536309
              </a>
              <p
                className="text-ivory/50 text-sm"
                style={{ fontFamily: "'Source Serif 4', serif" }}
              >
                London, United Kingdom
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p
            className="text-ivory/30 text-xs"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            &copy; {new Date().getFullYear()} Pennington Hennessy Ltd. All rights reserved.
          </p>
          <p
            className="text-ivory/30 text-xs"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Visiting Professor, University of Law
          </p>
        </div>
      </div>
    </footer>
  );
}
