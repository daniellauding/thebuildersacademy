import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CategoryPage } from './category-page'

const meta = {
  title: 'Templates/CategoryPage',
  component: CategoryPage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof CategoryPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
