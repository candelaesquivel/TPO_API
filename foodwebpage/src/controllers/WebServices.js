const urlApi = "http://localhost:4000/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"login",
    register:urlApi + "register",
    securityQuestion:urlApi + "securityQ",
    securityAnswer:urlApi + "securityQ/answer",
    updateUserData:urlApi + "profile/modify",
    createRecipe:urlApi + "recipes/create",
    deleteRecipe:urlApi + "recipes/delete",
    califyRecipe:urlApi + "recipes/calify",
    uploadFileImg : urlApi + "recipes/uploadImage",
    saveRecipeImg : urlApi + 'recipes/saveRecipeImg'
}

export default urlWebServices;