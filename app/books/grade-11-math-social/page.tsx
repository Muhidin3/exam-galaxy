import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Ethiopian Grade  11 Mathematics Textbook PDF – Social Science – Download ',
  description: 'Ethiopian Grade  11 Mathematics for Social Science. Advanced statistics and mathematical applications. Free PDF download for EuEE prep.',
  alternates: { canonical: '/books/grade-11-math-social' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={11} subject="Mathematics (Social Science)" title="Ethiopian Grade  11 Mathematics Textbook PDF – Social Science – Download " description="Ethiopian Grade  11 Mathematics for Social Science. Advanced statistics and mathematical applications. Free PDF download for EuEE prep." />
}
