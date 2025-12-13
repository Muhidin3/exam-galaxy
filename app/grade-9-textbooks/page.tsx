import { Metadata } from 'next'
import { GradeTextbooksPage9_10 } from '@/components/grade-textbooks-page-9_10'

export const metadata: Metadata = {
  title: 'Ethiopian Grade  9 Textbooks PDF - Free Download for Ethiopian Students (2025)',
  description: 'Download free Ethiopian Grade  9 Ethiopian textbooks in PDF format. Access Physics, Chemistry, Biology, Mathematics, English, and SAT preparation materials for Ethiopian Grade  9 students preparing for EuEE exam.',
  keywords: 'Ethiopian Grade  9 textbooks Ethiopia, Ethiopian Grade  9 Physics PDF, Ethiopian Grade  9 Chemistry PDF, Ethiopian Grade  9 Biology PDF, Ethiopian Grade  9 Mathematics PDF, Ethiopian Grade  9 English PDF, Ethiopian curriculum Ethiopian Grade  9',
  openGraph: {
    title: 'Ethiopian Grade  9 Textbooks PDF - Free Download',
    description: 'Free Ethiopian Ethiopian Grade  9 textbook PDFs for all subjects',
    type: 'website',
  },
  alternates: {
    canonical: '/grade-9-textbooks',
  },
}

export default function Grade9TextbooksPage() {
  return <GradeTextbooksPage9_10 grade={9} />
}
