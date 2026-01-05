import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, Shield, Sparkles, Users, TrendingUp, Globe } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-2 text-sm">
            <Sparkles className="size-4 text-primary" />
            <span className="text-muted-foreground">Welcome to the future</span>
          </div>
          
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Build Something
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Transform your ideas into reality with our powerful platform. 
            Simple, fast, and designed for the modern world.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="group text-base">
              <Link href="#">
                Get Started
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base">
              <Link href="#">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-muted/30 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Powerful features designed to help you succeed
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="size-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Built for speed and performance. Experience the difference with our optimized platform.
              </p>
            </div>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="size-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Secure & Reliable</h3>
              <p className="text-muted-foreground">
                Your data is protected with enterprise-grade security and 99.9% uptime guarantee.
              </p>
            </div>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle2 className="size-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Easy to Use</h3>
              <p className="text-muted-foreground">
                Intuitive interface that makes complex tasks simple. Get started in minutes, not hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t bg-gradient-to-b from-background to-muted/20 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by thousands
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Join a growing community of creators and innovators
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="size-8 text-primary" />
              </div>
              <div className="mb-2 text-4xl font-bold tracking-tight">50K+</div>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="size-8 text-primary" />
              </div>
              <div className="mb-2 text-4xl font-bold tracking-tight">99.9%</div>
              <p className="text-muted-foreground">Uptime</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-primary/10">
                <Globe className="size-8 text-primary" />
              </div>
              <div className="mb-2 text-4xl font-bold tracking-tight">150+</div>
              <p className="text-muted-foreground">Countries</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="size-8 text-primary" />
              </div>
              <div className="mb-2 text-4xl font-bold tracking-tight">1M+</div>
              <p className="text-muted-foreground">Projects Created</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join thousands of users who are already building amazing things.
          </p>
          <Button asChild size="lg" className="text-base">
            <Link href="#">
              Start Your Journey
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
