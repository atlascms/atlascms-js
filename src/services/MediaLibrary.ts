import BaseService from './BaseService';
import { convertFilterToQueryString } from '../filters';
import { ClientSettings } from '../types/index';
import { createUploadHttp } from '../utils';

export default class MediaLibrary extends BaseService {
  createFolder(folder: string) {
    return this.client.executeRequest({
      method: 'POST',
      url: this.#composeUrl(this.client.settings, `folders`),
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
      url: this.#composeUrl(this.client.settings, `folders`),
      query: {
        folder: folder,
      },
    });
  }

  deleteAsset(id: string) {
    return this.client.executeRequest({
      method: 'DELETE',
      url: this.#composeUrl(this.client.settings, `media/${id}`),
    });
  }

  getAssets(filters?: any) {
    return this.client.executeRequest({
      method: 'GET',
      url: this.#composeUrl(this.client.settings, `media`),
      query: this.#getQueryFilters(filters),
    });
  }

  getAsset(id: string) {
    return this.client.executeRequest({
      method: 'GET',
      url: this.#composeUrl(this.client.settings, `media/${id}`),
    });
  }

  getFolders() {
    return this.client.executeRequest({
      method: 'GET',
      url: this.#composeUrl(this.client.settings, `folders`),
    });
  }

  moveFolder(folder: string, moveTo: string) {
    return this.client.executeRequest({
      method: 'POST',
      url: this.#composeUrl(this.client.settings, `folders/move`),
      body: {
        folder: folder,
        moveTo: moveTo,
      },
    });
  }

  renameFolder(folder: string, newName: string) {
    return this.client.executeRequest({
      method: 'POST',
      url: this.#composeUrl(this.client.settings, `folders/rename`),
      body: {
        folder: folder,
        newName: newName,
      },
    });
  }

  setMediaTags(id: string, tags: Array<string>) {
    return this.client.executeRequest({
      method: 'POST',
      url: this.#composeUrl(this.client.settings, `media/${id}/tags`),
      body: {
        tags: tags,
      },
    });
  }

  upload(data: object) {
    return null;
    // return this.client.executeRequest({
    //   method: 'POST',
    //   url: this.#composeUrl(this.client.settings, `media/upload/image`),
    //   body: {
    //     tags: tags,
    //   },
    // });
  }

  #getQueryFilters(filters?: any): string {
    if (typeof filters === 'string') return filters;
    else if (typeof filters === 'object') return convertFilterToQueryString(filters);
  }

  #composeUrl(config: ClientSettings, path: string = ''): string {
    return this.getProjectUrlBuilder(config).addSegment('media-library').addSegment(path).build();
  }
}
