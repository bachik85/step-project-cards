export const API = 'http://cards.danit.com.ua/cards';
const token = sessionStorage.getItem('token');

export function  getLogin(email, password) {
    return fetch( {
        url: `${API}/login`,
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
}



export function  createCard(card) {
    return fetch({
        url: `${API}/cards`,
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(card)
    })
}


export  function  getCards() {
    return fetch({
        url: `${API}/cards`,
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}



