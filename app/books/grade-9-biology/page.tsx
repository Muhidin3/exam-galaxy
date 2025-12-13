import { Metadata } from 'next'
import { TextbookDownloadComponent } from '@/components/textbook-download-component'

export const metadata: Metadata = {
  title: 'Ethiopian Grade  9 Biology Textbook PDF – Download ',
  description: 'Ethiopian Grade  9 Biology textbook PDF download. Learn cell biology, genetics, and ecology. Prepare for EuEE with our comprehensive study material.',
  keywords: 'Ethiopian Grade  9 Biology, Biology textbook, Ethiopian biology, EuEE prep, biology PDF',
  alternates: {
    canonical: '/books/grade-9-biology',
  },
}

export default function Grade9BiologyPage() {
  return (
    <TextbookDownloadComponent
      grade={9}
      subject="Biology"
      title="Ethiopian Grade  9 Biology Textbook PDF – Download "
      description="Ethiopian Grade  9 Biology textbook PDF download. Learn cell biology, genetics, and ecology. Prepare for EuEE with our comprehensive study material."
    />
  )
}
