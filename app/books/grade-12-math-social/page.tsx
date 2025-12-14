import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade  12 Mathematics Textbook PDF – Social Science – Download ',
  description: 'Ethiopian Grade  12 Mathematics for Social Science. Final exam preparation with all relevant topics. Free PDF download for EuEE prep.',
  alternates: { canonical: '/books/grade-12-math-social' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={12} subject="Mathematics (Social Science)" title="Ethiopian Grade  12 Mathematics Textbook PDF – Social Science – Download " description="Ethiopian Grade  12 Mathematics for Social Science. Final exam preparation with all relevant topics. Free PDF download for EuEE prep." />
}
