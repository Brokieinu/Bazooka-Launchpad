// config.js
type TConfig = {
  tonViewerUrl: string;
  tonCenterUrl: string;
  tonManifestUrl: string;
};
export const appConfig: TConfig = {
  tonViewerUrl:
    process.env.NEXT_PUBLIC_WEB3_ENV === 'TESTNET'
      ? 'https://testnet.tonviewer.com'
      : 'https://tonviewer.com',
  tonCenterUrl:
    process.env.NEXT_PUBLIC_WEB3_ENV === 'TESTNET'
      ? 'https://testnet.toncenter.com'
      : 'https://toncenter.com',
  tonManifestUrl:
    process.env.NEXT_PUBLIC_MANIFEST_URL_TYPE === 'local'
      ? 'https://raw.githubusercontent.com/AnishRane/Tonmaifest/main/TonManifest.json'
      : 'https://raw.githubusercontent.com/AnishRane/Tonmaifest/main/TonManifestStaging.json',
};
