import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { KeyFact } from './key-fact'
import { Clock, Download, Award, Monitor } from 'lucide-react'

const meta = {
  title: 'Primitives/KeyFact',
  component: KeyFact,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof KeyFact>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: <Clock className="size-6" />,
    label: 'Duration',
    value: '45 minutes',
  },
}

export const FourFacts: Story = {
  args: { icon: '⏱️', label: 'Duration', value: '45 minutes' },
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <KeyFact icon={<Clock className="size-6" />} label="Duration" value="45 minutes" />
      <KeyFact icon={<Download className="size-6" />} label="Certificate" value="Instant download" />
      <KeyFact icon={<Award className="size-6" />} label="Accreditation" value="CPD + CITB" />
      <KeyFact icon={<Monitor className="size-6" />} label="Format" value="Online, self-paced" />
    </div>
  ),
}
