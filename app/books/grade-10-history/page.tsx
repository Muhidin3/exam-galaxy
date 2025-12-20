import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade 10 History New Curriculum Textbook',
  description: 'Ethiopian Grade 10 History textbook PDF. Modern history, Ethiopian Renaissance, and global developments. Free resource for EuEE prep.',
  alternates: { canonical: '/books/grade-10-history' },
}

export default function Grade10HistoryPage() {
  return (
    <TextbookDownloadComponent
      grade={10}
      subject="History"
      title="Ethiopian Grade 10 History New Curriculum Textbook pdf"
      description="Ethiopian Grade 10 History textbook PDF. Modern history, Ethiopian Renaissance, and global developments. Free resource for EuEE prep."
    />
  )
}
