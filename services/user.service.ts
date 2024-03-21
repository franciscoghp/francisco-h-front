export const UserLogin = async (user: string) => {
        const response = await fetch("http://localhost:4200/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: user }),
        });
        return response.json()
}