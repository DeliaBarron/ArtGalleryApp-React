function useArtistInfo(){
    let artist
    artistInfo.forEach((ele, index) => {
      if((index+1)===item.id){
        artist=ele
      }
    })
}