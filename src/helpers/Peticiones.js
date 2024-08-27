import axios from "axios";

export const getData = async (url) => {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const postData = async (url,obj) => {
    try {
        const result = await axios.post(url, obj);
        console.log(result);
        return result.status
    } catch (error) {
        console.log(error);
    }
};

export const patchData = async (url,id, obj) => {
    try {
        const resul = await axios.patch(`${url}/${id}`, obj);
        return resul.status;
    } catch (error) {
        console.log(error);
    }
};

export const deletData = async (url,id) => {
    try {
        const resul = await axios.delete(`${url}/${id}`);
        return resul.status;
    } catch (error) {
        console.log(error);
    }
};