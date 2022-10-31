import toast from "react-hot-toast";

export const clipboard = async (content) => {
    try {
        await navigator.clipboard.writeText(content);
        await navigator.clipboard.readText();
        toast.success('Copied!')
    } catch(err) {
        console.error(err)
    }
} 