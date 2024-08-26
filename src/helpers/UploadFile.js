
//peticion a una nube externa, por ende es asincrona
export const UploadFile = async (file) => {

    const cloudinaryUrl = "https://api.cloudinary.com/v1_1/semojicaf/image/upload";

    //Data modificable, cada que se sube un archivo es diferente
    let formData = new FormData();
    formData.append("upload_preset", "insta_app");
    formData.append("file", file)

    let response = await fetch(cloudinaryUrl, {
        method: 'POST',
        body: formData
    })

    const img = await response.json()
    console.log("Esto es lo que voy a subir a cloudinary", img)

    return img.secure_url;
}
