import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade 10 Geography New Curriculum Textbook',
  description: 'Ethiopian Grade 10 Geography textbook PDF. Global geography, climate systems, and human-environment interaction. Free download for students.',
  alternates: { canonical: '/books/grade-10-geography' },
}

export default function Grade10GeographyPage() {
  return (
    <TextbookDownloadComponent
      grade={10}
      subject="Geography"
      title="Ethiopian Grade 10 Geography New Curriculum Textbook pdf"
      description="Ethiopian Grade 10 Geography textbook PDF. Global geography, climate systems, and human-environment interaction. Free download for students."
    />
  )
}
