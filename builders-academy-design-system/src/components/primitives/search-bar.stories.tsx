import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SearchBar } from './search-bar'

const meta = {
  title: 'Primitives/SearchBar',
  component: SearchBar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['hero', 'header', 'category'],
    },
  },
} satisfies Meta<typeof SearchBar>

export default meta
type Story = StoryObj<typeof meta>

export const Hero: Story = {
  args: { variant: 'hero', placeholder: "Search courses, e.g. 'CSCS Green Card'..." },
  decorators: [(Story) => <div className="w-[600px]"><Story /></div>],
}

export const Header: Story = {
  args: { variant: 'header' },
  decorators: [(Story) => <div className="w-[300px]"><Story /></div>],
}

export const Category: Story = {
  args: { variant: 'category', placeholder: 'Search Health & Safety courses...' },
  decorators: [(Story) => <div className="w-[500px]"><Story /></div>],
}
