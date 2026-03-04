import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from './button'
import { ArrowRight, ShoppingCart, Loader2 } from 'lucide-react'

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'default', 'lg', 'xl', 'icon', 'icon-sm', 'icon-lg'],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'default',
    children: 'Start Now',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Learn More',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'View Details',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Cancel',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Button size="xs">XS</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">XL (Mobile)</Button>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button>
        <ShoppingCart /> Add to Cart
      </Button>
      <Button variant="secondary">
        Continue <ArrowRight />
      </Button>
    </div>
  ),
}

export const Loading: Story = {
  render: () => (
    <Button disabled>
      <Loader2 className="animate-spin" />
      Processing...
    </Button>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <div className="w-80">
      <Button className="w-full" size="lg">
        Complete Purchase
      </Button>
    </div>
  ),
}
