/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="react" />

declare module '@theme-ui/components' {
  type FontVariants = 'heading' | 'display'
  export const Heading: React.FC<{ variant?: FontVariants }>
}
