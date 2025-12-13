import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Ethiopian Grade  12 Mathematics Textbook PDF – Natural Science – Download ',
  description: 'Ethiopian Grade  12 Mathematics for Natural Science. Final exam preparation with all topics. Free PDF for EuEE entrance preparation.',
  alternates: { canonical: '/books/grade-12-math-natural' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={12} subject="Mathematics (Natural Science)" title="Ethiopian Grade  12 Mathematics Textbook PDF – Natural Science – Download " description="Ethiopian Grade  12 Mathematics for Natural Science. Final exam preparation with all topics. Free PDF for EuEE entrance preparation." />
}
