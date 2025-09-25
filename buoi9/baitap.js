function loadDocument(isFail) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isFail) {
          reject("Load failed!");
        } else {
          resolve("Load successful!");
        }
      }, 2000); 
    });
  }
  
  
  loadDocument(false)
    .then(result => console.log(result))   // success
    .catch(error => console.error(error)); // fail 
  
  
  
  

document.querySelector(".name").style.color = "blue";
document.querySelector(".dob").style.color = "green";
document.querySelector(".job").style.color = "purple";
document.querySelector(".goal").style.color = "red";

