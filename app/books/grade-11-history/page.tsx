import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Ethiopian Grade  11 History Textbook PDF – Download ',
  description: 'Ethiopian Grade  11 History textbook PDF. Contemporary world history and Ethiopian development. Free resource for EuEE exam preparation.',
  alternates: { canonical: '/books/grade-11-history' },
}

export default function Page() {
  return <TextbookDownloadComponent grade={11} subject="History" title="Ethiopian Grade  11 History Textbook PDF – Download " description="Ethiopian Grade  11 History textbook PDF. Contemporary world history and Ethiopian development. Free resource for EuEE exam preparation." />
}
