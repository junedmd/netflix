import data from './data.json'



// const lang=(keyword , placeholder,value)=>{
//     const lan =localStorage.getItem('lan') || "en" ;  
    
//    const text=data[lan][keyword];
//      if(placeholder && value){
//         return text.replace(placeholder,value) 
//      }
//      return text
// }
// export default lang;

const I18n = (keyword)=>{

   const lang =localStorage.getItem('lang') || "en" ;
   return data[lang][keyword];
}
export default I18n;
