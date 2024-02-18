import type { TurboModule } from "react-native";
import { TurboModuleRegistry } from "react-native";

export interface MusicFile {
    album: string;
    artist: string;
    artwork?: string;
    duration: number;
    id: string;
    title: string;
    url: string;
}

export interface Spec extends TurboModule {
    loadMusicFiles(): Promise<MusicFile[]>;
}

export default TurboModuleRegistry.getEnforcing<Spec>("MusicLibrary");
