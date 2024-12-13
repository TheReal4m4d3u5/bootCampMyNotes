function storeLocalStorage(formData){

    const allBlogs = readLocalStorage();
    const data = {};
    allBlogs.push(data);
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    localStorage.setItem("blogFormData", JSON.stringify(data));
    console.log("Stored Data:", data)
  
  }