import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  //local DB
  private readonly songs = [];
  create(song) {
    this.songs.push(song);
  }
  findAll() {
    return this.songs;
  }
}
