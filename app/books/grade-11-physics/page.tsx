import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade 11 Physics New Curriculum Textbook',
  description: 'Ethiopian Grade 11 Physics textbook PDF. Advanced physics including optics, waves, and modern physics. Prepare for EuEE entrance exam.',
  alternates: { canonical: '/books/grade-11-physics' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={11} subject="Physics" title="Ethiopian Grade 11 Physics New Curriculum Textbook pdf" description="Ethiopian Grade 11 Physics textbook PDF. Advanced physics including optics, waves, and modern physics. Prepare for EuEE entrance exam." />
}
