import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Ethiopian Grade  9 English Textbook PDF – Natural Science – Download ',
  description: 'Ethiopian Grade  9 English textbook PDF for Natural Science stream. Improve grammar, reading, and writing skills. Free download for Ethiopian students.',
  keywords: 'Ethiopian Grade  9 English, English textbook, Natural Science English, EuEE prep, English PDF',
  alternates: {
    canonical: '/books/grade-9-english-science',
  },
}

export default function Grade9EnglishSciencePage() {
  return (
    <TextbookDownloadComponent
      grade={9}
      subject="English (Natural Science)"
      title="Ethiopian Grade  9 English Textbook PDF – Download "
      description="Ethiopian Grade  9 English textbook PDF for Natural Science stream. Improve grammar, reading, and writing skills. Free download for Ethiopian students."
    />
  )
}
