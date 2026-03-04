import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Input } from './input'
import { Label } from './label'

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter your email...',
    type: 'email',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="w-72 space-y-2">
      <Label htmlFor="email">Email *</Label>
      <Input id="email" type="email" placeholder="your@email.com" />
    </div>
  ),
}

export const LargeInput: Story = {
  render: () => (
    <div className="w-72">
      <Input placeholder="Full Name" className="h-12 text-base" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
}

export const WithError: Story = {
  render: () => (
    <div className="w-72 space-y-1">
      <Label htmlFor="err">Email *</Label>
      <Input id="err" type="email" aria-invalid="true" placeholder="your@email.com" />
      <p className="text-xs text-destructive">Please enter a valid email address</p>
    </div>
  ),
}
