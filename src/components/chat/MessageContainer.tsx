import { USERS } from "@/db/dummy";
import { useEffect } from "react";
import ChatTopBar from "./ChatTopBar";
import MessageList from "./MessageList";
import ChatBottomBar from "./ChatBottomBar";
import { useSelectedUser } from "@/store/useSelectedUser";
// import ChatBottomBar from "./ChatBottomBar";

const MessageContainer = () => {
	const {setSelectedUser} = useSelectedUser()

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") setSelectedUser(null);
		};

		document.addEventListener("keydown", handleEscape);

		return () => document.removeEventListener("keydown", handleEscape);
	}, [setSelectedUser]);


	return (
		<div className='flex flex-col justify-between w-full h-full'>
			<ChatTopBar />

			<div className='w-full overflow-y-auto overflow-x-hidden h-full flex flex-col'>
				<MessageList />
				<ChatBottomBar />
			</div>
		</div>
	);
};
export default MessageContainer;