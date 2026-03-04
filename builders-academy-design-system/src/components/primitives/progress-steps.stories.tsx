import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ProgressSteps } from './progress-steps'

const meta = {
  title: 'Primitives/ProgressSteps',
  component: ProgressSteps,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressSteps>

export default meta
type Story = StoryObj<typeof meta>

const steps = ['Cart', 'Details', 'Payment']

export const Step1: Story = {
  args: { steps, currentStep: 1 },
}

export const Step2: Story = {
  args: { steps, currentStep: 2 },
}

export const Step3: Story = {
  args: { steps, currentStep: 3 },
}
