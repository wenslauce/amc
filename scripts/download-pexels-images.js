const fs = require('fs');
const path = require('path');
const https = require('https');

const PEXELS_API_KEY = '9jaGUuh9gt15nKMgNMdA1ReUPj5mJmMkqnnRBaowq9kq7qjUYhPV9yR1';
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Comprehensive list of all images needed for Adams Minerals and Consultancy website
const imageRequirements = [
  // Service Images (Homepage)
  {
    filename: 'service-commodities-trading.jpg',
    query: 'gold mining precious metals',
    description: 'Minerals Trading - Gold, precious metals, mining operations'
  },
  {
    filename: 'service-consultancy.jpg', 
    query: 'business meeting consultation office',
    description: 'Strategic Consultancy - Business meeting, professional consultation'
  },
  {
    filename: 'service-trade-finance.jpg',
    query: 'international trade finance documents',
    description: 'Trade Facilitation & Finance - Trade documents, international business'
  },
  {
    filename: 'service-logistics.jpg',
    query: 'cargo shipping containers logistics',
    description: 'Logistics & Supply Chain - Shipping, cargo, transportation'
  },
  {
    filename: 'service-insurance.jpg',
    query: 'business insurance protection handshake',
    description: 'Risk Management & Insurance - Business protection, handshake'
  },
  {
    filename: 'service-wealth-management.jpg',
    query: 'investment portfolio financial planning',
    description: 'Investment Advisory - Financial planning, investment charts'
  },
  {
    filename: 'service-crypto-desk.jpg',
    query: 'cryptocurrency bitcoin digital payments',
    description: 'Crypto Desk - Cryptocurrency, digital payments, blockchain'
  },
  {
    filename: 'service-compliance.jpg',
    query: 'legal compliance regulations documents',
    description: 'Regulatory Compliance - Legal documents, compliance, regulations'
  },

  // Hero and About Images
  {
    filename: 'global-trade-shipping-containers-port-aerial-view.jpg',
    query: 'mining site aerial view industrial',
    description: 'Hero Video Poster - Mining site, industrial operations, aerial view'
  },
  {
    filename: 'professional-business-handshake-global-partnership.jpg',
    query: 'business handshake partnership professional',
    description: 'About Section - Professional handshake, business partnership'
  },
  {
    filename: 'modern-office-building-corporate-headquarters.jpg',
    query: 'modern office building corporate headquarters',
    description: 'About Page - Corporate headquarters, modern office building'
  },

  // News Images
  {
    filename: 'news-expansion-west-africa.jpg',
    query: 'africa map business expansion',
    description: 'News - West Africa expansion, map, business growth'
  },
  {
    filename: 'news-mineral-partnership.jpg',
    query: 'mineral processing facility industrial',
    description: 'News - Mineral processing, industrial facility, partnership'
  },
  {
    filename: 'news-minerals-growth.jpg',
    query: 'mining growth chart business success',
    description: 'News - Business growth, mining success, charts'
  },
  {
    filename: 'news-tracking-platform-launch.jpg',
    query: 'digital technology platform tracking',
    description: 'News - Digital platform, technology, tracking system'
  },
  {
    filename: 'news-sustainability-milestone.jpg',
    query: 'sustainable mining environment green',
    description: 'News - Sustainable mining, environmental responsibility'
  },
  {
    filename: 'news-industry-award.jpg',
    query: 'business award trophy achievement',
    description: 'News - Industry award, trophy, business achievement'
  },

  // Branding Images
  {
    filename: 'og-image.png',
    query: 'minerals consultancy professional business',
    description: 'Open Graph - Professional business, minerals, consultancy branding'
  }
];

// Function to search Pexels API
async function searchPexels(query, perPage = 5) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.pexels.com',
      path: `/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`,
      method: 'GET',
      headers: {
        'Authorization': PEXELS_API_KEY
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
}

// Function to download image
async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (error) => {
      fs.unlink(filepath, () => {}); // Delete the file on error
      reject(error);
    });
  });
}

// Main function to download all images
async function downloadAllImages() {
  console.log('🚀 Starting Adams Minerals and Consultancy image download...');
  console.log(`📁 Target directory: ${PUBLIC_DIR}`);
  
  // Ensure public directory exists
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  let successCount = 0;
  let errorCount = 0;

  for (const imageReq of imageRequirements) {
    try {
      console.log(`\n🔍 Searching for: ${imageReq.description}`);
      console.log(`📝 Query: "${imageReq.query}"`);
      
      const searchResult = await searchPexels(imageReq.query);
      
      if (searchResult.photos && searchResult.photos.length > 0) {
        // Get the highest quality image (original)
        const photo = searchResult.photos[0];
        const imageUrl = photo.src.original;
        const filepath = path.join(PUBLIC_DIR, imageReq.filename);
        
        console.log(`⬇️  Downloading: ${imageReq.filename}`);
        console.log(`🔗 Source: ${imageUrl}`);
        
        await downloadImage(imageUrl, filepath);
        
        console.log(`✅ Success: ${imageReq.filename}`);
        successCount++;
        
        // Add a small delay to respect API rate limits
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      } else {
        console.log(`❌ No images found for: ${imageReq.filename}`);
        errorCount++;
      }
      
    } catch (error) {
      console.log(`❌ Error downloading ${imageReq.filename}:`, error.message);
      errorCount++;
    }
  }

  console.log('\n📊 Download Summary:');
  console.log(`✅ Successful downloads: ${successCount}`);
  console.log(`❌ Failed downloads: ${errorCount}`);
  console.log(`📁 Images saved to: ${PUBLIC_DIR}`);
  
  if (successCount > 0) {
    console.log('\n🎉 Image download complete! Your Adams Minerals and Consultancy website now has fresh, professional images.');
  }
}

// Run the script
if (require.main === module) {
  downloadAllImages().catch(console.error);
}

module.exports = { downloadAllImages, imageRequirements };