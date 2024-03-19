import * as api from '../api';

export const addTolikedVideo=(likedVideoData)=>async(dispatch)=>{
    try {
        const {data}=await api.addToLikedVideo(likedVideoData);
        dispatch({type:"POST_LIKEDVIDEO",data});
        dispatch(getAlllikedVideos())
    } catch (error) {
        alert(error)
    }
};

export const getAlllikedVideos=()=>async(dispatch)=>{
    try {
           const{data}=await api.getAlllikedVideos();
           dispatch({type:'FETCH_ALL_LIKED_VIDEOS',payload:data})
           
       } catch (error) {
           console.log(error)
       }
};
export const deletelikedVideo=(likedVideoData)=>async(dispatch)=>{
    try {
        const {videoId,Viewer} =likedVideoData;
        await api.deletelikedVideo(videoId,Viewer);
        dispatch(getAlllikedVideos())
    } catch (error) {
        console.log(error)
    }

}