import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, extname } from 'path'

const PUBLIC_IMAGES = 'public/images'
const MAX_WIDTH = 2000
const QUALITY = 85

async function optimizeImage(filePath) {
  const ext = extname(filePath).toLowerCase()

  if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
    return
  }

  try {
    const image = sharp(filePath)
    const metadata = await image.metadata()

    // Skip als afbeelding al klein genoeg is
    const stats = await stat(filePath)
    if (stats.size < 100 * 1024) { // < 100KB
      console.log(`⏭️  ${filePath} (already optimized)`)
      return
    }

    const outputPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.optimized$&')

    await image
      .resize({ width: Math.min(metadata.width || MAX_WIDTH, MAX_WIDTH), withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(outputPath)

    const newStats = await stat(outputPath)
    const savings = ((1 - newStats.size / stats.size) * 100).toFixed(1)

    console.log(`✅ ${filePath}: ${(stats.size / 1024).toFixed(0)}KB → ${(newStats.size / 1024).toFixed(0)}KB (${savings}% kleiner)`)
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message)
  }
}

async function processDirectory(dir) {
  const entries = await readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)

    if (entry.isDirectory()) {
      await processDirectory(fullPath)
    } else if (entry.isFile()) {
      await optimizeImage(fullPath)
    }
  }
}

console.log('🚀 Start met afbeeldingen optimalisatie...\n')
await processDirectory(PUBLIC_IMAGES)
console.log('\n✨ Optimalisatie voltooid!')
console.log('💡 Controleer de .optimized bestanden en vervang de originelen als je tevreden bent.')
