import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Homepage } from './homepage'

const meta = {
  title: 'Templates/Homepage',
  component: Homepage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Homepage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
