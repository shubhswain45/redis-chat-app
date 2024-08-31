export interface Message {
	id: number;
	senderId: string;
	content: string;
	messageType: "text" | "image";
}

export interface User {
	id: string;
	name: string;
	email: string;
	image: string;
}

export const USERS = [
	{
		id: "2",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_SR21i_f_J7_Id-lAMbYi_GakqvdYF3WAKg&s",
		name: "John Doe",
		email: "johndoe@gmail.com",
	},
	{
		id: "3",
		image: "https://res.cloudinary.com/practicaldev/image/fetch/s---tss4geP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3qul2upbi8ko7vdg8bm7.png",
		name: "Elizabeth Smith",
		email: "elizabeth@gmail.com",
	},
	{
		id: "4",
		image: "/avatars/user4.png",
		name: "John Smith",
		email: "johnsmith@gmail.com",
	},
	{
		id: "5",
		image: "/avatars/user4.png",
		name: "Jane Doe",
		email: "janedoe@gmail.com",
	},
];

export const messages = [
	{
		id: 1,
		senderId: USERS[0].id,
		content: "Hello",
		messageType: "text",
	},
	{
		id: 2,
		senderId: USERS[1].id,
		content: "Hi",
		messageType: "text",
	},
	{
		id: 3,
		senderId: USERS[0].id,
		content: "How are you?",
		messageType: "text",
	},
	{
		id: 4,
		senderId: USERS[1].id,
		content: "I'm good",
		messageType: "text",
	},
	{
		id: 5,
		senderId: USERS[0].id,
		content: "What are you doing?",
		messageType: "text",
	},
	{
		id: 6,
		senderId: USERS[1].id,
		content: "Nothing much",
		messageType: "text",
	},
	{
		id: 7,
		senderId: USERS[0].id,
		content: "Cool",
		messageType: "text",
	},
	{
		id: 8,
		senderId: USERS[1].id,
		content: "Yeah",
		messageType: "text",
	},
	{
		id: 9,
		senderId: USERS[0].id,
		content: "Bye",
		messageType: "text",
	},
	{
		id: 10,
		senderId: USERS[1].id,
		content: "Bye",
		messageType: "text",
	},
] as Message[];