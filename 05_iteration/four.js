// map me objct ke  liye forof use nhi krte he isliiye 
// for in se work krte he hum

const myObj ={
    js:"javascrpit",
    cpp:"c++",
    mongo:"database"
}
for (const key in myObj) {
    console.log(`${key} shortcut for ${myObj[key]}`)

}