import { Github, Linkedin } from 'lucide-react';
import React from 'react';

export default function SocialIcons({ github, linkedin }: { github?: string; linkedin?: string }) {
  const handleSocialClick = (name: 'Github' | 'LinkedIn') => {
    const map: Record<string, string | undefined> = { Github: github, LinkedIn: linkedin };
    const href = map[name];
    if (typeof window !== 'undefined' && typeof (window as any).analyticsTrack === 'function') {
      (window as any).analyticsTrack('social_click', {
        network: name.toLowerCase(),
        href,
      });
    }
    if (href) window.open(href, '_blank', 'noopener');
  };
  return (
    <div className="flex gap-4 ml-1">
      {github && (
        <button
          onClick={() => handleSocialClick('Github')}
          className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:border-gray-900 dark:hover:border-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 text-gray-600 dark:text-gray-400 transition-all"
          aria-label="Github"
          title="Github"
        >
          <Github size={20} />
        </button>
      )}
      {linkedin && (
        <button
          onClick={() => handleSocialClick('LinkedIn')}
          className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:border-gray-900 dark:hover:border-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 text-gray-600 dark:text-gray-400 transition-all"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <Linkedin size={20} />
        </button>
      )}
    </div>
  );
}
