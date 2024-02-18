import React from "react";
import { FlatList, Image, PermissionsAndroid, StyleSheet, Text, View } from "react-native";
import { loadMusicFiles } from "react-native-music-library";
import type { MusicFile } from "../../src/NativeMusicLibrary";

export default function App() {
    const [files, setFiles] = React.useState<MusicFile[]>([]);

    const getPermissions = async () => {
        const permission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO!,
        );
        return permission === PermissionsAndroid.RESULTS.GRANTED;
    };

    const loadFiles = async () => {
        const hasPermission = await getPermissions();
        if (!hasPermission) {
            console.log("don't have permission");
            return;
        }
        const response = await loadMusicFiles();
        setFiles(response);
    };

    React.useEffect(() => {
        loadFiles();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={files}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <View key={item.id} style={styles.itemBox}>
                        {item.artwork ? (
                            <Image source={{ uri: item.artwork }} style={styles.coverBox} />
                        ) : (
                            <View style={styles.coverBox} />
                        )}
                        <View style={styles.infoBox}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.album}>{item.album}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    listContent: {
        padding: 16,
    },
    itemBox: {
        backgroundColor: "#FFFFFF",
        borderColor: "#EFEFEF",
        borderRadius: 16,
        borderWidth: 1,
        elevation: 5,
        flexDirection: "row",
        gap: 8,
        padding: 8,
        shadowColor: "#7F7F7F",
        width: "100%",
    },
    coverBox: {
        backgroundColor: "#333333",
        borderRadius: 8,
        height: 56,
        width: 56,
    },
    infoBox: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
    },
    album: {
        fontSize: 12,
        fontStyle: "italic",
        fontWeight: "300",
    },
});
