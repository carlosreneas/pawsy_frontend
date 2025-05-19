const API_URL = 'https://api.example.com';

export const userApi = {
    async signUp(user) {
        alert(user);
        if(user == null) {
            throw new Error('User data is required');
        }
        return true;
        // return fetch('https://api.example.com/signup', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(user),
        // })
        // .then(response => response.json())
        // .catch(error => console.error('Error:', error));
    }
}
