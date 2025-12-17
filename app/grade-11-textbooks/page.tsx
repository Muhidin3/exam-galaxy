import { Metadata } from 'next'
import { GradeTextbooksPage } from '@/components/grade-textbooks-page'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade 11 Textbooks PDF - Free Download for Ethiopian Students (2025)',
  description: 'Download free Ethiopian Grade 11 Ethiopian textbooks in PDF format. Access Physics, Chemistry, Biology, Mathematics, English, and SAT preparation materials for Ethiopian Grade 11 students preparing for EuEE exam.',
  keywords: 'Ethiopian Grade 11 textbooks Ethiopia, Ethiopian Grade 11 Physics PDF, Ethiopian Grade 11 Chemistry PDF, Ethiopian Grade 11 Biology PDF, Ethiopian Grade 11 Mathematics PDF, Ethiopian Grade 11 English PDF, Ethiopian curriculum Ethiopian Grade 11',
  openGraph: {
    title: 'Ethiopian Grade 11 Textbooks PDF - Free Download',
    description: 'Free Ethiopian Ethiopian Grade 11 textbook PDFs for all subjects',
    type: 'website',
  },
  alternates: {
    canonical: '/grade-11-textbooks',
  },
}

export default function Grade11TextbooksPage() {
  return <GradeTextbooksPage grade={11} />
}
