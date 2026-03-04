import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HowItWorks } from './how-it-works'

const meta = {
  title: 'Primitives/HowItWorks',
  component: HowItWorks,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof HowItWorks>

export default meta
type Story = StoryObj<typeof meta>

const steps = [
  { number: 1, title: 'Choose Your Course', description: 'Browse our CPD accredited training courses' },
  { number: 2, title: 'Complete Online', description: 'Study at your own pace with instant access' },
  { number: 3, title: 'Get Certified', description: 'Download your certificate immediately' },
]

export const Horizontal: Story = {
  args: { steps, variant: 'horizontal' },
}

export const Vertical: Story = {
  args: { steps, variant: 'vertical' },
}
