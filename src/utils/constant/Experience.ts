import { url } from 'inspector'

interface IExperience {
  title: string
  company: string
  type: string
  description: string
  date: string
}
export const experience = [
  {
    title: 'Web Developer and Mobile Developer',
    company: 'Hospital Project',
    type: 'Education',
    description:
      'We did a website project for Hartono Medika Hospital and we implemented the data into our database using Postgre',
    date: 'May - Jun 2024',
    url: 'https://github.com/AdangIrawan/uasbackend.git',
  },
  {
    title: 'Coordinator Event Division Spiritually Christian, Tarumanagara University',
    company: 'Universitas Tarumanagara',
    type: 'Organization',
    description:
      'Lead and coordinate every implementation of the spiritual and supervise the preparation and implementation of events. Prepare work plans and budgets for each schools, events division and manage the budget division effectively and efficiently. Evaluate each members performance and provide criticism and suggestions to provide further good performance.',
    date: 'Agu 2023 - Agu 2025',
    url: 'https://www.instagram.com/p/DBbkUiJy2Bk/?igsh=MTc2MTN4bW91ODZvMA==',
  },
]
