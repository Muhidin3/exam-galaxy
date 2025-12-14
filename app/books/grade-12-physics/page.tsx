import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade  12 Physics Textbook PDF | Exam Galaxy ',
  description: 'Ethiopian Grade  12 Physics textbook PDF. Final preparation for EuEE physics. Comprehensive coverage of all physics topics with solved examples.',
  alternates: { canonical: '/books/grade-12-physics' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={12} subject="Physics" title="Ethiopian Grade  12 Physics Textbook PDF | Exam Galaxy " description="Ethiopian Grade  12 Physics textbook PDF. Final preparation for EuEE physics. Comprehensive coverage of all physics topics with solved examples." />
}
