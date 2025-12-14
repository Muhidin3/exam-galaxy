import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'
import { getBookMetadata } from '@/lib/book-data'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade  9 Physics Textbook PDF | Exam Galaxy ',
  description: 'Free Ethiopian Grade  9 Physics textbook PDF for Ethiopian students. Prepare for EuEE exam with comprehensive coverage of mechanics, thermodynamics, and more.',
  keywords: 'Ethiopian Grade  9 Physics, Physics textbook, Ethiopian physics, EuEE prep, physics PDF',
  openGraph: {
    title: 'Download Ethiopian Grade  9 Physics Textbook PDF | Exam Galaxy ',
    description: 'Free Ethiopian Grade  9 Physics textbook PDF for Ethiopian students. Prepare for EuEE exam.',
    type: 'website',
  },
  alternates: {
    canonical: '/books/grade-9-physics',
  },
}

export default function Grade9PhysicsPage() {
  return (
    <TextbookDownloadComponent
      grade={9}
      subject="Physics"
      title="Ethiopian Grade  9 Physics Textbook PDF | Exam Galaxy "
      description="Free Ethiopian Grade  9 Physics textbook PDF for Ethiopian students. Prepare for EuEE exam with comprehensive coverage of mechanics, thermodynamics, and more."
    />
  )
}
