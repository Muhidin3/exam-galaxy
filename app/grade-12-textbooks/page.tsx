import { Metadata } from 'next'
import { GradeTextbooksPage } from '@/components/grade-textbooks-page'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade  12 Textbooks PDF - Free Download for Ethiopian Students (2025)',
  description: 'Download free Ethiopian Grade  12 Ethiopian textbooks in PDF format. Access Physics, Chemistry, Biology, Mathematics, English, and SAT preparation materials for Ethiopian Grade  12 students preparing for EuEE exam.',
  keywords: 'Ethiopian Grade  12 textbooks Ethiopia, Ethiopian Grade  12 Physics PDF, Ethiopian Grade  12 Chemistry PDF, Ethiopian Grade  12 Biology PDF, Ethiopian Grade  12 Mathematics PDF, Ethiopian Grade  12 English PDF, Ethiopian curriculum Ethiopian Grade  12, EuEE preparation',
  openGraph: {
    title: 'Ethiopian Grade  12 Textbooks PDF - Free Download',
    description: 'Free Ethiopian Ethiopian Grade  12 textbook PDFs for all subjects - Perfect for EuEE preparation',
    type: 'website',
  },
  alternates: {
    canonical: '/grade-12-textbooks',
  },
}

export default function Grade12TextbooksPage() {
  return <GradeTextbooksPage grade={12} />
}
