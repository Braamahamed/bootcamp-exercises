// const StringFormatter = function() {
//   const capitalizeFirst = function (str) {
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//   }
//   const toSkewerCase = function (str) {
//     return str.replace(/\s+/g, '-');
//   }
//   return {capitalizeFirst: capitalizeFirst,
//   toSkewerCase:toSkewerCase}
// }

// const formatter = StringFormatter()

// console.log(formatter.capitalizeFirst("dorothy"))
// console.log(formatter.toSkewerCase("blue box")) 

// -------------------------------------
// const Bank = function (){

//   let privtMony = 500;

//   const depositCash = function (cash){
//     privtMony += cash;
//   }
  
//   const checkBalance = function (){
//      console.log(`Your current balance is $${privtMony}.`);
//   }
   
//   return {deposit:depositCash,
//     showBalance:checkBalance}
//   }

//   const bank = Bank()
//   bank.deposit(200)
//   bank.deposit(250)
//   bank.showBalance() 

// ---------------------------------------



const SongsManager = function(){
    
  const _song = {}
  const _youtubeBase = "https://www.youtube.com/watch?v="
  
  const addSong = function(name, url){
    _song[name] =url.slice(32);
  }
  
  const getSong = function (name){
    return  _youtubeBase + _song[name]
  }

  return {addSong:addSong, getSong:getSong}
}


 const songsManager = SongsManager()
 songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
 songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
 songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

 console.log(songsManager.getSong("sax"))
