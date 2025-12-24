import image_126270ec7a08a04aac98ff92592363343e6a924f from 'figma:asset/126270ec7a08a04aac98ff92592363343e6a924f.png';
import { Instagram, X, MessageCircle } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import communityImage from 'figma:asset/5d1b91f18ce0dd5846ba43e69e1a0969c2ee886c.png';
import logoImage from 'figma:asset/12a34d83cc4362ff5eb9cbf3166fc1e2929f4290.png';

// Discord Icon Component
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="https://discord.gg/PMNAGsf4"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
  </svg>
);

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1410] to-[#2a2010]">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm fixed top-0 w-full z-50 bg-black/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="FUT Trenches Logo" className="w-10 h-10 rounded-lg" />
            <span className="text-xl font-bold">
              <span className="text-foreground">FUT</span>{' '}
              <span className="text-primary">Trenches</span>
              <span className="text-xs align-top text-muted-foreground">™</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/futtrenches"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.x.com/futtrenches"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <TikTokIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-primary">FUT Trenches Community</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
                Welcome to{' '}
                <span className="text-primary">FUT Trenches</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Connect with thousands of players, earn Prizes, take part in Challenges, share tactics, build squads, and dominate the pitch together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-lg shadow-primary/20"
                  onClick={() => window.open('https://discord.gg/PMNAGsf4', '_blank')}
                >
                  <DiscordIcon className="mr-2 h-5 w-5" />
                  Join Discord
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg"
                  onClick={() => window.open('https://drive.google.com/file/d/1htbN9JDAm-PVN2NWLZb0De0Z5KYeAN5F/view?usp=sharing', '_blank')}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <img
                src={image_126270ec7a08a04aac98ff92592363343e6a924f}
                alt="Community"
                className="relative rounded-2xl shadow-2xl border border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Join Our <span className="text-primary">Community</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience the best FC26 community features
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-primary/20 hover:border-primary/50 transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl mb-3">Active Discord</h3>
              <p className="text-muted-foreground">
                24/7 active community with dedicated channels for squad building, trading, and competitive play.
              </p>
            </Card>
            <Card className="p-8 bg-card border-primary/20 hover:border-primary/50 transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
              <h3 className="text-2xl mb-3">Tournaments</h3>
              <p className="text-muted-foreground">
                Regular tournaments with prizes, rankings, and the chance to prove you're the best.
              </p>
            </Card>
            <Card className="p-8 bg-card border-primary/20 hover:border-primary/50 transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-2xl mb-3">Expert Coaches</h3>
              <p className="text-muted-foreground">
                Learn from top-tier players with exclusive guides, tactics, and one-on-one coaching sessions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
        <div className="container mx-auto max-w-4xl relative">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Level Up Your Game?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of players already dominating in FC26
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg shadow-lg shadow-primary/20"
              onClick={() => window.open('https://discord.gg/PMNAGsf4', '_blank')}
            >
              <DiscordIcon className="mr-2 h-5 w-5" />
              Join Our Discord Now!
            </Button>
            
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-4 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src={logoImage} alt="FUT Trenches Logo" className="w-10 h-10 rounded-lg" />
              <span className="text-xl font-bold">
                <span className="text-foreground">FUT</span>{' '}
                <span className="text-primary">Trenches</span>
                <span className="text-xs align-top text-muted-foreground">™</span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/futtrenches"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
                <span>TikTok</span>
              </a>
            </div>
          </div>
          <div className="text-center text-muted-foreground mt-8">
            <p>© 2026 FUT Trenches. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}