import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { EmployerPathway } from './employer-pathway'

const meta = {
  title: 'Templates/EmployerPathway',
  component: EmployerPathway,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof EmployerPathway>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
