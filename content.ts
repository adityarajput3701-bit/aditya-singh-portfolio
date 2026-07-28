export interface NavLink {
  readonly label: string;
  readonly href: `#${string}`;
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly external: true;
}

export interface ExperienceEntry {
  readonly role: string;
  readonly org: string;
  readonly orgHref?: string;
  readonly location: string;
  readonly dateRange: string;
  readonly current?: boolean;
  readonly description: string;
}

export interface EducationEntry {
  readonly degree: string;
  readonly school: string;
  readonly schoolHref?: string;
  readonly location: string;
  readonly year: string;
}

export interface CertificationEntry {
  readonly title: string;
  readonly href: string;
}

export interface ContactChannel {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
  readonly download?: string;
}

export interface SiteContent {
  readonly person: {
    readonly firstName: string;
    readonly lastName: string;
    readonly role: string;
    readonly org: string;
    readonly orgHref: string;
    readonly location: string;
    readonly tagline: string;
    readonly statusBadge: string;
  };
  readonly nav: readonly NavLink[];
  readonly about: {
    readonly paragraph: string;
    readonly goal: string;
  };
  readonly experience: readonly ExperienceEntry[];
  readonly skills: readonly string[];
  readonly certifications: readonly CertificationEntry[];
  readonly education: readonly EducationEntry[];
  readonly contact: {
    readonly heading: string;
    readonly sub: string;
    readonly channels: readonly ContactChannel[];
  };
  readonly socials: readonly SocialLink[];
}
