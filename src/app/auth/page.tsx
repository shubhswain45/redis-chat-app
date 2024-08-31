import Image from "next/image";
import AuthButtons from "./AuthButtons";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
	const {isAuthenticated} = getKindeServerSession()

	if(await isAuthenticated()){
		return redirect("/")
	}

	return (
		<div className='flex h-screen w-full'>
			<div
				className='flex-1 flex overflow-hidden dark:bg-[#1c4b65aa] bg-[#1c4b65] relative 
      justify-center items-center'
			>
				<img
					src='https://static-00.iconduck.com/assets.00/chat-icon-1024x1024-o88plv3x.png'
					alt='Redis Logo'
					className='absolute -left-1/4 opacity-25 -bottom-52 lg:scale-125 xl:scale-100 scale-[2]
        pointer-events-none select-none -z-1'
				/>

				<div className='flex flex-col gap-2 px-4 xl:ml-40 text-center md:text-start font-semibold'>
					<p className='text-2xl md:text-3xl text-balance z-10'>
						<span className='bg-blue-500 px-2 font-bold text-white'>Empower</span> your conversations with real-time messaging
					</p>

					<p className='text-2xl md:text-3xl mb-32 text-balance z-10'>
						<span className='bg-yellow-500/90 font-bold px-2 text-white'>Stay Connected</span> anytime, anywhere
					</p>
					<AuthButtons />
				</div>
			</div>
			<div className='flex-1 relative overflow-hidden justify-center items-center hidden md:flex bg-noise'>
				<img
					src={"https://i.pinimg.com/736x/f5/3c/09/f53c0984735b1c8c25ab51ac574b3c2a.jpg"}
					alt='Hero Image'
					className='object-cover dark:opacity-60 opacity-90 pointer-events-none select-none h-full'
				/>
			</div>
		</div>
	);
};
export default page;
