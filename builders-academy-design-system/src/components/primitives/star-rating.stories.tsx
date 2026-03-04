import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { StarRating } from './star-rating'

const meta = {
  title: 'Primitives/StarRating',
  component: StarRating,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['compact', 'full', 'minimal'],
    },
  },
} satisfies Meta<typeof StarRating>

export default meta
type Story = StoryObj<typeof meta>

export const Compact: Story = {
  args: { value: 4.8, showCount: true, count: 2340, variant: 'compact' },
}

export const Full: Story = {
  args: { value: 4.9, showCount: true, count: 1240, variant: 'full' },
}

export const Minimal: Story = {
  args: { value: 4.7, variant: 'minimal' },
}
