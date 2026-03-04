import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CheckoutFlow } from './checkout-flow'

const meta = {
  title: 'Templates/CheckoutFlow',
  component: CheckoutFlow,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof CheckoutFlow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
