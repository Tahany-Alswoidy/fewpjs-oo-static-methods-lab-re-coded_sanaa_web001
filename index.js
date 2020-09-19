// class Formatter {
//   //add static methods here
//   static capitalize (myString){
//     return myString.charAt(0).toUpperCase() + myString.slice(1);
//   }
//   static sanitize(myString){
//     // let valids=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','-',"'",' ','1','2','3','4','5','6','7','8','9','0'];
//     // let strArray=myString.toLowerCase().split()
//     // return strArray.find(char=>valids.includes(char));
//     return myString.replace(/^[A-Za-z0-9' -]*$/g, '');
//   }
// }