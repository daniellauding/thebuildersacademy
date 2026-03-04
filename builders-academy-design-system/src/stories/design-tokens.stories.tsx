import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Design System/Tokens',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

// Helper component for color swatches
const ColorSwatch = ({ name, varName, value }: { name: string; varName: string; value?: string }) => (
  <div className="flex items-center gap-3 p-3 rounded-lg border">
    <div 
      className="w-16 h-16 rounded-lg border shadow-sm flex-shrink-0" 
      style={{ backgroundColor: value || `var(${varName})` }}
    />
    <div className="flex-1 min-w-0">
      <div className="font-medium text-sm">{name}</div>
      <code className="text-xs text-muted-foreground block truncate">{varName}</code>
      {value && <div className="text-xs text-muted-foreground mt-0.5">{value}</div>}
    </div>
  </div>
)

// Typography preview component
const TypeScale = ({ label, className, text }: { label: string; className: string; text: string }) => (
  <div className="border-b pb-4 mb-4">
    <div className="text-sm text-muted-foreground mb-2">{label}</div>
    <div className={className}>{text}</div>
  </div>
)

export const AllTokens: Story = {
  render: () => (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Design Tokens</h1>
        <p className="text-muted-foreground">
          Complete visual reference for The Builders Academy design system
        </p>
      </div>

      {/* Colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Colors</h2>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Brand Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ColorSwatch name="Primary" varName="--primary" value="#1F396D" />
            <ColorSwatch name="Primary Foreground" varName="--primary-foreground" value="#FFFFFF" />
            <ColorSwatch name="Secondary" varName="--secondary" value="#16A34A" />
            <ColorSwatch name="Secondary Foreground" varName="--secondary-foreground" value="#FFFFFF" />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Surface Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ColorSwatch name="Background" varName="--background" value="#FFFFFF" />
            <ColorSwatch name="Foreground" varName="--foreground" value="#334155" />
            <ColorSwatch name="Card" varName="--card" value="#FFFFFF" />
            <ColorSwatch name="Card Foreground" varName="--card-foreground" value="#334155" />
            <ColorSwatch name="Muted" varName="--muted" value="#F8FAFC" />
            <ColorSwatch name="Muted Foreground" varName="--muted-foreground" value="#475569" />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Semantic Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ColorSwatch name="Success" varName="--color-success" value="#16A34A" />
            <ColorSwatch name="Warning" varName="--color-warning" value="#F59E0B" />
            <ColorSwatch name="Error" varName="--color-error" value="#DC2626" />
            <ColorSwatch name="Info" varName="--color-info" value="#3B82F6" />
            <ColorSwatch name="Destructive" varName="--destructive" value="#DC2626" />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">UI Elements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ColorSwatch name="Border" varName="--border" value="#E2E8F0" />
            <ColorSwatch name="Input" varName="--input" value="#E2E8F0" />
            <ColorSwatch name="Ring (Focus)" varName="--ring" value="#1F396D" />
            <ColorSwatch name="Accent" varName="--accent" value="#E1F1EA" />
            <ColorSwatch name="Accent Foreground" varName="--accent-foreground" value="#334155" />
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Typography</h2>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Display Scale (Large Headings)</h3>
          <div className="space-y-4">
            <TypeScale label="D1 - 128px / 1.0" className="text-[128px] leading-none font-bold" text="Display 1" />
            <TypeScale label="D2 - 96px / 1.0" className="text-[96px] leading-none font-bold" text="Display 2" />
            <TypeScale label="D3 - 72px / 1.1" className="text-[72px] leading-[1.1] font-bold" text="Display 3" />
            <TypeScale label="D4 - 60px / 1.1" className="text-[60px] leading-[1.1] font-bold" text="Display 4" />
            <TypeScale label="D5 - 48px / 1.15" className="text-[48px] leading-[1.15] font-bold" text="Display 5" />
            <TypeScale label="D6 - 36px / 1.2" className="text-[36px] leading-[1.2] font-bold" text="Display 6" />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Heading Scale</h3>
          <div className="space-y-3">
            <TypeScale label="H1 - 30px / 1.2" className="text-[30px] leading-[1.2] font-bold" text="Heading 1" />
            <TypeScale label="H2 - 24px / 1.3" className="text-[24px] leading-[1.3] font-bold" text="Heading 2" />
            <TypeScale label="H3 - 20px / 1.4" className="text-[20px] leading-[1.4] font-bold" text="Heading 3" />
            <TypeScale label="H4 - 18px / 1.4" className="text-[18px] leading-[1.4] font-bold" text="Heading 4" />
            <TypeScale label="H5 - 16px / 1.5" className="text-[16px] leading-[1.5] font-bold" text="Heading 5" />
            <TypeScale label="H6 - 14px / 1.5" className="text-[14px] leading-[1.5] font-bold" text="Heading 6" />
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Font Families</h3>
          <div className="space-y-2">
            <div>
              <span className="text-sm text-muted-foreground">Sans-serif:</span>
              <code className="ml-2 text-sm bg-background px-2 py-1 rounded">Inter</code>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Monospace:</span>
              <code className="ml-2 text-sm bg-background px-2 py-1 rounded font-mono">JetBrains Mono</code>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Spacing Scale</h2>
        <div className="space-y-3">
          {[
            { label: '0', value: '0px' },
            { label: '0.5', value: '2px' },
            { label: '1', value: '4px' },
            { label: '1.5', value: '6px' },
            { label: '2', value: '8px' },
            { label: '2.5', value: '10px' },
            { label: '3', value: '12px' },
            { label: '3.5', value: '14px' },
            { label: '4', value: '16px' },
            { label: '5', value: '20px' },
            { label: '6', value: '24px' },
            { label: '7', value: '28px' },
            { label: '8', value: '32px' },
            { label: '9', value: '36px' },
            { label: '10', value: '40px' },
            { label: '11', value: '44px' },
            { label: '12', value: '48px' },
            { label: '14', value: '56px' },
            { label: '16', value: '64px' },
            { label: '20', value: '80px' },
            { label: '24', value: '96px' },
            { label: '32', value: '128px' },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-20 text-sm text-muted-foreground font-mono">{label}</div>
              <div className="w-24 text-sm text-muted-foreground">{value}</div>
              <div className="flex-1 flex items-center">
                <div className="h-8 bg-primary" style={{ width: value }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Border Radius */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Border Radius</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'SM', value: 'calc(0.5rem - 4px)', className: 'rounded-sm' },
            { label: 'MD', value: 'calc(0.5rem - 2px)', className: 'rounded-md' },
            { label: 'LG', value: '0.5rem', className: 'rounded-lg' },
            { label: 'XL', value: 'calc(0.5rem + 4px)', className: 'rounded-xl' },
            { label: '2XL', value: 'calc(0.5rem + 8px)', className: 'rounded-2xl' },
            { label: '3XL', value: 'calc(0.5rem + 12px)', className: 'rounded-3xl' },
            { label: 'Full', value: '9999px', className: 'rounded-full' },
          ].map(({ label, value, className }) => (
            <div key={label} className="text-center">
              <div className={`w-24 h-24 bg-primary mx-auto mb-2 ${className}`} />
              <div className="text-sm font-medium">{label}</div>
              <div className="text-xs text-muted-foreground">{value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Shadows */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Box Shadows (4-Level Elevation)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Level 1', value: '0 1px 3px rgba(0, 0, 0, 0.08)', className: 'shadow-level-1' },
            { label: 'Level 2', value: '0 4px 16px rgba(0, 0, 0, 0.08)', className: 'shadow-level-2' },
            { label: 'Level 3', value: '0 8px 32px rgba(0, 0, 0, 0.12)', className: 'shadow-level-3' },
            { label: 'Level 4', value: '0 20px 48px rgba(0, 0, 0, 0.16)', className: 'shadow-level-4' },
          ].map(({ label, value, className }) => (
            <div key={label} className="text-center">
              <div className={`w-full h-32 bg-background rounded-lg mx-auto mb-3`} style={{ boxShadow: value }} />
              <div className="text-sm font-medium">{label}</div>
              <code className="text-xs text-muted-foreground block mt-1">{value}</code>
            </div>
          ))}
        </div>
      </section>

      {/* Breakpoints */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Responsive Breakpoints</h2>
        <div className="space-y-3">
          {[
            { label: 'sm', value: '640px', desc: 'Small devices (phones)' },
            { label: 'md', value: '768px', desc: 'Medium devices (tablets)' },
            { label: 'lg', value: '1024px', desc: 'Large devices (desktops)' },
            { label: 'xl', value: '1280px', desc: 'Extra large devices' },
            { label: '2xl', value: '1536px', desc: 'Ultra wide screens' },
          ].map(({ label, value, desc }) => (
            <div key={label} className="flex items-center gap-4 p-4 border rounded-lg">
              <code className="text-lg font-semibold w-16">{label}:</code>
              <div className="flex-1">
                <div className="font-medium">{value}</div>
                <div className="text-sm text-muted-foreground">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Border Width */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Border Width</h2>
        <div className="space-y-3">
          {[
            { label: 'Default', value: '1px' },
            { label: '0', value: '0px' },
            { label: '2', value: '2px' },
            { label: '4', value: '4px' },
            { label: '8', value: '8px' },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-20 text-sm font-medium">{label}</div>
              <div className="w-16 text-sm text-muted-foreground">{value}</div>
              <div className="flex-1">
                <div className="h-12 bg-muted border-primary rounded-lg" style={{ borderWidth: value, borderStyle: 'solid' }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Examples */}
      <section className="mb-12 bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Token Usage in Code</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">CSS Variables</h3>
            <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
{`/* Colors */
background-color: var(--primary);
color: var(--primary-foreground);

/* Typography */
font-size: var(--text-h1);
line-height: var(--text-h1--line-height);

/* Shadows */
box-shadow: var(--shadow-level-2);`}
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Tailwind Classes</h3>
            <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
{`<Button className="bg-primary text-primary-foreground">
  Primary Button
</Button>

<Card className="shadow-level-2 rounded-lg">
  Card with elevation
</Card>

<h1 className="text-[30px] leading-[1.2] font-bold">
  Heading 1
</h1>`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  ),
}
