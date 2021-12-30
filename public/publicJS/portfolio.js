const animateTechnologiesUsedIcon = ((icon) => {
    
})

const parseHTMLForEventListener = (() => {
   const chunkedHTMLArray = [];
   const arrayOfTables = document.getElementsByClassName("technology-table");
   const arrayOfImgs = []


   for (const item of arrayOfTables) {
    chunkedHTMLArray.push(item)
    
    /* const imgToPushObject = arrayOfTables.querySelectorAll("img.technologies-used-logo")
    console.log(imgToPushObject)
    arrayOfImgs.push(imgToPushObject); */
   } 
   return chunkedHTMLArray
})

const resultOfParse = parseHTMLForEventListener();
/* console.log(resultOfParse[0]);
console.log(resultOfParse[1]) */