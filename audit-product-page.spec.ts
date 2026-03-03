import { test, expect } from '@playwright/test';

const PRODUCT_URL = 'https://thebuildersacademy.co.uk/banksman-traffic-marshal-training-online-course';

test.describe('Product Page Audit - Banksman/Traffic Marshal', () => {
  
  test('Product page full screenshot', async ({ page }) => {
    await page.goto(PRODUCT_URL);
    await page.waitForLoadState('networkidle');
    
    // Full page screenshot
    await page.screenshot({ 
      path: 'research/screenshots/product-banksman-full.png', 
      fullPage: true 
    });
    
    // Above the fold
    await page.screenshot({ 
      path: 'research/screenshots/product-banksman-hero.png'
    });
  });
  
  test('Mobile product page', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
    await page.goto(PRODUCT_URL);
    await page.waitForLoadState('networkidle');
    
    await page.screenshot({ 
      path: 'research/screenshots/product-banksman-mobile.png', 
      fullPage: true 
    });
  });
  
  test('Extract product page structure', async ({ page }) => {
    await page.goto(PRODUCT_URL);
    await page.waitForLoadState('networkidle');
    
    // Product title
    const title = await page.locator('h1').first().textContent();
    
    // Price
    const price = await page.locator('[class*="price"], .product-price, .price-box').first().textContent();
    
    // CTA buttons
    const ctaButtons = await page.locator('button, a[class*="cart"], a[class*="buy"]').allTextContents();
    
    // Course features/benefits
    const features = await page.locator('ul li, .feature, .benefit').allTextContents();
    
    const productData = {
      timestamp: new Date().toISOString(),
      url: PRODUCT_URL,
      title: title?.trim(),
      price: price?.trim(),
      ctaButtons: ctaButtons.slice(0, 10),
      features: features.slice(0, 20)
    };
    
    console.log('Product data:', productData);
    
    const fs = require('fs');
    fs.writeFileSync('research/audit/product-page-structure.json', JSON.stringify(productData, null, 2));
  });
  
  test('Product page trust signals', async ({ page }) => {
    await page.goto(PRODUCT_URL);
    await page.waitForLoadState('networkidle');
    
    // Look for trust indicators
    const trustSignals = [];
    
    // Reviews/ratings
    const reviewsCount = await page.locator('[class*="review"], [class*="rating"], [class*="star"]').count();
    if (reviewsCount > 0) trustSignals.push(`${reviewsCount} review/rating elements`);
    
    // Certifications/accreditations
    const certifications = await page.locator('[class*="accredit"], [class*="certif"], [class*="cpd"]').count();
    if (certifications > 0) trustSignals.push(`${certifications} certification badges`);
    
    // Money-back guarantee
    const guaranteeText = await page.locator('text=/guarantee/i').count();
    if (guaranteeText > 0) trustSignals.push('Money-back guarantee mentioned');
    
    // Same-day delivery/results
    const sameDay = await page.locator('text=/same.day/i').count();
    if (sameDay > 0) trustSignals.push('Same-day results mentioned');
    
    console.log('Trust signals:', trustSignals);
    
    const fs = require('fs');
    fs.writeFileSync('research/audit/product-trust-signals.json', JSON.stringify({
      timestamp: new Date().toISOString(),
      trustSignals
    }, null, 2));
  });
});
