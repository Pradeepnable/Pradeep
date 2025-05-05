import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-logo mb-2">
              {profile.name}
            </h2>
            <p className="text-muted-foreground max-w-md">{profile.tagline}</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary dark:hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={profile.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary dark:hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href={`mailto:${profile.email}`}
                className="text-muted-foreground hover:text-primary dark:hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="p-4 space-y-4">
        <div
          className="p-4 rounded"
          style={{ backgroundColor: "hsl(224 71.4% 4.1%)" }}
        >
          <h2 className="text-white">--background: hsl(224 71.4% 4.1%)</h2>
        </div>

        <div
          className="p-4 rounded"
          style={{ backgroundColor: "hsl(0 0% 98%)" }}
        >
          <h2 className="text-black">--foreground: hsl(0 0% 98%)</h2>
        </div>

        <div
          className="p-4 rounded"
          style={{ backgroundColor: "hsl(224 71.4% 4.1%)" }}
        >
          <h2 className="text-white">--card: hsl(224 71.4% 4.1%)</h2>
        </div>

        <div
          className="p-4 rounded"
          style={{ backgroundColor: "hsl(0 0% 98%)" }}
        >
          <h2 className="text-black">--card-foreground: hsl(0 0% 98%)</h2>
        </div>

        <div
          className="p-4 rounded"
          style={{ backgroundColor: "hsl(220.9 39.3% 11%)" }}
        >
          <h2 className="text-white">--primary: hsl(220.9 39.3% 11%)</h2>
        </div>

        <div
          className="p-4 rounded"
          style={{ backgroundColor: "hsl(220.9 0% 100%)" }}
        >
          <h2 className="text-black">--logo: hsl(220.9 0% 100%)</h2>
        </div>

        <div
          className="p-4 rounded"
          style={{ backgroundColor: "hsl(215 27.9% 16.9%)" }}
        >
          <h2 className="text-white">--secondary: hsl(215 27.9% 16.9%)</h2>
        </div>

        <div
          className="p-4 rounded"
          style={{ backgroundColor: "hsl(217.9 10.6% 64.9%)" }}
        >
          <h2 className="text-black">
            --muted-foreground: hsl(217.9 10.6% 64.9%)
          </h2>
        </div>

        <div
          className="p-4 rounded"
          style={{ backgroundColor: "hsl(0 62.8% 30.6%)" }}
        >
          <h2 className="text-white">--destructive: hsl(0 62.8% 30.6%)</h2>
        </div>

        <div
          className="p-4 rounded"
          style={{ backgroundColor: "hsl(216 12.2% 83.9%)" }}
        >
          <h2 className="text-black">--ring: hsl(216 12.2% 83.9%)</h2>
        </div>

        <div
          className="p-4 rounded"
          style={{ backgroundColor: "hsl(221.2 83.2% 53.3%)" }}
        >
          <h2 className="text-white">--chart-1: hsl(221.2 83.2% 53.3%)</h2>
        </div>

        <div
          className="p-4 rounded"
          style={{ backgroundColor: "hsl(142.1 76.2% 36.3%)" }}
        >
          <h2 className="text-white">--chart-2: hsl(142.1 76.2% 36.3%)</h2>
        </div>

        <div
          className="p-4 rounded"
          style={{ backgroundColor: "hsl(47.9 95.8% 53.1%)" }}
        >
          <h2 className="text-black">--chart-3: hsl(47.9 95.8% 53.1%)</h2>
        </div>

        <div
          className="p-4 rounded"
          style={{ backgroundColor: "hsl(316.6 73.3% 52.4%)" }}
        >
          <h2 className="text-white">--chart-4: hsl(316.6 73.3% 52.4%)</h2>
        </div>

        <div
          className="p-4 rounded"
          style={{ backgroundColor: "hsl(262.1 83.3% 57.8%)" }}
        >
          <h2 className="text-white">--chart-5: hsl(262.1 83.3% 57.8%)</h2>
        </div>
      </div> */}
    </footer>
  );
}
