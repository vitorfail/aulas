import { useRouter } from "next/navigation";
export default function Check(){
    const router = useRouter()
    const item = localStorage.getItem("token")
    if(item == null){
        router.push("/")
    }
}
