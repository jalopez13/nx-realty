const NextConfigBase = require('../../next.config.base');

const nextConfig = {
  ...NextConfigBase,
  
  // Add custom configuration below.
  images: {
    domains: ["m.media-amazon.com"]
  }
};

module.exports = nextConfig

