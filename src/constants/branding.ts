// Protected branding constants
const OWNER_NAME = 'BalaDevOpsAdmin' as const;

// Runtime protection using Object.freeze
const brandingConstants = Object.freeze({
  OWNER_NAME
});

// Validation function
export function validateBranding(text: string): boolean {
  return text.includes(brandingConstants.OWNER_NAME);
}

// Error for unauthorized changes
export class BrandingViolationError extends Error {
  constructor() {
    super('Unauthorized attempt to modify protected branding');
    this.name = 'BrandingViolationError';
  }
}

export const { OWNER_NAME: OWNER_NAME_PROTECTED } = brandingConstants;
export { OWNER_NAME };