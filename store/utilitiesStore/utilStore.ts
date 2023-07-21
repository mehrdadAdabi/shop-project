import {defineStore} from "pinia";
import {Ref} from "vue";
import {CategoryDto} from "~/models/categories/categoriesDTO";
import {getAllCategories} from "~/service/categories.service";


export  const useCategoryStore = defineStore("util",()=> {
    const categories:Ref<CategoryDto[]>=ref([]);
    const setCategories= async ()=>{
        if (categories.value.length==0){
          let result= await getAllCategories();
          categories.value=result.data
        }
    }
    return{setCategories,categories}
})
