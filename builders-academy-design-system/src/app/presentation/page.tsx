'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: 'The Builders Academy',
    subtitle: 'Website Redesign Presentation',
    type: 'cover',
    content: (
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#0066CC] to-[#FF6B00] bg-clip-text text-transparent">
          The Builders Academy
        </h1>
        <p className="text-3xl text-gray-600 mb-12">Website Redesign Presentation</p>
        <div className="space-y-4 text-xl text-gray-500">
          <p>UX Audit → Strategic Direction → Design System</p>
          <p className="text-sm mt-8">Daniel Lauding · March 2026</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: 'Initial Findings',
    subtitle: '4 Critical Issues from Audit',
    type: 'content',
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-900 mb-3">🚨 Trust is Buried</h3>
            <p className="text-gray-700">Accreditations hidden in footer. Competitors lead with CSCS, CITB logos.</p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-orange-900 mb-3">⚠️ No B2B Pathway</h3>
            <p className="text-gray-700">Employers can't find workforce solutions. Missing dedicated employer section.</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-900 mb-3">🔍 109+ Navigation Links</h3>
            <p className="text-gray-700">Cognitive overload. Users can't find relevant courses quickly.</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">💳 Checkout Friction</h3>
            <p className="text-gray-700">4-step process. Manual entry of employer details creates abandonment.</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 text-center">Source: UX Heuristics, Content Audit, Competitive Benchmark</p>
      </div>
    )
  },
  {
    id: 3,
    title: 'Opportunity Matrix',
    subtitle: 'Impact vs Effort Priorities',
    type: 'content',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">High Impact</div>
            <div className="text-sm text-gray-500">Quick Wins</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">Medium Impact</div>
            <div className="text-sm text-gray-500">Strategic Investments</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-600">Low Impact</div>
            <div className="text-sm text-gray-500">Deprioritize</div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-bold text-green-900">P0: Trust-First Hero (High Impact, Low Effort)</h4>
            <p className="text-sm text-gray-700">Move accreditations above fold → Instant credibility boost</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-bold text-green-900">P0: Dedicated Employer Section (High Impact, Medium Effort)</h4>
            <p className="text-sm text-gray-700">B2B pathway → Unlock 40% revenue potential</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-bold text-blue-900">P1: Smart Discovery (Medium Impact, Low Effort)</h4>
            <p className="text-sm text-gray-700">Search + filters → Reduce 109 links to 3 categories</p>
          </div>
          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <h4 className="font-bold text-gray-900">P2: Finance Simplification (Medium Impact, High Effort)</h4>
            <p className="text-sm text-gray-700">Requires Magento backend changes</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: 'Strategic Focus',
    subtitle: '3 Pillars for Success',
    type: 'content',
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Trust First</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Accreditations hero</li>
              <li>• Success stats visible</li>
              <li>• Instructor credentials</li>
              <li>• Student testimonials</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-orange-900 mb-3">B2B Revenue</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Dedicated employer page</li>
              <li>• Team pricing tiers</li>
              <li>• Case studies</li>
              <li>• Compliance benefits</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-green-900 mb-3">Smart Discovery</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Search bar prominent</li>
              <li>• 3 main categories</li>
              <li>• Course filters</li>
              <li>• Personalized quiz</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-6 text-center">
          <p className="text-lg font-semibold text-gray-800">
            Goal: +100% conversion rate by reducing friction and building trust
          </p>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: 'Style Variants',
    subtitle: '3 Hero Approaches',
    type: 'content',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-6">
          <div className="border-2 border-blue-300 rounded-lg p-4 bg-white">
            <div className="bg-blue-600 text-white text-center py-3 rounded mb-4 font-bold">Variant A</div>
            <h4 className="font-bold text-gray-900 mb-2">Trust-First</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>✓ CITB/CSCS logos top</li>
              <li>✓ Stats grid (92%, 48h)</li>
              <li>✓ Social proof</li>
            </ul>
            <div className="mt-4 text-xs text-gray-500">
              Best for: First-time visitors
            </div>
          </div>
          <div className="border-2 border-orange-300 rounded-lg p-4 bg-white">
            <div className="bg-orange-600 text-white text-center py-3 rounded mb-4 font-bold">Variant B</div>
            <h4 className="font-bold text-gray-900 mb-2">Search-First</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>✓ Large search bar</li>
              <li>✓ Popular courses</li>
              <li>✓ Quick filters</li>
            </ul>
            <div className="mt-4 text-xs text-gray-500">
              Best for: Returning users
            </div>
          </div>
          <div className="border-2 border-green-300 rounded-lg p-4 bg-green-50">
            <div className="bg-green-600 text-white text-center py-3 rounded mb-4 font-bold">Variant C ⭐</div>
            <h4 className="font-bold text-gray-900 mb-2">Story-First</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>✓ Instructor profiles</li>
              <li>✓ Student testimonials</li>
              <li>✓ Human connection</li>
            </ul>
            <div className="mt-4 text-xs text-green-700 font-semibold">
              🏆 Recommended (unique differentiation)
            </div>
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <strong>Recommendation:</strong> Variant C (Story-First) — No UK competitor uses human-first approach. Creates emotional connection while maintaining trust signals.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: 'Live Prototypes',
    subtitle: 'Interactive Wireframes Ready',
    type: 'content',
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">7 Working Pages Built in Next.js</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/variants/variant-a" className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow border border-gray-200">
              <h4 className="font-bold text-gray-900">Variant A: Trust-First</h4>
              <p className="text-sm text-gray-600">Accreditations hero</p>
            </Link>
            <Link href="/variants/variant-b" className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow border border-gray-200">
              <h4 className="font-bold text-gray-900">Variant B: Search-First</h4>
              <p className="text-sm text-gray-600">Discovery focused</p>
            </Link>
            <Link href="/variants/variant-c" className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow border border-gray-200">
              <h4 className="font-bold text-gray-900">Variant C: Story-First ⭐</h4>
              <p className="text-sm text-gray-600">Human connection</p>
            </Link>
            <Link href="/find-course" className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow border border-gray-200">
              <h4 className="font-bold text-gray-900">Find Your Course</h4>
              <p className="text-sm text-gray-600">Interactive quiz</p>
            </Link>
            <Link href="/why-choose-tba" className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow border border-gray-200">
              <h4 className="font-bold text-gray-900">Why Choose TBA</h4>
              <p className="text-sm text-gray-600">Feature showcase</p>
            </Link>
            <Link href="/for-employers" className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow border border-gray-200">
              <h4 className="font-bold text-gray-900">For Employers</h4>
              <p className="text-sm text-gray-600">B2B landing page</p>
            </Link>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500">
          All prototypes clickable and interactive — test on real devices
        </p>
      </div>
    )
  },
  {
    id: 7,
    title: 'Information Architecture',
    subtitle: 'Simplified Navigation',
    type: 'content',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-red-600 mb-4">❌ Before (109+ links)</h3>
            <div className="bg-red-50 border border-red-200 rounded p-4 text-sm">
              <ul className="space-y-1 text-gray-700">
                <li>• 15+ course categories</li>
                <li>• 50+ individual courses</li>
                <li>• 20+ informational pages</li>
                <li>• Scattered employer info</li>
                <li>• Hidden accreditations</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-green-600 mb-4">✅ After (3 main paths)</h3>
            <div className="bg-green-50 border border-green-200 rounded p-4 text-sm">
              <ul className="space-y-2 text-gray-700">
                <li><strong>1. For Workers</strong> → Course search + quiz</li>
                <li><strong>2. For Employers</strong> → Team training + case studies</li>
                <li><strong>3. Quick Actions</strong> → Book course, Contact, Login</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-green-300">
                <p className="font-semibold">Search bar handles all courses</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <strong>Result:</strong> 96% reduction in top-level nav items. Users find courses in 2 clicks vs 5+.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: 'SEO & Technical',
    subtitle: 'Performance Baseline',
    type: 'content',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-green-900 mb-3">✅ Strong Foundation</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Google Rank #1-3 for "CSCS courses"</li>
              <li>• 2,400+ indexed pages</li>
              <li>• Mobile responsive</li>
              <li>• HTTPS secure</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-yellow-900 mb-3">⚠️ Optimization Opportunities</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• PageSpeed: 45/100 (target 80+)</li>
              <li>• Image optimization needed</li>
              <li>• Reduce JavaScript bundles</li>
              <li>• Implement lazy loading</li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-3">🎯 Quick Wins</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-semibold mb-1">Meta Descriptions</div>
              <p className="text-gray-600">Add unique descriptions to all courses</p>
            </div>
            <div>
              <div className="font-semibold mb-1">Alt Text</div>
              <p className="text-gray-600">Descriptive image alt tags</p>
            </div>
            <div>
              <div className="font-semibold mb-1">Schema Markup</div>
              <p className="text-gray-600">Course + Review structured data</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: 'Success Metrics',
    subtitle: 'How We Measure Impact',
    type: 'content',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
            <h3 className="text-lg font-bold text-green-900 mb-4">Primary KPIs</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Conversion Rate</span>
                <span className="font-bold text-green-700">+100% target</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Time to Course Find</span>
                <span className="font-bold text-green-700">-60% (5→2 clicks)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Employer Enquiries</span>
                <span className="font-bold text-green-700">+200% (new pathway)</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Secondary KPIs</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Bounce Rate</span>
                <span className="font-bold text-blue-700">-30%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Page Speed</span>
                <span className="font-bold text-blue-700">45→80+ score</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Mobile Conversions</span>
                <span className="font-bold text-blue-700">+50%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">📊 Tracking Implementation</h3>
          <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
            <div>
              <strong>Week 1-2:</strong> Baseline analytics setup
            </div>
            <div>
              <strong>Week 3-4:</strong> A/B test variants
            </div>
            <div>
              <strong>Week 5+:</strong> Continuous optimization
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: 'Implementation Roadmap',
    subtitle: '4 Phases Over 8 Weeks',
    type: 'content',
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <div className="text-2xl font-bold text-blue-900 mb-2">Phase 1</div>
            <div className="text-sm font-semibold mb-2">Week 1-2</div>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Design system finalization</li>
              <li>• Component library</li>
              <li>• Style guide docs</li>
            </ul>
          </div>
          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
            <div className="text-2xl font-bold text-green-900 mb-2">Phase 2</div>
            <div className="text-sm font-semibold mb-2">Week 3-4</div>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Homepage variants</li>
              <li>• Employer section</li>
              <li>• Course discovery</li>
            </ul>
          </div>
          <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded">
            <div className="text-2xl font-bold text-orange-900 mb-2">Phase 3</div>
            <div className="text-sm font-semibold mb-2">Week 5-6</div>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Product pages</li>
              <li>• Checkout flow</li>
              <li>• Mobile optimization</li>
            </ul>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
            <div className="text-2xl font-bold text-purple-900 mb-2">Phase 4</div>
            <div className="text-sm font-semibold mb-2">Week 7-8</div>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• A/B testing</li>
              <li>• Analytics setup</li>
              <li>• Launch & monitor</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Deliverables Per Phase</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Design:</strong> Figma components, prototypes, design specs
            </div>
            <div>
              <strong>Development:</strong> React components, Magento integration, documentation
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 11,
    title: 'Recommendation',
    subtitle: 'Story-First + B2B Focus',
    type: 'content',
    content: (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🏆 Primary Recommendation</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Variant C: Story-First Hero</h3>
                <p className="text-gray-700">Human-first approach with instructor profiles and student testimonials. Unique differentiation — no UK competitor uses this.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Dedicated Employer Section</h3>
                <p className="text-gray-700">B2B landing page with team pricing, case studies, compliance benefits. Unlocks 40% revenue potential.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Smart Course Discovery</h3>
                <p className="text-gray-700">Prominent search + interactive quiz. Reduces navigation from 109 links to 3 main paths.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-blue-100 rounded-lg p-4">
            <div className="text-3xl font-bold text-blue-900">+100%</div>
            <div className="text-sm text-gray-700">Conversion Rate Target</div>
          </div>
          <div className="bg-green-100 rounded-lg p-4">
            <div className="text-3xl font-bold text-green-900">8 weeks</div>
            <div className="text-sm text-gray-700">Full Implementation</div>
          </div>
          <div className="bg-orange-100 rounded-lg p-4">
            <div className="text-3xl font-bold text-orange-900">7 pages</div>
            <div className="text-sm text-gray-700">Live Prototypes Ready</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 12,
    title: 'Next Steps',
    subtitle: 'Ready to Launch',
    type: 'content',
    content: (
      <div className="space-y-8">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">🚀 Immediate Actions</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="font-bold text-gray-900">Test Live Prototypes</h3>
                <p className="text-sm text-gray-600">Review all 7 working pages on real devices</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="font-bold text-gray-900">Approve Design Direction</h3>
                <p className="text-sm text-gray-600">Select preferred hero variant (A, B, or C)</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 className="font-bold text-gray-900">Kickoff Phase 1</h3>
                <p className="text-sm text-gray-600">Finalize design system and component library</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">Questions?</h3>
          <p className="text-lg text-gray-600">All documentation, technical specs, and prototypes available on GitHub</p>
          <div className="flex justify-center gap-4 mt-6">
            <Link href="/variants" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              View Prototypes
            </Link>
            <Link href="/" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }
];

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <Home className="w-5 h-5" />
            <span className="text-sm font-medium">Home</span>
          </Link>
          <div className="text-sm font-medium text-gray-600">
            Slide {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Slide Container */}
          <div className="bg-white rounded-2xl shadow-xl p-12 min-h-[600px] flex flex-col">
            {/* Slide Header */}
            {slide.type !== 'cover' && (
              <div className="mb-8 pb-6 border-b border-gray-200">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{slide.title}</h1>
                <p className="text-xl text-gray-600">{slide.subtitle}</p>
              </div>
            )}
            
            {/* Slide Content */}
            <div className={`flex-1 flex items-center justify-center ${slide.type === 'cover' ? 'py-20' : ''}`}>
              {slide.content}
            </div>
          </div>

          {/* Progress Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          
          <div className="text-sm text-gray-600">
            Use arrow keys to navigate
          </div>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Keyboard Navigation */}
      <div className="hidden">
        <button onClick={prevSlide} className="keypress-left" />
        <button onClick={nextSlide} className="keypress-right" />
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') document.querySelector('.keypress-left')?.click();
            if (e.key === 'ArrowRight') document.querySelector('.keypress-right')?.click();
          });
        `
      }} />
    </div>
  );
}
