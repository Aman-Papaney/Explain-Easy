// Simple toast notification utility
export const showToast = (message, type = "success", duration = 3000) => {
	// This is a placeholder for toast implementation
	// In production, you'd use a library like chakra-ui toast or react-toastify
	//console.log(`[${type.toUpperCase()}] ${message}`)
}

export const notifications = {
	success: (msg) => showToast(msg, "success"),
	error: (msg) => showToast(msg, "error"),
	info: (msg) => showToast(msg, "info"),
}
