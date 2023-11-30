import { useQuery } from "@tanstack/react-query";
import Search from "../../Sidebar/Search/Search";
import SectionTitle from './../../SectionTitle/SectionTitle';
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const AdminHome = () => {
    const {user}=useContext(AuthContext)

    // /api/v1/admin-stats
    const axiosSecure = useAxiosSecure()
    const { data: adminStats = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get("/api/v1/admin-stats")
            return res.data
        }
    })
    console.log(adminStats);
    console.log(adminStats.users);
    console.log(adminStats.payments);

    return (
        <div>

            {/* Search, and notification */}
            <Search />

            <SectionTitle title="Admin Home" />
<div className="flex " >


{/* total users */}
<div className="px-6 w-[400px]" >
      <div className="bg-white  rounded p-4" >

        <h2 className="text-3xl text-[#a2a2a2] mb-2" >Total Users</h2>
        
        <div className="flex gap-3" >

        <p className="text-xl text-[#2a2a2a] font-medium" >{adminStats?.users}</p>

<div className="flex items-center" >
<div className="bg-[#1a90ff] rounded text-white p-1 text-base  " >70.5%</div>
< HiMiniArrowTrendingUp className="text-2xl" />
</div>

        </div>
<h2 className="mt-2 text-base text-[#76757a]">You made an extra 06 this week</h2>

       </div>
      </div>

{/* payments users */}
<div className="px-6 w-[400px]" >
      <div className="bg-white   rounded p-4" >

        <h2 className="text-3xl text-[#a2a2a2] mb-2" >Total Payments of Users</h2>
        
        <div className="flex gap-3" >

        <p className="text-xl text-[#2a2a2a] font-medium" >${adminStats?.payments}</p>

<div className="flex items-center" >
<div className="bg-[#faad14] rounded text-white p-1 text-base  " >25.20%</div>
< HiMiniArrowTrendingUp className="text-2xl" />
</div>

        </div>
<h2 className="mt-2 text-base text-[#76757a]">You made an extra 0 this week</h2>

       </div>
      </div>

</div>


<div className="flex justify-center my-20" >
<div className="px-6 " >

    <div className="flex items-center gap-3" >
    <div>

<h2 className="text-center font-medium text-[#2a2a2a]" >{user?.displayName}</h2>
<h2  >{user?.email}</h2>
</div>

<div >
<img className="rounded-full" src={user?.photoURL}  />
</div>
    </div>

</div>
</div>


        </div>
    );
};

export default AdminHome;