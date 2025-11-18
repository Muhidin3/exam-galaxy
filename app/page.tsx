import { Metadata } from 'next'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { SubjectsSection } from '@/components/subjects-section'
import { TextbooksSection } from '@/components/textbooks-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { AdBanner } from '@/components/ad-banner'

export const metadata: Metadata = {
  title: 'Exam Galaxy - Free Ethiopian Textbooks & EuEE Exam Preparation',
  description: 'Download free Ethiopian high school textbooks for grades 9-12. Access Physics, Chemistry, Biology, Mathematics, English, History, Geography, Economics. Prepare for EuEE exam with Exam Galaxy mobile app.',
  keywords: 'Ethiopian textbooks, EuEE exam, Grade 9-12 textbooks, Physics PDF, Chemistry PDF, Biology PDF, Mathematics PDF, English PDF, History, Geography, Economics, Exam Galaxy, free textbook download',
  openGraph: {
    title: 'Exam Galaxy - Free Ethiopian Textbooks & EuEE Exam Preparation',
    description: 'Download free Ethiopian textbooks and prepare for EuEE exam with Exam Galaxy',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <SubjectsSection />
      <AdBanner variant="inline" />
      <TextbooksSection />
      <AdBanner variant="inline" />
      <CTASection />
      <Footer />
    </main>
  )
}
