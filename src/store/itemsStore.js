import { create } from "zustand";

const useitemStore = create((set) => ({
	items: [],
	createItem: (post) => set((state) => ({ items: [post, ...state.items] })),
	deleteItem: (id) => set((state) => ({ items: state.items.filter((post) => post.id !== id) })),
	setItems: (items) => set({ items }),
	// addComment: (postId, comment) =>
	// 	set((state) => ({
	// 		items: state.items.map((post) => {
	// 			if (post.id === postId) {
	// 				return {
	// 					...post,
	// 					comments: [...post.comments, comment],
	// 				};
	// 			}
	// 			return post;
	// 		}),
	// 	})),
}));

export default useitemStore;
