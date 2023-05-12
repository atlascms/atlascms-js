import BaseService from './BaseService';
import { ClientSettings } from '../types';
import { AssetFilter } from '../types/index';

export default class MediaLibrary extends BaseService {
  createFolder(folder: string) {
    return this.client.executeRequest({
      method: 'POST',
      url: this._composeUrl(this.client.settings, `folders`),
      body: {
        folder: folder,
      },
      query: {
        folder: 'azz',
      },
    });
  }

  deleteFolder(folder: string) {
    return this.client.executeRequest({
      method: 'DELETE',
      url: this._composeUrl(this.client.settings, `folders`),
      query: {
        folder: folder,
      },
    });
  }

  getAssets(filters: AssetFilter) {
    return this.client.executeRequest({
      method: 'GET',
      url: this._composeUrl(this.client.settings, `media`),
      query: filters,
    });
  }

  getFolders() {
    return this.client.executeRequest({
      method: 'GET',
      url: this._composeUrl(this.client.settings, `folders`),
    });
  }

  moveFolder(folder: string, moveTo: string) {
    return this.client.executeRequest({
      method: 'POST',
      url: this._composeUrl(this.client.settings, `folders/move`),
      body: {
        folder: folder,
        moveTo: moveTo,
      },
    });
  }

  renameFolder(folder: string, newName: string) {
    return this.client.executeRequest({
      method: 'POST',
      url: this._composeUrl(this.client.settings, `folders/rename`),
      body: {
        folder: folder,
        newName: newName,
      },
    });
  }

  private _composeUrl(config: ClientSettings, path: string = ''): string {
    var builder = this.getProjectUrlBuilder(config).addSegment('media-library').addSegment(path);

    return builder.build();
  }
}
