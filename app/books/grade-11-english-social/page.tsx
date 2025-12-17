import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade 11 English New Curriculum Textbook',
  description: 'Ethiopian Grade 11 English textbook for Social Science. Critical reading and analytical writing. Free PDF for Ethiopian students.',
  alternates: { canonical: '/books/grade-11-english-social' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={11} subject="English (Social Science)" title="Ethiopian Grade 11 English New Curriculum Textbook pdf" description="Ethiopian Grade 11 English textbook for Social Science. Critical reading and analytical writing. Free PDF for Ethiopian students." />
}
