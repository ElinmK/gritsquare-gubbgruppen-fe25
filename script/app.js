import { getAllUsers, deleteUser } from "./userApi.js";
import { displayAllUsers } from "./uiMessages.js";
import { setupDragAndDelete } from "./dragdelete.js";
import { setupPostForm } from "./postForm.js";
import { setupAuth } from "./auth.js";

async function init() {
  const users = await getAllUsers();
  displayAllUsers(users);
  setupDragAndDelete(deleteUser, getAllUsers, displayAllUsers);
  setupPostForm({ displayAllUsers });
  setupAuth({ displayAllUsers });
}

init().catch((error) => {
  console.error("Init error:", error);
});
