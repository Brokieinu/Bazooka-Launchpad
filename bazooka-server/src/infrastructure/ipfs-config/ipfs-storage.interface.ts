export abstract class IpfsStorage {
  abstract getMetaDataURI(
    file: Express.Multer.File,
    metadata: Record<string, any>,
  ): Promise<Record<string, any>>;

  abstract uploadImage(
    file: Express.Multer.File,
    metadata: Record<string, any>,
  ): Promise<string>;

  abstract uploadMetadata(
    url: string,
    metadata: Record<string, any>,
  ): Promise<string>;
}
