import { Metadata } from 'next'
import { GradeTextbooksPage9_10 } from '@/components/grade-textbooks-page-9_10'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade  10 Textbooks PDF - Free Download for Ethiopian Students (2025)',
  description: 'Download free Ethiopian Grade  10 Ethiopian textbooks in PDF format. Access Physics, Chemistry, Biology, Mathematics, English, and SAT preparation materials for Ethiopian Grade  10 students preparing for EuEE exam.',
  keywords: 'Ethiopian Grade  10 textbooks Ethiopia, Ethiopian Grade  10 Physics PDF, Ethiopian Grade  10 Chemistry PDF, Ethiopian Grade  10 Biology PDF, Ethiopian Grade  10 Mathematics PDF, Ethiopian Grade  10 English PDF, Ethiopian curriculum Ethiopian Grade  10',
  openGraph: {
    title: 'Ethiopian Grade  10 Textbooks PDF - Free Download',
    description: 'Free Ethiopian Ethiopian Grade  10 textbook PDFs for all subjects',
    type: 'website',
  },
  alternates: {
    canonical: '/grade-10-textbooks',
  },
}

export default function Grade10TextbooksPage() {
  return <GradeTextbooksPage9_10 grade={10} />
}
