import axios from "axios";

const api = axios.create({
    baseURL:'https://events-1-nbr4.onrender.com',
})

export const getAllEvents = async (page = 1, perPage = 12, fields = '') => {

    let params;
    let getString = '';
    if (fields.length > 0) {
        params = new URLSearchParams(fields).toString()
        getString = `/events/all?page=${page}&perPage=${perPage}&${params}`
    } else {
        getString = `/events/all?page=${page}&perPage=${perPage}`
    }

    try {
        const data = await api.get(getString);
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

export const getOneEvent = async (eventId) => {
    try {
        const data = await api.get(`events/${eventId}`);
        return data.data;
    } catch (error) {
        console.log(error)
    }
}

// export const myEvents = async (page = 1, perPage = 12, email) => {
//     try {
//         const data = await api.get(`/events/all?page=${page}&perPage=${perPage}&email=${email}`);
//         return data.data;
//     } catch (error) {
//         console.log(error)
//     }
// }


export const registerInEvent = async (eventId, payload) => {
    try {
        console.log(payload)
        const data = await api.post(`/users/${eventId}`, payload)
        return data.data;
    } catch (error) {
        console.log(error)
    }
}

export const createEvent = async (payload) => {
    try {
        console.log(payload)
        const data = await api.post(`/events/`, payload)
        return data.data;
    } catch (error) {
        console.log(error)
    }
}

export const deleteEvent = async (eventId) => {
    try {
        console.log(eventId)
        const data = await api.delete(`/events/${eventId}`)
        return data.data;
    } catch (error) {
        console.log(error)
    }
}

export const patchEvent = async (eventId, payload) => {
    try {
        console.log(payload)
        const data = await api.patch(`/events/${eventId}`, payload)
        return data.data;
    } catch (error) {
        console.log(error)
    }
}

export const registerUser = async (payload) => {
    try {
        console.log(payload)
        const data = await api.post('/auth/signup', payload);
        return data.data
    } catch (e) {
        console.log(e)
    }
}

export const loginUser = async (payload) => {
    try {
        console.log(payload)
        const data = await api.post('/auth/login', payload);
        return data.data
    } catch (e) {
        console.log(e)
    }
}

export const logoutUser = async () => {
    try {
        await api.post('/auth/logout');
        console.log('user is logout')
    } catch (e) {
        console.log(e)
    }
}
