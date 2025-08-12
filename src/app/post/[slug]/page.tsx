import { getBySlug } from "@/utils/actions/get-data"
import { PostProp } from "@/utils/post.type"
import { Metadata } from "next"
import { Content } from "./components/content"
import { Suspense } from "react"
import { LoadingPage } from "./components/loading"

type PageProps ={
    params:{
        slug: string
    }
}


export async function generateMetadata({params}: PageProps): Promise<Metadata>{

    try{
        const {objects}: PostProp = await getBySlug(params.slug)
        .catch(()=> {
            return{
            title: "DevMotors - Sua oficina especializada!",
            description: "Oficina de mecânica em São paulo a melhor da zona norte! Consertamos qualquer tipo de carro dos mais antigos aos mais novos!",
     }
        })

        return{
        title: `DevMotors - ${objects[0].title}`,
        description: `${objects[0].metadata.description.text}`,
        keywords: ["Oficina", 'Oficina de carros', "Manutenção de carros", "Troca de óleo de carros"],
        openGraph: {
            title: `DevMotors - ${objects[0].title}`,
            images:[objects[0].metadata.banner.url]
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
        }

    }catch(err){
     return{
         title: "DevMotors - Sua oficina especializada!",
         description: "Oficina de mecânica em São paulo a melhor da zona norte! Consertamos qualquer tipo de carro dos mais antigos aos mais novos!",
     }
    }


}


export default  async function PageDetail(
    {params}: PageProps){
    
    return(
        <>
        <Suspense fallback={<LoadingPage/>}>
            <Content slug={params.slug}/>
        </Suspense>
        </>
    )
}