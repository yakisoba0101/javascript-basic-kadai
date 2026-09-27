const getTodayDate = ()=>{
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getUTCMonth();
  const day = today.getUTCDate();
  console.log(`${year}年${month}月${day}日`);
}


getTodayDate();