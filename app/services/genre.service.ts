import { IGenreEditInput } from "@/components/screens/admin/genre/genre-edit.interface"
import { ICollection } from "@/components/screens/collections/collections.interface"
import { getGenresUrl } from "@/config/api.config"
import { IGenre } from "@/shared/types/movie.types"
import { axiosClassic } from "api/interceptors"
import axios  from "api/interceptors"

export const GenreService = {
    async getAll(searchTerm?:string){
         return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
            params: searchTerm ? {
                searchTerm,
            } : {}
         })
    },

    async getById(_id:string){
        return axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
    },

    async getCollections(){
        return axiosClassic.get<ICollection[]>(getGenresUrl('/collections'))
    },

    async getBySlug(slug:string){
        return axiosClassic.get<IGenre>(getGenresUrl(`/by-slug/${slug}`))
    },

    async createGenre() {
        return axios.post<string>(getGenresUrl(`/`))
    },

    async updateGenre(_id: string, data: IGenreEditInput) {
        return axios.put<string>(getGenresUrl(`/${_id}`), data)
    },

    async deleteGenre(_id: string) {
        return axios.delete<string>(getGenresUrl(`/${_id}`))
    }
}