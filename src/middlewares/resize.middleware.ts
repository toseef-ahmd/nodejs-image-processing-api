import sharp from "sharp"

export const ResizeImage = async (
  sourceFilePath: string,
  width: number,
  height: number,
  targetFilePath: string
): Promise<void> => {
  try {
    await sharp(sourceFilePath)
      .resize(Number(width), Number(height))
      .toFile(targetFilePath)
      
  } catch (error) {
    throw new Error("Failed to process Image")
  }
}
