import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ProductCard } from './product-card'

const meta = {
  title: 'Primitives/ProductCard',
  component: ProductCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'CSCS Green Card Test',
    price: 35,
    rating: 4.9,
    reviewCount: 1240,
    duration: '45 min',
    badges: ['cpd', 'citb'],
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
}

export const Compact: Story = {
  args: {
    title: 'Working at Height',
    price: 25,
    rating: 4.8,
    badges: ['cpd'],
    variant: 'compact',
  },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
}

export const Featured: Story = {
  args: {
    title: 'First Aid at Work',
    price: 40,
    rating: 4.9,
    reviewCount: 1560,
    duration: '2 hours',
    badges: ['cpd', 'citb'],
    variant: 'featured',
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
}

export const CardGrid: Story = {
  args: { title: 'CSCS Green Card', price: 35, rating: 4.9, badges: ['cpd'] },
  render: () => (
    <div className="grid grid-cols-3 gap-6 max-w-4xl">
      <ProductCard title="CSCS Green Card" price={35} rating={4.9} reviewCount={1240} duration="45 min" badges={['cpd', 'citb']} />
      <ProductCard title="Working at Height" price={25} rating={4.8} reviewCount={890} duration="1 hour" badges={['cpd']} />
      <ProductCard title="First Aid at Work" price={40} rating={4.9} reviewCount={1560} duration="2 hours" badges={['cpd', 'citb']} variant="featured" />
    </div>
  ),
}
