import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade 11 Mathematics Textbook PDF – Natural Science – Download ',
  description: 'Ethiopian Grade 11 Mathematics for Natural Science. Advanced calculus, vectors, and analytical geometry. Free PDF for EuEE preparation.',
  alternates: { canonical: '/books/grade-11-math-natural' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={11} subject="Mathematics (Natural Science)" title="Ethiopian Grade 11 Mathematics Textbook PDF – Natural Science – Download " description="Ethiopian Grade 11 Mathematics for Natural Science. Advanced calculus, vectors, and analytical geometry. Free PDF for EuEE preparation." />
}
