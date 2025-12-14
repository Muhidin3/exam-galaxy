import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade  11 Biology Textbook PDF | Exam Galaxy ',
  description: 'Ethiopian Grade  11 Biology textbook PDF. Advanced biology including molecular biology and human physiology. Free download for EuEE prep.',
  alternates: { canonical: '/books/grade-11-biology' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={11} subject="Biology" title="Ethiopian Grade  11 Biology Textbook PDF | Exam Galaxy " description="Ethiopian Grade  11 Biology textbook PDF. Advanced biology including molecular biology and human physiology. Free download for EuEE prep." />
}
