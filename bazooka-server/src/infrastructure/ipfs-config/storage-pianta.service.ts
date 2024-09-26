import { IpfsStorage } from './ipfs-storage.interface';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import {pinataSDK} from '@pinata/sdk';
import { EnvironmentConfigService } from '../environment-config';
import PinataClient from '@pinata/sdk';
import { Readable } from 'stream';
const pinataSDK = require('@pinata/sdk');

@Injectable()
export class PinataService implements IpfsStorage {
  private pinata: PinataClient;
  constructor(
    private readonly environmentConfigService: EnvironmentConfigService,
  ) {
    this.pinata = new pinataSDK(
      this.environmentConfigService.getPinataApiKey(),
      this.environmentConfigService.getPinataSecretApiKey(),
    );
  }

  async getMetaDataURI(
    file: Express.Multer.File,
    metadata: Record<string, any>,
  ): Promise<Record<string, any>> {
    try {
      const imageUrl = await this.uploadImage(file, metadata);
      const metadataURI = await this.uploadMetadata(imageUrl, metadata);
      const res = {
        asset_img_url: imageUrl,
        asset_metadata_url: metadataURI,
      };
      return res;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async uploadImage(
    file: Express.Multer.File,
    metadata: Record<string, any>,
  ): Promise<string> {
    try {
      const options = {
        pinataMetadata: {
          name: metadata['name'],
        },
        pinataOptions: {
          cidVersion: 0 as 0 | 1,
        },
      };
      const fileStream = Readable.from(file.buffer);

      const uploadImageRes = await this.pinata.pinFileToIPFS(
        fileStream,
        options,
      );
      const imageUrl = `${this.environmentConfigService.getPinataGatewayUrl()}${
        uploadImageRes['IpfsHash']
      }`;
      return imageUrl;
    } catch (err) {
      console.log('Error while uploading image: ', err);
      throw new HttpException(
        'Something went wrong while uploading image',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async uploadMetadata(
    imageUrl: string,
    metadata: Record<string, any>,
  ): Promise<string> {
    try {
      metadata['image_url'] = imageUrl;
      const uploadMetadataRes = await this.pinata.pinJSONToIPFS(metadata);
      const metadataURI = `${this.environmentConfigService.getPinataGatewayUrl()}${
        uploadMetadataRes['IpfsHash']
      }`;
      return metadataURI;
    } catch (err) {
      console.log('Error while uploading metadata: ', err);
      throw new HttpException(
        'Something went wrong while uploading metadata',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
