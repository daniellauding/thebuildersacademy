"use client"

import * as React from "react"
import { Navbar } from "@/components/primitives/navbar"
import { Footer } from "@/components/primitives/footer"
import { ProgressSteps } from "@/components/primitives/progress-steps"
import { TrustBadge } from "@/components/primitives/trust-badge"
import { ProductCard } from "@/components/primitives/product-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Shield, Trash2, CreditCard, Check } from "lucide-react"

const CHECKOUT_STEPS = ["Cart", "Details", "Payment"]

function OrderSummary({ step }: { step: number }) {
  return (
    <Card className="sticky top-24">
      <CardContent className="p-6">
        <h3 className="font-bold text-h4 mb-4">Order Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span>CSCS Green Card Test</span>
            <span className="font-mono font-semibold">£35.00</span>
          </div>
          <Separator />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span className="text-primary font-mono">£35.00</span>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <Shield className="size-3 text-success" />
          <span>30-day money-back guarantee</span>
        </div>
        {step > 1 && (
          <a href="#" className="mt-2 block text-xs text-primary hover:underline">
            Edit cart
          </a>
        )}
      </CardContent>
    </Card>
  )
}

function CartStep({ onNext }: { onNext: () => void }) {
  return (
    <div>
      {/* Cart Items */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">CSCS Green Card Test</h3>
              <p className="text-sm text-muted-foreground">Online course • 45 minutes</p>
              <div className="mt-1 flex gap-1">
                <TrustBadge type="cpd" size="sm" />
                <TrustBadge type="citb" size="sm" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-primary font-mono">£35.00</span>
              <Button variant="ghost" size="icon-sm" aria-label="Remove item">
                <Trash2 className="size-4 text-muted-foreground" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cross-sell */}
      <div className="mt-6">
        <h3 className="text-h4 font-bold mb-4">Complete Your Training</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ProductCard title="Working at Height" price={25} rating={4.9} badges={["cpd"]} variant="compact" />
          <ProductCard title="Manual Handling" price={22} rating={4.8} badges={["cpd"]} variant="compact" />
        </div>
      </div>

      {/* Guest/Account toggle */}
      <div className="mt-8">
        <h3 className="text-h4 font-bold mb-4">Checkout As:</h3>
        <RadioGroup defaultValue="guest" className="gap-3">
          <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-muted">
            <RadioGroupItem value="guest" id="guest" />
            <Label htmlFor="guest" className="flex-1 cursor-pointer">
              <span className="font-semibold">Guest Checkout</span>
              <span className="block text-sm text-muted-foreground">Faster — no account needed</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-muted">
            <RadioGroupItem value="account" id="account" />
            <Label htmlFor="account" className="flex-1 cursor-pointer">
              <span className="font-semibold">Create Account</span>
              <span className="block text-sm text-muted-foreground">Save progress & access dashboard</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      <Button className="mt-6 w-full" size="xl" onClick={onNext}>
        Continue to Details →
      </Button>
    </div>
  )
}

function DetailsStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div>
      <h2 className="text-h3 font-bold mb-6">Your Details</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" placeholder="your@email.com" className="mt-1.5 h-12" />
          <p className="mt-1 text-xs text-muted-foreground">Certificate will be sent to this email</p>
        </div>
        <div>
          <Label htmlFor="fullname">Full Name *</Label>
          <Input id="fullname" placeholder="John Smith" className="mt-1.5 h-12" />
        </div>
        <div>
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" type="tel" placeholder="07700 900000" className="mt-1.5 h-12" />
        </div>
        <div>
          <Label htmlFor="company">Company Name (optional)</Label>
          <Input id="company" placeholder="Your company" className="mt-1.5 h-12" />
        </div>
        <div className="flex items-start gap-2 pt-2">
          <Checkbox id="newsletter" />
          <Label htmlFor="newsletter" className="text-sm font-normal text-muted-foreground">
            Send me offers and training tips (unsubscribe anytime)
          </Label>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <Button variant="ghost" size="lg" onClick={onBack}>
          ← Back
        </Button>
        <Button className="flex-1" size="xl" onClick={onNext}>
          Continue to Payment →
        </Button>
      </div>
    </div>
  )
}

function PaymentStep({ onBack }: { onBack: () => void }) {
  return (
    <div>
      <h2 className="text-h3 font-bold mb-6">Payment</h2>

      {/* Express checkout */}
      <div className="space-y-3">
        <Button variant="outline" className="w-full h-12 text-base font-semibold">
          Pay with Apple Pay
        </Button>
        <Button variant="outline" className="w-full h-12 text-base font-semibold">
          Pay with Google Pay
        </Button>
      </div>

      <div className="my-6 flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-sm text-muted-foreground">or pay with card</span>
        <Separator className="flex-1" />
      </div>

      {/* Card form */}
      <div className="space-y-4">
        <div>
          <Label htmlFor="card-number">Card Number</Label>
          <div className="relative mt-1.5">
            <Input id="card-number" placeholder="1234 5678 9012 3456" className="h-12 pl-10" />
            <CreditCard className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="expiry">Expiry Date</Label>
            <Input id="expiry" placeholder="MM/YY" className="mt-1.5 h-12" />
          </div>
          <div>
            <Label htmlFor="cvv">CVV</Label>
            <Input id="cvv" placeholder="123" className="mt-1.5 h-12" />
          </div>
        </div>
        <div>
          <Label htmlFor="card-name">Name on Card</Label>
          <Input id="card-name" placeholder="John Smith" className="mt-1.5 h-12" />
        </div>
      </div>

      {/* Security */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <TrustBadge type="secure" />
        <Badge variant="outline">Visa</Badge>
        <Badge variant="outline">Mastercard</Badge>
        <Badge variant="outline">Amex</Badge>
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        By completing purchase you agree to our{" "}
        <a href="/terms" className="text-primary hover:underline">Terms</a> and{" "}
        <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
      </p>

      <div className="mt-6 flex gap-3">
        <Button variant="ghost" size="lg" onClick={onBack}>
          ← Back
        </Button>
        <Button className="flex-1" size="xl">
          Complete Purchase (£35.00) →
        </Button>
      </div>
    </div>
  )
}

function SuccessScreen() {
  return (
    <div className="mx-auto max-w-lg text-center py-12">
      <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-success/10">
        <Check className="size-8 text-success" />
      </div>
      <h1 className="text-h1 font-bold">Order Confirmed!</h1>
      <p className="mt-2 text-muted-foreground">
        Order #BA-2024-1234 — Confirmation sent to your email
      </p>

      <Card className="mt-8 text-left">
        <CardContent className="p-6">
          <h3 className="font-bold mb-4">What Happens Next</h3>
          <ol className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white font-bold">1</span>
              <span>Check your email for course access details</span>
            </li>
            <li className="flex gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white font-bold">2</span>
              <span>Click the link to start your course immediately</span>
            </li>
            <li className="flex gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white font-bold">3</span>
              <span>Complete the assessment at your own pace</span>
            </li>
            <li className="flex gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white font-bold">4</span>
              <span>Download your certificate instantly upon passing</span>
            </li>
          </ol>
        </CardContent>
      </Card>

      <Button size="xl" className="mt-6 w-full">
        Start Your Course →
      </Button>

      <p className="mt-4 text-sm text-muted-foreground">
        Need help? Call <a href="tel:08001234567" className="text-primary font-semibold">0800 123 4567</a> or{" "}
        <button className="text-primary font-semibold hover:underline">start a live chat</button>
      </p>
    </div>
  )
}

export function CheckoutFlow() {
  const [step, setStep] = React.useState(1)
  const [completed, setCompleted] = React.useState(false)

  if (completed) {
    return (
      <>
        <Navbar />
        <SuccessScreen />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Progress */}
        <ProgressSteps steps={CHECKOUT_STEPS} currentStep={step} className="mb-10" />

        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* Step Content */}
          <div>
            {step === 1 && <CartStep onNext={() => setStep(2)} />}
            {step === 2 && <DetailsStep onNext={() => setStep(3)} onBack={() => setStep(1)} />}
            {step === 3 && <PaymentStep onBack={() => setStep(2)} />}
          </div>

          {/* Order Summary Sidebar */}
          <div className="hidden lg:block">
            <OrderSummary step={step} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
