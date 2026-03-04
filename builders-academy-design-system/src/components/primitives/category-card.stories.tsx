import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CategoryCard } from './category-card'

const meta = {
  title: 'Primitives/CategoryCard',
  component: CategoryCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof CategoryCard>

export default meta
type Story = StoryObj<typeof meta>

export const CSCS: Story = {
  args: {
    title: 'I need a CSCS Card',
    subtitle: 'Green, Blue, Gold & more',
    priceFrom: 30,
    icon: 'cscs',
  },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
}

export const Safety: Story = {
  args: {
    title: 'I need Safety Training',
    subtitle: 'Health & Safety courses',
    priceFrom: 25,
    icon: 'safety',
  },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
}

export const Employer: Story = {
  args: {
    title: 'For My Business',
    subtitle: 'Bulk training & dashboard',
    cta: 'Request Quote',
    icon: 'employer',
  },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
}

export const ThreeCards: Story = {
  args: { title: 'I need a CSCS Card' },
  render: () => (
    <div className="grid grid-cols-3 gap-6 max-w-4xl">
      <CategoryCard title="I need a CSCS Card" subtitle="Green, Blue, Gold & more" priceFrom={30} icon="cscs" />
      <CategoryCard title="I need Safety Training" subtitle="Health & Safety courses" priceFrom={25} icon="safety" />
      <CategoryCard title="For My Business" subtitle="Bulk training & dashboard" cta="Request Quote" icon="employer" />
    </div>
  ),
}
