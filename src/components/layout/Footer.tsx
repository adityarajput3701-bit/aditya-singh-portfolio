import { siteContent } from "@/config/content";

export function Footer() {
  const { person, socials } = siteContent;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 md:flex-row md:justify-between">
        <p className="font-mono text-xs text-text-faint">
          © {year} {person.firstName} {person.lastName}. All rights reserved.
        </p>

        <ul className="flex items-center gap-6">
          {socials.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-xs tracking-wide text-text-dim transition-colors hover:text-gold"
              >
                {social.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
