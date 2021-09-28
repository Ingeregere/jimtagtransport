import axios from 'axios'

const CATEGORY_API_URL = "http://e-commerce-transport-backend.herokuapp.com:80/api/category/item/";


class CategoryServices {
    getAllCategory(){
        return axios.get(CATEGORY_API_URL+'getAllCategoryItem')
    }
    postCategory(newCategory) {
        return axios.post(CATEGORY_API_URL, newCategory)
    }
    getImage(id){
        return axios.get(CATEGORY_API_URL+'viewImageCategoryItemById/'+id)
    }
    getCategoryById(id){
        return axios.get(CATEGORY_API_URL +'getCategoryItemById/'+id)
    }

}


export default new CategoryServices