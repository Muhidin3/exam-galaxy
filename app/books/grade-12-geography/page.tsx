import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade 12 Geography New Curriculum Textbook',
  description: 'Ethiopian Grade 12 Geography textbook PDF. Final exam preparation materials. Free download for Ethiopian high school students.',
  alternates: { canonical: '/books/grade-12-geography' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={12} subject="Geography" title="Ethiopian Grade 12 Geography New Curriculum Textbook pdf" description="Ethiopian Grade 12 Geography textbook PDF. Final exam preparation materials. Free download for Ethiopian high school students." />
}
