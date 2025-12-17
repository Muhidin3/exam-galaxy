import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade 9 Geography New Curriculum Textbook',
  description: 'Ethiopian Grade 9 Geography textbook PDF download. Learn physical and human geography. Prepare for EuEE with comprehensive study materials.',
  keywords: 'Ethiopian Grade 9 Geography, Geography textbook, Ethiopian geography, EuEE prep, geography PDF',
  alternates: {
    canonical: '/books/grade-9-geography',
  },
}

export default function Grade9GeographyPage() {
  return (
    <TextbookDownloadComponent
      grade={9}
      subject="Geography"
      title="Ethiopian Grade 9 Geography New Curriculum Textbook pdf"
      description="Ethiopian Grade 9 Geography textbook PDF download. Learn physical and human geography. Prepare for EuEE with comprehensive study materials."
    />
  )
}
