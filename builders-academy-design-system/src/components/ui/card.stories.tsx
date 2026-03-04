import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './card'
import { Button } from './button'

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Course Card</CardTitle>
        <CardDescription>A basic card component</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Action</Button>
      </CardFooter>
    </Card>
  ),
}

export const ProductCard: Story = {
  render: () => (
    <Card className="w-72">
      <div className="aspect-video bg-muted rounded-t-xl" />
      <CardContent className="p-4">
        <h3 className="font-semibold">CSCS Green Card Test</h3>
        <p className="text-h2 font-bold text-primary mt-1">£35.00</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Start Now</Button>
      </CardFooter>
    </Card>
  ),
}
