import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade  12 Biology Textbook PDF | Exam Galaxy ',
  description: 'Ethiopian Grade  12 Biology textbook PDF. Comprehensive biology resource for EuEE exam preparation. Free PDF for all Ethiopian students.',
  alternates: { canonical: '/books/grade-12-biology' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={12} subject="Biology" title="Ethiopian Grade  12 Biology Textbook PDF | Exam Galaxy " description="Ethiopian Grade  12 Biology textbook PDF. Comprehensive biology resource for EuEE exam preparation. Free PDF for all Ethiopian students." />
}
