import BaseService from './BaseService';
import { convertFilterToQueryString } from '../filters';
import { ClientSettings } from '../types/index';

export default class MediaLibrary extends BaseService {
  createFolder(folder: string) {
    return this.client.post({
      url: this.#composeUrl(this.client.settings, `folders`),
      data: {
        folder: folder,
      },
    });
  }

  deleteFolder(folder: string) {
    return this.client.delete({
      url: this.#composeUrl(this.client.settings, `folders`),
      query: {
        folder: folder,
      },
    });
  }

  deleteAsset(id: string) {
    return this.client.delete({ url: this.#composeUrl(this.client.settings, `media/${id}`) });
  }

  getAssets(filters?: any) {
    return this.client.get({ url: this.#composeUrl(this.client.settings, `media`) });
  }

  getAsset(id: string) {
    return this.client.get({ url: this.#composeUrl(this.client.settings, `media/${id}`) });
  }

  getFolders() {
    return this.client.get({ url: this.#composeUrl(this.client.settings, `folders`) });
  }

  moveFolder(folder: string, moveTo: string) {
    return this.client.post({
      url: this.#composeUrl(this.client.settings, `folders/move`),
      data: {
        folder: folder,
        moveTo: moveTo,
      },
    });
  }

  renameFolder(folder: string, newName: string) {
    return this.client.post({
      url: this.#composeUrl(this.client.settings, `folders/rename`),
      data: {
        folder: folder,
        newName: newName,
      },
    });
  }

  setMediaTags(id: string, tags: Array<string>) {
    return this.client.post({
      url: this.#composeUrl(this.client.settings, `media/${id}/tags`),
      data: {
        tags: tags,
      },
    });
  }

  uploadFile(file: File | Blob, folder?: string, onProgress?: Function) {
    let data = new FormData();
    data.append('file', file);
    data.append('folder', folder ? folder : '/');

    return this.client.post({
      url: this.#composeUrl(this.client.settings, `media/upload`),
      data: data,
      config: {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 0,
        onUploadProgress: function (event) {
          if (onProgress) {
            let percentCompleted = Math.round((event.loaded * 100) / event.total);
            onProgress({
              percentage: percentCompleted,
              total: event.total,
              loaded: event.loaded,
            });
          }
        },
      },
    });
  }

  #getQueryFilters(filters?: any): string {
    if (typeof filters === 'string') return filters;
    else if (typeof filters === 'object') return convertFilterToQueryString(filters);
  }

  #composeUrl(config: ClientSettings, path: string = ''): string {
    return this.getProjectUrlBuilder(config).addSegment('media-library').addSegment(path).build();
  }
}
