import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade  9 Mathematics Textbook PDF – Social Science – Download ',
  description: 'Ethiopian Grade  9 Mathematics for Social Science stream. Learn mathematics relevant to economics and social studies. Free PDF download.',
  keywords: 'Ethiopian Grade  9 Math, Mathematics textbook, Social Science Math, Ethiopian math, EuEE prep',
  alternates: {
    canonical: '/books/grade-9-math-social',
  },
}

export default function Grade9MathSocialPage() {
  return (
    <TextbookDownloadComponent
      grade={9}
      subject="Mathematics (Social Science)"
      title="Ethiopian Grade  9 Mathematics Textbook PDF – Social Science – Download "
      description="Ethiopian Grade  9 Mathematics for Social Science stream. Learn mathematics relevant to economics and social studies. Free PDF download."
    />
  )
}
