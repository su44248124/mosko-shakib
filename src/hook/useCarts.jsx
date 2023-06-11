import { useQuery } from "@tanstack/react-query";
import useContexts from "./useContexts";


const useCarts = () => {
    const {user} = useContexts()
    const {data:carts,refech}=useQuery({
        queryKey:['carts',user?.emial],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json()
        }
        
    })
    return [carts,refech]
    
};

export default useCarts;