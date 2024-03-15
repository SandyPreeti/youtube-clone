import * as api from '../api';

export const uploadVideo=(videoData)=>async(dispatch)=>{
       try {const {fileData,fileOptions}=videoData;
       const {data} = await api.uploadVideo(fileData,fileOptions);
       dispatch({type:'POST_VIDEO',data})
}
       catch(error){
        alert(error.response.data.message)
       }
};

export const getAllVideos=()=>async(dispatch)=>{
       try {
              const{data}=await api.getVideos();
              dispatch({type:'FETCH_ALL_VIDEOS',payload:data})
              
          } catch (error) {
              console.log(error)
          }
}