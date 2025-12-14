import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade  9 English Textbook PDF – Social Science – Download ',
  description: 'Ethiopian Grade  9 English textbook for Social Science stream. Develop comprehensive English skills. Free download for Ethiopian students.',
  keywords: 'Ethiopian Grade  9 English, English textbook, Social Science English, EuEE prep, English PDF',
  alternates: {
    canonical: '/books/grade-9-english-social',
  },
}

export default function Grade9EnglishSocialPage() {
  return (
    <TextbookDownloadComponent
      grade={9}
      subject="English (Social Science)"
      title="Ethiopian Grade  9 English Textbook PDF | Exam Galaxy "
      description="Ethiopian Grade  9 English textbook for Social Science stream. Develop comprehensive English skills. Free download for Ethiopian students."
    />
  )
}
