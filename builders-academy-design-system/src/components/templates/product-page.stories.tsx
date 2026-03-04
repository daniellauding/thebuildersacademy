import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ProductPage } from './product-page'

const meta = {
  title: 'Templates/ProductPage',
  component: ProductPage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ProductPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
