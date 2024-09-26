import { Module } from '@nestjs/common';
import {
  EnvironmentConfigModule,
  EnvironmentConfigService,
} from '../environment-config';
import { IpfsStorage } from './ipfs-storage.interface';
import { PinataService } from './storage-pianta.service';


@Module({
  imports: [EnvironmentConfigModule],
  providers: [
    EnvironmentConfigService,
    {
      provide: IpfsStorage,
      useClass: PinataService,
    },
  ],
  exports: [
    {
      provide: IpfsStorage,
      useClass: PinataService,
    },
  ],
})
export class IpfsStorageConfigModule {}
