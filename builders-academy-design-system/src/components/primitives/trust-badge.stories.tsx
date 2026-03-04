import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { TrustBadge } from './trust-badge'

const meta = {
  title: 'Primitives/TrustBadge',
  component: TrustBadge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['cpd', 'citb', 'iosh', 'trustpilot', 'secure', 'popular'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof TrustBadge>

export default meta
type Story = StoryObj<typeof meta>

export const CPD: Story = { args: { type: 'cpd' } }
export const CITB: Story = { args: { type: 'citb' } }
export const IOSH: Story = { args: { type: 'iosh' } }
export const Trustpilot: Story = { args: { type: 'trustpilot' } }
export const Secure: Story = { args: { type: 'secure' } }
export const Popular: Story = { args: { type: 'popular' } }

export const AllTypes: Story = {
  args: { type: 'cpd' },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <TrustBadge type="cpd" />
      <TrustBadge type="citb" />
      <TrustBadge type="iosh" />
      <TrustBadge type="trustpilot" />
      <TrustBadge type="secure" />
      <TrustBadge type="popular" />
    </div>
  ),
}

export const AllSizes: Story = {
  args: { type: 'cpd' },
  render: () => (
    <div className="flex items-center gap-2">
      <TrustBadge type="cpd" size="sm" />
      <TrustBadge type="cpd" size="md" />
      <TrustBadge type="cpd" size="lg" />
    </div>
  ),
}
