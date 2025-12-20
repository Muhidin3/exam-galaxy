import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Download Ethiopian Grade 9 Chemistry New Curriculum Textbook',//Download Ethiopian Grade 9 Biology Textbook PDF | Exam Galaxy
  description: 'Download Ethiopian Grade 9 Chemistry textbook PDF. Master atomic structure, chemical reactions, and periodic table. Free resource for Ethiopian students.',
  keywords: 'Ethiopian Grade 9 Chemistry, Chemistry textbook, Ethiopian chemistry, EuEE prep, chemistry PDF',
  openGraph: {
    title: 'Download Ethiopian Grade 9 Chemistry New Curriculum Textbook',
    description: 'Download Ethiopian Grade 9 Chemistry textbook PDF for Ethiopian students.',
    type: 'website',
  },
  alternates: {
    canonical: '/books/grade-9-chemistry',
  },
}

export default function Grade9ChemistryPage() {
  return (
    <TextbookDownloadComponent
      grade={9}
      subject="Chemistry"
      title="Ethiopian Grade 9 Chemistry New Curriculum Textbook pdf"
      description="Download Ethiopian Grade 9 Chemistry textbook PDF. Master atomic structure, chemical reactions, and periodic table. Free resource for Ethiopian students."
    />
  )
}
