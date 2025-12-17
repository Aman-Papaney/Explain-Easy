import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: process.env.OPEN_ROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': process.env.Site_URL, // Optional. Site URL for rankings on openrouter.ai.
    'X-Title': 'process.env.SITE_TITLE', // Optional. Site title for rankings on openrouter.ai.
  },
});

export default openRouter
