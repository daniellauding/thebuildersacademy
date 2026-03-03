import { test, expect } from '@playwright/test';

const SITE_URL = 'https://thebuildersacademy.co.uk';

test.describe('The Builders Academy - Initial Audit', () => {
  
  test('Homepage full screenshot', async ({ page }) => {
    await page.goto(SITE_URL);
    await page.waitForLoadState('networkidle');
    
    // Full page screenshot
    await page.screenshot({ 
      path: 'research/screenshots/homepage-full.png', 
      fullPage: true 
    });
    
    // Above the fold
    await page.screenshot({ 
      path: 'research/screenshots/homepage-hero.png'
    });
  });
  
  test('Mobile homepage', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
    await page.goto(SITE_URL);
    await page.waitForLoadState('networkidle');
    
    await page.screenshot({ 
      path: 'research/screenshots/homepage-mobile.png', 
      fullPage: true 
    });
  });
  
  test('Extract navigation structure', async ({ page }) => {
    await page.goto(SITE_URL);
    await page.waitForLoadState('networkidle');
    
    // Primary navigation
    const navLinks = await page.locator('nav a, header a').allTextContents();
    
    console.log('Navigation structure:', navLinks);
    
    // Save to file
    const fs = require('fs');
    fs.writeFileSync('research/audit/navigation.json', JSON.stringify({
      timestamp: new Date().toISOString(),
      links: navLinks
    }, null, 2));
  });
  
  test('Find product pages', async ({ page }) => {
    await page.goto(SITE_URL);
    await page.waitForLoadState('networkidle');
    
    // Look for course/product links
    const productLinks = await page.locator('a[href*="course"], a[href*="product"], a[href*="training"]')
      .evaluateAll(links => links.map(a => ({
        text: a.textContent?.trim(),
        href: a.getAttribute('href')
      })));
    
    console.log('Product links found:', productLinks.length);
    
    const fs = require('fs');
    fs.writeFileSync('research/audit/products.json', JSON.stringify({
      timestamp: new Date().toISOString(),
      count: productLinks.length,
      links: productLinks.slice(0, 20) // First 20
    }, null, 2));
  });
  
  test('Accessibility quick scan', async ({ page }) => {
    await page.goto(SITE_URL);
    await page.waitForLoadState('networkidle');
    
    // Check for common accessibility issues
    const issues = [];
    
    // Images without alt text
    const imagesWithoutAlt = await page.locator('img:not([alt])').count();
    if (imagesWithoutAlt > 0) {
      issues.push(`${imagesWithoutAlt} images without alt text`);
    }
    
    // Links without text
    const emptyLinks = await page.locator('a:not(:has-text(""))').count();
    if (emptyLinks > 0) {
      issues.push(`${emptyLinks} links without text`);
    }
    
    // Headings hierarchy
    const h1Count = await page.locator('h1').count();
    if (h1Count !== 1) {
      issues.push(`${h1Count} H1 tags (should be 1)`);
    }
    
    console.log('Accessibility issues:', issues);
    
    const fs = require('fs');
    fs.writeFileSync('research/audit/accessibility-quick.json', JSON.stringify({
      timestamp: new Date().toISOString(),
      issues
    }, null, 2));
  });
  
  test('SEO meta tags', async ({ page }) => {
    await page.goto(SITE_URL);
    
    const title = await page.title();
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
    
    const seoData = {
      timestamp: new Date().toISOString(),
      title,
      metaDescription,
      ogTitle,
      ogImage
    };
    
    console.log('SEO meta:', seoData);
    
    const fs = require('fs');
    fs.writeFileSync('research/audit/seo-meta.json', JSON.stringify(seoData, null, 2));
  });
});
