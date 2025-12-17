import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade 12 English New Curriculum Textbook',
  description: 'Ethiopian Grade 12 English textbook for Social Science. Complete English curriculum for entrance exam. Free PDF for Ethiopian students.',
  alternates: { canonical: '/books/grade-12-english-social' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={12} subject="English (Social Science)" title="Ethiopian Grade 12 English New Curriculum Textbook pdf" description="Ethiopian Grade 12 English textbook for Social Science. Complete English curriculum for entrance exam. Free PDF for Ethiopian students." />
}
