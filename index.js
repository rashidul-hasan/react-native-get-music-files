
import { NativeModules, Platform } from 'react-native';

const { RNReactNativeGetMusicFiles } = NativeModules;

const MusicFiles = {
    getAll(options){

        return new Promise((resolve, reject) => {

            if(Platform.OS === "android"){
                RNReactNativeGetMusicFiles.getAll(options,(tracks) => {
                    resolve(tracks);
                },(error) => {
                    resolve(error);
                });
            }else{
                RNReactNativeGetMusicFiles.getAll(options, (tracks) => {
                    if(tracks.length > 0){
                        resolve(tracks);
                    }else{
                        resolve("Error, you don't have any tracks");
                    }
                });   
            }

        });

    },

    getSongByPath(options){
        return new Promise((resolve, reject) => {

            if(Platform.OS === "android"){
                RNReactNativeGetMusicFiles.getSongByPath(options,(tracks) => {
                    resolve(tracks);
                },(error) => {
                    resolve(error);
                });
            }else{
               
            }

        });

    },

    getAlbums(options){
        return new Promise((resolve, reject) => {

            if(Platform.OS === "android"){
                RNReactNativeGetMusicFiles.getAlbums(options,(albums) => {
                    resolve(albums);
                },(error) => {
                    resolve(error);
                });
            }else{
               
            }

        });

    },

    getArtists(options){
        return new Promise((resolve, reject) => {

            if(Platform.OS === "android"){
                RNReactNativeGetMusicFiles.getArtists(options,(albums) => {
                    resolve(albums);
                },(error) => {
                    resolve(error);
                });
            }else{
               
            }

        });

    },
    getSongs(options){
        return new Promise((resolve, reject) => {

            if(Platform.OS === "android"){
                RNReactNativeGetMusicFiles.getSong(options,(albums) => {
                    resolve(albums);
                },(error) => {
                    resolve(error);
                });
            }else{
               
            }

        });

    },

}
export default MusicFiles;
