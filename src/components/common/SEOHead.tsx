import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description?: string;
}

export const SEOHead = ({ title, description }: SEOHeadProps) => {
  useEffect(() => {
    document.title = `${title} | ACM Student Chapter - IILM University`;
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
};
