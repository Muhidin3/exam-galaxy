import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Ethiopian Grade  12 Geography Textbook PDF – Download ',
  description: 'Ethiopian Grade  12 Geography textbook PDF. Final exam preparation materials. Free download for Ethiopian high school students.',
  alternates: { canonical: '/books/grade-12-geography' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={12} subject="Geography" title="Ethiopian Grade  12 Geography Textbook PDF – Download " description="Ethiopian Grade  12 Geography textbook PDF. Final exam preparation materials. Free download for Ethiopian high school students." />
}
