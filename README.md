# react-native-music-library

A library to search for music files in device's memory (**Android only**)

## Installation

```sh
npm install react-native-music-library
```

## Usage


```js
import { loadMusicFiles, MusicFile } from 'react-native-music-library';

// ...

const result: MusicFile[] = await loadMusicFiles();
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
