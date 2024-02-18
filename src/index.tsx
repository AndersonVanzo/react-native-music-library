import type { MusicFile } from "./NativeMusicLibrary";

const MusicLibrary = require("./NativeMusicLibrary").default;

export async function loadMusicFiles(): Promise<MusicFile[]> {
    return MusicLibrary.loadMusicFiles();
}
