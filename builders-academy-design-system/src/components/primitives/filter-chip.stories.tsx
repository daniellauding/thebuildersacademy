import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FilterChip } from './filter-chip'

const meta = {
  title: 'Primitives/FilterChip',
  component: FilterChip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterChip>

export default meta
type Story = StoryObj<typeof meta>

export const Inactive: Story = {
  args: { label: 'Under £25', active: false },
}

export const Active: Story = {
  args: { label: 'Under £25', active: true },
}

export const WithRemove: Story = {
  args: { label: 'CPD Accredited', active: true, onRemove: () => {} },
}

export const FilterGroup: Story = {
  args: { label: 'All Prices' },
  render: () => (
    <div className="flex gap-2">
      <FilterChip label="All Prices" active />
      <FilterChip label="Under £25" />
      <FilterChip label="£25–£50" />
      <FilterChip label="Over £50" />
    </div>
  ),
}
