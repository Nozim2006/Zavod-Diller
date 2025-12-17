import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

export interface DocContent {
  title: string;
  content: string;
  slug: string;
}

export function getFileFromSlug(slug: string): string {
  // Map slugs to actual file paths
  const fileMap: Record<string, string> = {
    '': 'README.md',
    'project-summary': 'PROJECT_SUMMARY.md',
    'nextgen-enterprise-summary': 'NEXTGEN_ENTERPRISE_SPEC_SUMMARY.md',
    'getting-started': 'docs/GETTING_STARTED.md',
    'sitemap': 'docs/SITEMAP.md',
    'enterprise-product-spec': 'docs/ENTERPRISE_PRODUCT_SPEC.md',
    'enterprise-roadmap': 'docs/ENTERPRISE_ROADMAP.md',
    'architecture/system-architecture': 'docs/architecture/SYSTEM_ARCHITECTURE.md',
    'architecture/scalability-roadmap': 'docs/architecture/SCALABILITY_ROADMAP.md',
    'database/schema': 'docs/database/DATABASE_SCHEMA.md',
    'api/specifications': 'docs/api/API_SPECIFICATIONS.md',
    'features/specifications': 'docs/features/FEATURE_SPECIFICATIONS.md',
    'user-flows/user-journeys': 'docs/user-flows/USER_JOURNEYS.md',
    'user-flows/enterprise-ux-flows': 'docs/user-flows/ENTERPRISE_UX_FLOWS.md',
    'ui-ux/design-system': 'docs/ui-ux/DESIGN_SYSTEM.md',
    'ui-ux/enterprise-ui-system': 'docs/ui-ux/ENTERPRISE_UI_SYSTEM.md',
    'security/specifications': 'docs/security/SECURITY_SPECIFICATIONS.md',
    'monetization/business-model': 'docs/monetization/BUSINESS_MODEL.md',
    'deployment/guide': 'docs/deployment/DEPLOYMENT_GUIDE.md',
  };

  return fileMap[slug] || fileMap[''];
}

export async function getDocContent(slug: string = ''): Promise<DocContent> {
  const filePath = getFileFromSlug(slug);
  
  try {
    const fullPath = path.join(process.cwd(), filePath);
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return {
        title: 'Not Found',
        content: '<p>Content not found.</p>',
        slug
      };
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Extract title from the first heading or filename
    const titleMatch = fileContents.match(/^#\s+(.+)$/m);
    let title = 'Documentation';
    
    if (titleMatch) {
      title = titleMatch[1].trim();
    } else {
      // Fallback to filename-based title
      title = filePath.split('/').pop()?.replace('.md', '').replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Documentation';
    }
    
    // Use remark to convert markdown to HTML string
    const processedContent = await remark().use(html).process(fileContents);
    const content = processedContent.toString();
    
    return {
      title,
      content,
      slug
    };
  } catch (error) {
    console.error(`Error loading content for slug "${slug}":`, error);
    return {
      title: 'Error',
      content: '<p>Error loading content.</p>',
      slug
    };
  }
}