
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNMusicLibrarySpec.h"

@interface MusicLibrary : NSObject <NativeMusicLibrarySpec>
#else
#import <React/RCTBridgeModule.h>

@interface MusicLibrary : NSObject <RCTBridgeModule>
#endif

@end
