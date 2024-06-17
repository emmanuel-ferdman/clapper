
import { ResolveRequest } from "@/types"
import { ClapSegment, ClapSegmentCategory, ClapSegmentStatus, getClapAssetSourceType } from "@aitube/clap"

export async function resolveSegment(request: ResolveRequest): Promise<ClapSegment> {
  if (!request.settings.comfyIcuApiKey) {
    throw new Error(`Missing API key for "Comfy.icu"`)
  }
  if (request.segment.category !== ClapSegmentCategory.STORYBOARD) {
    throw new Error(`Clapper doesn't support ${request.segment.category} generation for provider "Comfy.icu". Please open a pull request with (working code) to solve this!`)
  }
  
  const segment: ClapSegment = { ...request.segment }


  try {

    throw new Error(`Not Implemented!`)

  } catch (err) {
    console.error(`failed to call Comfy.icu: `, err)
    segment.assetUrl = ''
    segment.assetSourceType = getClapAssetSourceType(segment.assetUrl)
    segment.status = ClapSegmentStatus.TO_GENERATE
  }

  return segment
}